-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table
CREATE TABLE users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    display_name VARCHAR(255) NOT NULL,
    role VARCHAR(50) CHECK (role IN ('admin', 'judge', 'clerk', 'lawyer')) NOT NULL,
    court_id UUID REFERENCES courts(id),
    phone VARCHAR(50),
    department VARCHAR(255),
    position VARCHAR(255),
    avatar_url TEXT,
    language VARCHAR(10) DEFAULT 'en' CHECK (language IN ('en', 'tn')),
    notifications_enabled BOOLEAN DEFAULT true,
    theme VARCHAR(10) DEFAULT 'light' CHECK (theme IN ('light', 'dark')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_login TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT true
);

-- Create courts table
CREATE TABLE courts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) CHECK (type IN ('magistrate', 'high', 'supreme', 'specialized')) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(255) NOT NULL,
    district VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    phone VARCHAR(50),
    email VARCHAR(255),
    fax VARCHAR(50),
    operating_hours TEXT,
    holidays TEXT[],
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create cases table
CREATE TABLE cases (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    case_number VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(500) NOT NULL,
    case_type VARCHAR(50) CHECK (case_type IN ('civil', 'criminal', 'family', 'commercial')) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'closed', 'appealed')),
    description TEXT,
    filing_date DATE NOT NULL,
    court_id UUID REFERENCES courts(id) NOT NULL,
    judge_id UUID REFERENCES users(id),
    clerk_id UUID REFERENCES users(id),
    tags TEXT[],
    priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by UUID REFERENCES users(id) NOT NULL
);

-- Create documents table
CREATE TABLE documents (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    case_id UUID REFERENCES cases(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(50) CHECK (type IN ('filing', 'evidence', 'order', 'judgment')) NOT NULL,
    file_type VARCHAR(20) CHECK (file_type IN ('pdf', 'doc', 'image', 'text')) NOT NULL,
    original_file_name VARCHAR(255) NOT NULL,
    file_size BIGINT NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    storage_path TEXT NOT NULL,
    ocr_text TEXT,
    ocr_confidence DECIMAL(3,2),
    ocr_language VARCHAR(10) CHECK (ocr_language IN ('en', 'tn')),
    uploaded_by UUID REFERENCES users(id) NOT NULL,
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_modified TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    version INTEGER DEFAULT 1,
    is_public BOOLEAN DEFAULT false,
    access_list UUID[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create hearings table
CREATE TABLE hearings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    case_id UUID REFERENCES cases(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(50) CHECK (type IN ('initial', 'trial', 'sentencing', 'appeal')) NOT NULL,
    scheduled_date TIMESTAMP WITH TIME ZONE NOT NULL,
    duration INTEGER NOT NULL, -- in minutes
    courtroom VARCHAR(100) NOT NULL,
    judge_id UUID REFERENCES users(id),
    status VARCHAR(50) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'in-progress', 'completed', 'cancelled')),
    actual_start_time TIMESTAMP WITH TIME ZONE,
    actual_end_time TIMESTAMP WITH TIME ZONE,
    notes TEXT,
    notifications_sent BOOLEAN DEFAULT false,
    reminder_sent BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create audit_logs table for tracking changes
CREATE TABLE audit_logs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    table_name VARCHAR(100) NOT NULL,
    record_id UUID NOT NULL,
    action VARCHAR(50) CHECK (action IN ('INSERT', 'UPDATE', 'DELETE')) NOT NULL,
    old_values JSONB,
    new_values JSONB,
    user_id UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_cases_court_id ON cases(court_id);
CREATE INDEX idx_cases_status ON cases(status);
CREATE INDEX idx_cases_filing_date ON cases(filing_date);
CREATE INDEX idx_cases_judge_id ON cases(judge_id);
CREATE INDEX idx_cases_case_number ON cases(case_number);

CREATE INDEX idx_documents_case_id ON documents(case_id);
CREATE INDEX idx_documents_type ON documents(type);
CREATE INDEX idx_documents_uploaded_by ON documents(uploaded_by);
CREATE INDEX idx_documents_ocr_language ON documents(ocr_language);

CREATE INDEX idx_hearings_case_id ON hearings(case_id);
CREATE INDEX idx_hearings_scheduled_date ON hearings(scheduled_date);
CREATE INDEX idx_hearings_judge_id ON hearings(judge_id);
CREATE INDEX idx_hearings_status ON hearings(status);

CREATE INDEX idx_users_court_id ON users(court_id);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_email ON users(email);

CREATE INDEX idx_audit_logs_table_record ON audit_logs(table_name, record_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);

-- Create RLS (Row Level Security) policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE courts ENABLE ROW LEVEL SECURITY;
ALTER TABLE cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE hearings ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Users can only access their own profile
CREATE POLICY "Users can view own profile" ON users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON users
    FOR UPDATE USING (auth.uid() = id);

-- Courts are readable by all authenticated users
CREATE POLICY "Courts are viewable by authenticated users" ON courts
    FOR SELECT USING (auth.role() = 'authenticated');

-- Cases access based on user role and court
CREATE POLICY "Cases viewable by court members" ON cases
    FOR SELECT USING (
        auth.role() = 'authenticated' AND (
            EXISTS (
                SELECT 1 FROM users 
                WHERE users.id = auth.uid() 
                AND users.court_id = cases.court_id
            ) OR
            EXISTS (
                SELECT 1 FROM users 
                WHERE users.id = auth.uid() 
                AND users.role = 'admin'
            )
        )
    );

CREATE POLICY "Cases insertable by authorized users" ON cases
    FOR INSERT WITH CHECK (
        auth.role() = 'authenticated' AND (
            EXISTS (
                SELECT 1 FROM users 
                WHERE users.id = auth.uid() 
                AND users.role IN ('admin', 'clerk', 'judge')
            )
        )
    );

-- Documents with additional access control
CREATE POLICY "Documents viewable by case participants" ON documents
    FOR SELECT USING (
        auth.role() = 'authenticated' AND (
            documents.is_public = true OR
            EXISTS (
                SELECT 1 FROM cases 
                WHERE cases.id = documents.case_id 
                AND EXISTS (
                    SELECT 1 FROM users 
                    WHERE users.id = auth.uid() 
                    AND users.court_id = cases.court_id
                )
            ) OR
            EXISTS (
                SELECT 1 FROM users 
                WHERE users.id = auth.uid() 
                AND users.role = 'admin'
            )
        )
    );

-- Hearings access
CREATE POLICY "Hearings viewable by authenticated users" ON hearings
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Hearings manageable by authorized users" ON hearings
    FOR ALL USING (
        auth.role() = 'authenticated' AND (
            EXISTS (
                SELECT 1 FROM users 
                WHERE users.id = auth.uid() 
                AND users.role IN ('admin', 'clerk', 'judge')
            )
        )
    );

-- Audit logs (admin only)
CREATE POLICY "Audit logs viewable by admins" ON audit_logs
    FOR SELECT USING (
        auth.role() = 'authenticated' AND (
            EXISTS (
                SELECT 1 FROM users 
                WHERE users.id = auth.uid() 
                AND users.role = 'admin'
            )
        )
    );

-- Create functions for automatic timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for automatic updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_courts_updated_at BEFORE UPDATE ON courts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cases_updated_at BEFORE UPDATE ON cases
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_hearings_updated_at BEFORE UPDATE ON hearings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create function for audit logging
CREATE OR REPLACE FUNCTION audit_trigger_function()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO audit_logs (table_name, record_id, action, new_values, user_id)
        VALUES (TG_TABLE_NAME, NEW.id, 'INSERT', to_jsonb(NEW), auth.uid());
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO audit_logs (table_name, record_id, action, old_values, new_values, user_id)
        VALUES (TG_TABLE_NAME, NEW.id, 'UPDATE', to_jsonb(OLD), to_jsonb(NEW), auth.uid());
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO audit_logs (table_name, record_id, action, old_values, user_id)
        VALUES (TG_TABLE_NAME, OLD.id, 'DELETE', to_jsonb(OLD), auth.uid());
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$ language 'plpgsql';

-- Create audit triggers
CREATE TRIGGER audit_cases_trigger AFTER INSERT OR UPDATE OR DELETE ON cases
    FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();

CREATE TRIGGER audit_documents_trigger AFTER INSERT OR UPDATE OR DELETE ON documents
    FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();

CREATE TRIGGER audit_hearings_trigger AFTER INSERT OR UPDATE OR DELETE ON hearings
    FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();

-- Insert sample data for testing
INSERT INTO courts (name, type, address, city, district, phone, email, operating_hours) VALUES
('Gaborone High Court', 'high', 'Government Enclave, Gaborone', 'Gaborone', 'South East', '+267 395 0000', 'highcourt@gov.bw', 'Monday-Friday 8:00 AM - 5:00 PM'),
('Francistown Magistrate Court', 'magistrate', 'Main Street, Francistown', 'Francistown', 'North East', '+267 241 0000', 'francistown.court@gov.bw', 'Monday-Friday 8:00 AM - 4:00 PM'),
('Maun Magistrate Court', 'magistrate', 'Tshwaragano Road, Maun', 'Maun', 'North West', '+267 686 0000', 'maun.court@gov.bw', 'Monday-Friday 8:00 AM - 4:00 PM');

-- Insert sample users
INSERT INTO users (email, display_name, role, court_id, phone, department, position) VALUES
('admin@justiceconnect.bw', 'System Administrator', 'admin', NULL, '+267 711 11111', 'IT Department', 'System Administrator'),
('judge.molefe@justiceconnect.bw', 'Judge Molefe', 'judge', (SELECT id FROM courts WHERE name = 'Gaborone High Court'), '+267 711 22222', 'Judiciary', 'High Court Judge'),
('clerk.kgosi@justiceconnect.bw', 'Clerk Kgosi', 'clerk', (SELECT id FROM courts WHERE name = 'Gaborone High Court'), '+267 711 33333', 'Court Administration', 'Senior Clerk'); 