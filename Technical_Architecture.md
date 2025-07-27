# JusticeConnect - Technical Architecture Document

## 1. System Overview

### 1.1 Architecture Pattern
JusticeConnect follows a **Modern Web Application Architecture** with:
- **Frontend:** Next.js 14+ (React-based framework)
- **Backend:** Next.js API Routes + Firebase Functions
- **Database:** Firestore (NoSQL)
- **Hosting:** Firebase Hosting
- **Authentication:** Firebase Authentication
- **Storage:** Firebase Storage

### 1.2 System Architecture Diagram
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Client Layer  │    │   CDN Layer     │    │  Firebase Host  │
│                 │    │                 │    │                 │
│ - Web Browser   │◄──►│ - Static Assets │◄──►│ - Next.js App   │
│ - Mobile Web    │    │ - Caching       │    │ - API Routes    │
│ - PWA Support   │    │ - Edge Network  │    │ - SSR/SSG       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Firebase Auth  │    │  Firestore DB   │    │ Firebase Storage│
│                 │    │                 │    │                 │
│ - User Auth     │◄──►│ - NoSQL Data    │◄──►│ - Document Files│
│ - Role Mgmt     │    │ - Real-time     │    │ - Images        │
│ - SSO Support   │    │ - Offline Sync  │    │ - OCR Results   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ External APIs   │    │ OCR Services    │    │ Notification    │
│                 │    │                 │    │ Services        │
│ - Government    │    │ - Handwriting   │    │ - SMS Gateway   │
│ - Payment       │    │ - Text Recognition│  │ - Email Service │
│ - SMS/Email     │    │ - Multi-language│    │ - Push Notif    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 2. Technology Stack Details

### 2.1 Frontend Technologies
```typescript
// Core Framework
- Next.js 14+ (App Router)
- React 18+
- TypeScript 5+

// UI Framework
- Tailwind CSS
- Headless UI
- React Hook Form

// State Management
- Zustand (lightweight state management)
- React Query (server state)

// Additional Libraries
- React PDF (document viewing)
- React Dropzone (file uploads)
- Chart.js (analytics)
- React Calendar (scheduling)
```

### 2.2 Backend Technologies
```typescript
// API Layer
- Next.js API Routes
- Firebase Functions
- Express.js (for complex APIs)

// Database
- Firestore (NoSQL)
- Firebase Realtime Database (real-time features)

// Authentication
- Firebase Authentication
- Custom JWT tokens
- Role-based access control
```

### 2.3 Infrastructure
```yaml
# Firebase Services
- Firebase Hosting (web hosting)
- Firestore (database)
- Firebase Storage (file storage)
- Firebase Authentication (auth)
- Firebase Functions (serverless)
- Firebase Analytics (usage tracking)

# Third-party Services
- Google Cloud Vision API (OCR)
- Twilio (SMS notifications)
- SendGrid (email service)
- Cloudinary (image optimization)
```

## 3. Database Schema Design

### 3.1 Firestore Collections Structure

#### 3.1.1 Users Collection
```typescript
interface User {
  uid: string;                    // Firebase Auth UID
  email: string;
  displayName: string;
  role: UserRole;                 // 'admin' | 'judge' | 'clerk' | 'lawyer'
  courtId: string;                // Reference to court
  permissions: Permission[];
  profile: {
    phone: string;
    department: string;
    position: string;
    avatar?: string;
  };
  settings: {
    language: 'en' | 'tn';        // English or Setswana
    notifications: boolean;
    theme: 'light' | 'dark';
  };
  createdAt: Timestamp;
  updatedAt: Timestamp;
  lastLogin: Timestamp;
  isActive: boolean;
}
```

#### 3.1.2 Cases Collection
```typescript
interface Case {
  id: string;
  caseNumber: string;             // Unique case identifier
  title: string;
  caseType: CaseType;             // 'civil' | 'criminal' | 'family' | 'commercial'
  status: CaseStatus;             // 'pending' | 'active' | 'closed' | 'appealed'
  
  // Parties
  plaintiff: Party[];
  defendant: Party[];
  lawyers: Lawyer[];
  
  // Case Details
  description: string;
  filingDate: Timestamp;
  courtId: string;
  judgeId: string;
  clerkId: string;
  
  // Documents
  documents: DocumentReference[];
  
  // Scheduling
  hearings: Hearing[];
  nextHearing?: Timestamp;
  
  // Metadata
  tags: string[];
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
}
```

#### 3.1.3 Documents Collection
```typescript
interface Document {
  id: string;
  caseId: string;                 // Reference to case
  title: string;
  type: DocumentType;             // 'filing' | 'evidence' | 'order' | 'judgment'
  fileType: 'pdf' | 'doc' | 'image' | 'text';
  
  // File Information
  originalFileName: string;
  fileSize: number;
  mimeType: string;
  storagePath: string;            // Firebase Storage path
  
  // OCR Data
  ocrText?: string;               // Extracted text from handwriting
  ocrConfidence?: number;         // OCR accuracy score
  ocrLanguage?: 'en' | 'tn';      // Detected language
  
  // Metadata
  uploadedBy: string;
  uploadedAt: Timestamp;
  lastModified: Timestamp;
  version: number;
  
  // Access Control
  isPublic: boolean;
  accessList: string[];           // User IDs with access
  
  // Audit
  auditTrail: AuditEntry[];
}
```

#### 3.1.4 Hearings Collection
```typescript
interface Hearing {
  id: string;
  caseId: string;
  title: string;
  type: HearingType;              // 'initial' | 'trial' | 'sentencing' | 'appeal'
  
  // Scheduling
  scheduledDate: Timestamp;
  duration: number;               // Minutes
  courtroom: string;
  judgeId: string;
  
  // Status
  status: HearingStatus;          // 'scheduled' | 'in-progress' | 'completed' | 'cancelled'
  actualStartTime?: Timestamp;
  actualEndTime?: Timestamp;
  
  // Participants
  attendees: Attendee[];
  
  // Notes
  notes: string;
  outcomes: HearingOutcome[];
  
  // Notifications
  notificationsSent: boolean;
  reminderSent: boolean;
}
```

#### 3.1.5 Courts Collection
```typescript
interface Court {
  id: string;
  name: string;
  type: CourtType;                // 'magistrate' | 'high' | 'supreme' | 'specialized'
  location: {
    address: string;
    city: string;
    district: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  
  // Contact Information
  contact: {
    phone: string;
    email: string;
    fax?: string;
  };
  
  // Resources
  courtrooms: Courtroom[];
  judges: Judge[];
  clerks: Clerk[];
  
  // Settings
  operatingHours: OperatingHours;
  holidays: Date[];
  
  // Metadata
  isActive: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### 3.2 Database Indexes
```typescript
// Firestore Indexes for Performance
const indexes = {
  // Cases Collection
  'cases': [
    { courtId: 'asc', status: 'asc', filingDate: 'desc' },
    { judgeId: 'asc', status: 'asc', nextHearing: 'asc' },
    { caseNumber: 'asc' },
    { tags: 'array-contains', status: 'asc' }
  ],
  
  // Documents Collection
  'documents': [
    { caseId: 'asc', type: 'asc', uploadedAt: 'desc' },
    { uploadedBy: 'asc', uploadedAt: 'desc' },
    { ocrLanguage: 'asc', ocrConfidence: 'desc' }
  ],
  
  // Hearings Collection
  'hearings': [
    { caseId: 'asc', scheduledDate: 'asc' },
    { judgeId: 'asc', scheduledDate: 'asc' },
    { courtroom: 'asc', scheduledDate: 'asc' },
    { status: 'asc', scheduledDate: 'asc' }
  ],
  
  // Users Collection
  'users': [
    { role: 'asc', courtId: 'asc' },
    { email: 'asc' },
    { isActive: 'asc', lastLogin: 'desc' }
  ]
};
```

## 4. API Design

### 4.1 RESTful API Endpoints

#### 4.1.1 Authentication APIs
```typescript
// Authentication
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/refresh
POST   /api/auth/forgot-password
POST   /api/auth/reset-password

// User Management
GET    /api/users/profile
PUT    /api/users/profile
GET    /api/users/{id}
GET    /api/users (admin only)
POST   /api/users (admin only)
PUT    /api/users/{id} (admin only)
DELETE /api/users/{id} (admin only)
```

#### 4.1.2 Case Management APIs
```typescript
// Cases
GET    /api/cases
POST   /api/cases
GET    /api/cases/{id}
PUT    /api/cases/{id}
DELETE /api/cases/{id}
GET    /api/cases/{id}/documents
GET    /api/cases/{id}/hearings
GET    /api/cases/search

// Case Statistics
GET    /api/cases/stats
GET    /api/cases/stats/court/{courtId}
GET    /api/cases/stats/judge/{judgeId}
```

#### 4.1.3 Document Management APIs
```typescript
// Documents
GET    /api/documents
POST   /api/documents
GET    /api/documents/{id}
PUT    /api/documents/{id}
DELETE /api/documents/{id}
POST   /api/documents/{id}/ocr
GET    /api/documents/{id}/download

// OCR Processing
POST   /api/ocr/process
POST   /api/ocr/batch
GET    /api/ocr/status/{jobId}
```

#### 4.1.4 Scheduling APIs
```typescript
// Hearings
GET    /api/hearings
POST   /api/hearings
GET    /api/hearings/{id}
PUT    /api/hearings/{id}
DELETE /api/hearings/{id}
GET    /api/hearings/calendar
GET    /api/hearings/conflicts

// Court Resources
GET    /api/courts/{courtId}/courtrooms
GET    /api/courts/{courtId}/judges
GET    /api/courts/{courtId}/schedule
```

### 4.2 API Response Format
```typescript
// Standard API Response
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  timestamp: string;
}

// Example Response
{
  "success": true,
  "data": {
    "id": "case_123",
    "caseNumber": "CR/2024/001",
    "title": "State vs. John Doe",
    "status": "active"
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

## 5. Security Architecture

### 5.1 Authentication & Authorization
```typescript
// Firebase Authentication Configuration
const authConfig = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  signInFlow: 'popup',
  callbacks: {
    signInSuccessWithAuthResult: (authResult: any) => {
      // Custom logic after successful sign-in
      return false; // Prevent redirect
    }
  }
};

// Role-based Access Control
enum UserRole {
  ADMIN = 'admin',
  JUDGE = 'judge',
  CLERK = 'clerk',
  LAWYER = 'lawyer',
  MAGISTRATE = 'magistrate',
  REPORTER = 'reporter',
  VIEWER = 'viewer'
}

// Permission System
interface Permission {
  resource: string;    // 'cases', 'documents', 'hearings'
  action: string;      // 'create', 'read', 'update', 'delete'
  conditions?: any;    // Additional conditions
}
```

### 5.2 Data Security
```typescript
// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Cases access based on user role and court
    match /cases/{caseId} {
      allow read: if request.auth != null && 
        (resource.data.courtId in get(/databases/$(database)/documents/users/$(request.auth.uid)).data.courts ||
         request.auth.token.role == 'admin');
      allow write: if request.auth != null && 
        (request.auth.token.role in ['admin', 'clerk', 'judge']);
    }
    
    // Documents with additional access control
    match /documents/{documentId} {
      allow read: if request.auth != null && 
        (resource.data.isPublic || 
         resource.data.caseId in get(/databases/$(database)/documents/users/$(request.auth.uid)).data.cases ||
         request.auth.token.role == 'admin');
    }
  }
}
```

## 6. Performance Optimization

### 6.1 Frontend Optimization
```typescript
// Next.js Configuration
const nextConfig = {
  // Image Optimization
  images: {
    domains: ['firebasestorage.googleapis.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Bundle Optimization
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@headlessui/react', 'react-hook-form'],
  },
  
  // Caching Strategy
  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, stale-while-revalidate=600',
          },
        ],
      },
    ];
  },
};
```

### 6.2 Database Optimization
```typescript
// Firestore Query Optimization
const optimizedQueries = {
  // Pagination with cursor
  getCases: (limit: number, lastDoc?: any) => {
    let query = db.collection('cases')
      .orderBy('filingDate', 'desc')
      .limit(limit);
    
    if (lastDoc) {
      query = query.startAfter(lastDoc);
    }
    
    return query.get();
  },
  
  // Compound queries with indexes
  getCasesByCourt: (courtId: string, status: string) => {
    return db.collection('cases')
      .where('courtId', '==', courtId)
      .where('status', '==', status)
      .orderBy('filingDate', 'desc')
      .get();
  },
  
  // Real-time listeners with selective updates
  subscribeToCaseUpdates: (caseId: string) => {
    return db.collection('cases')
      .doc(caseId)
      .onSnapshot((doc) => {
        // Handle real-time updates
      });
  }
};
```

## 7. Deployment Architecture

### 7.1 Firebase Hosting Configuration
```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

### 7.2 Environment Configuration
```typescript
// Environment Variables
const config = {
  development: {
    firebase: {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
    },
    ocr: {
      apiKey: process.env.GOOGLE_CLOUD_VISION_API_KEY,
      endpoint: process.env.OCR_ENDPOINT
    },
    notifications: {
      twilio: {
        accountSid: process.env.TWILIO_ACCOUNT_SID,
        authToken: process.env.TWILIO_AUTH_TOKEN,
        phoneNumber: process.env.TWILIO_PHONE_NUMBER
      },
      sendgrid: {
        apiKey: process.env.SENDGRID_API_KEY
      }
    }
  }
};
```

## 8. Monitoring & Analytics

### 8.1 Application Monitoring
```typescript
// Error Tracking
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

// Performance Monitoring
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric: any) {
  // Send to Firebase Analytics
  analytics.logEvent('web_vitals', {
    metric_name: metric.name,
    metric_value: metric.value,
    metric_id: metric.id,
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### 8.2 Database Monitoring
```typescript
// Firestore Usage Monitoring
const monitorFirestoreUsage = () => {
  // Monitor read/write operations
  // Track query performance
  // Alert on unusual patterns
};

// Real-time Performance Metrics
const performanceMetrics = {
  readOperations: 0,
  writeOperations: 0,
  queryLatency: [],
  errorRate: 0,
  
  trackOperation: (operation: 'read' | 'write', latency: number) => {
    if (operation === 'read') {
      performanceMetrics.readOperations++;
    } else {
      performanceMetrics.writeOperations++;
    }
    performanceMetrics.queryLatency.push(latency);
  }
};
```

## 9. Backup & Disaster Recovery

### 9.1 Backup Strategy
```typescript
// Automated Backup Configuration
const backupConfig = {
  schedule: '0 2 * * *', // Daily at 2 AM
  retention: '30 days',
  collections: [
    'users',
    'cases',
    'documents',
    'hearings',
    'courts'
  ],
  storage: 'firebase-storage-backup-bucket',
  encryption: true
};

// Data Export Functions
const exportData = async (collection: string) => {
  const snapshot = await db.collection(collection).get();
  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  
  // Store in backup bucket
  await storage.bucket(backupConfig.storage)
    .file(`${collection}_${Date.now()}.json`)
    .save(JSON.stringify(data, null, 2));
};
```

### 9.2 Disaster Recovery Plan
```typescript
// Recovery Procedures
const disasterRecovery = {
  // Data Restoration
  restoreFromBackup: async (collection: string, backupDate: string) => {
    const backupFile = await storage.bucket(backupConfig.storage)
      .file(`${collection}_${backupDate}.json`)
      .download();
    
    const data = JSON.parse(backupFile[0].toString());
    
    // Batch write to restore data
    const batch = db.batch();
    data.forEach((doc: any) => {
      const ref = db.collection(collection).doc(doc.id);
      batch.set(ref, doc);
    });
    
    await batch.commit();
  },
  
  // System Recovery
  systemRecovery: async () => {
    // 1. Restore critical collections
    await restoreFromBackup('users', 'latest');
    await restoreFromBackup('cases', 'latest');
    
    // 2. Verify data integrity
    await verifyDataIntegrity();
    
    // 3. Restore services
    await restoreServices();
  }
};
```

## 10. Testing Strategy

### 10.1 Testing Framework
```typescript
// Testing Stack
const testingStack = {
  unit: 'Jest',
  integration: 'Jest + Supertest',
  e2e: 'Playwright',
  visual: 'Percy',
  performance: 'Lighthouse CI'
};

// Test Configuration
const jestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
  ],
};
```

### 10.2 Test Categories
```typescript
// Unit Tests
describe('Case Management', () => {
  test('should create new case', async () => {
    const caseData = {
      title: 'Test Case',
      caseType: 'civil',
      courtId: 'court_123'
    };
    
    const result = await createCase(caseData);
    expect(result).toHaveProperty('id');
    expect(result.title).toBe(caseData.title);
  });
});

// Integration Tests
describe('OCR Processing', () => {
  test('should process handwritten document', async () => {
    const document = await uploadDocument('handwritten.pdf');
    const ocrResult = await processOCR(document.id);
    
    expect(ocrResult.text).toBeDefined();
    expect(ocrResult.confidence).toBeGreaterThan(0.8);
  });
});

// E2E Tests
test('complete case workflow', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[data-testid="email"]', 'clerk@court.gov.bw');
  await page.fill('[data-testid="password"]', 'password123');
  await page.click('[data-testid="login-button"]');
  
  await page.goto('/cases/new');
  await page.fill('[data-testid="case-title"]', 'Test Case');
  await page.click('[data-testid="submit-case"]');
  
  await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
});
```

This technical architecture document provides a comprehensive blueprint for implementing JusticeConnect with modern web technologies, ensuring scalability, security, and performance for the Botswana Justice Department's needs. 