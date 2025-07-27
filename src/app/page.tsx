import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-botswana-50 via-white to-botswana-100 relative overflow-hidden" 
         style={{background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #e0f2fe 100%)'}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-botswana-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-botswana-200 rounded-full opacity-20 animate-float" 
           style={{backgroundColor: '#bae6fd', borderRadius: '50%', opacity: 0.2}}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-botswana-300 rounded-full opacity-30 animate-float" 
           style={{backgroundColor: '#7dd3fc', borderRadius: '50%', opacity: 0.3, animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-botswana-400 rounded-full opacity-40 animate-float" 
           style={{backgroundColor: '#38bdf8', borderRadius: '50%', opacity: 0.4, animationDelay: '2s'}}></div>

      {/* Test Element to Verify Styling */}
      <div className="fixed top-4 right-4 bg-botswana-500 text-white px-4 py-2 rounded-lg shadow-botswana animate-glow"
           style={{backgroundColor: '#0ea5e9', color: 'white', padding: '8px 16px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(14, 165, 233, 0.1)'}}>
        🎨 Styling Active
      </div>

      {/* Header */}
      <header className="relative bg-white/90 backdrop-blur-sm shadow-botswana border-b border-botswana-200"
               style={{backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', boxShadow: '0 4px 6px -1px rgba(14, 165, 233, 0.1)', borderBottom: '1px solid #bae6fd'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-botswana animate-glow"
                   style={{background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(14, 165, 233, 0.1)'}}>
                ⚖️
              </div>
              <span className="ml-3 text-2xl font-bold gradient-text" 
                    style={{background: 'linear-gradient(135deg, #0284c7 0%, #075985 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                JusticeConnect
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#about" className="nav-link" style={{color: '#64748b', textDecoration: 'none'}}>
                About
              </Link>
              <Link href="#contact" className="nav-link" style={{color: '#64748b', textDecoration: 'none'}}>
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link 
                href="/login" 
                className="btn btn-outline px-6 py-2"
                style={{border: '2px solid #0ea5e9', color: '#0ea5e9', padding: '8px 24px', borderRadius: '8px', textDecoration: 'none'}}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="heading-responsive font-bold text-botswanaBlack-900 mb-6"
                  style={{fontSize: '3rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '24px'}}>
                Botswana
                <span className="gradient-text" 
                      style={{background: 'linear-gradient(135deg, #0284c7 0%, #075985 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                  {' '}Justice{' '}
                </span>
                System
              </h1>
              <p className="text-responsive text-botswanaBlack-600 mb-8 max-w-3xl mx-auto leading-relaxed"
                 style={{fontSize: '1.125rem', color: '#475569', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.75'}}>
                JusticeConnect is the official digital platform of the Botswana Justice Department. 
                Access your court's case management system and streamline judicial operations with 
                secure, efficient digital tools.
              </p>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-botswanaBlack-800 mb-8"
                  style={{fontSize: '1.875rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '32px'}}>
                Select Your Court
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Link 
                  href="/login?court=high-court-appeal" 
                  className="court-card group"
                  style={{backgroundColor: 'white', border: '2px solid #bae6fd', borderRadius: '16px', padding: '32px', textAlign: 'center', textDecoration: 'none', transition: 'all 0.3s'}}
                >
                  <div className="court-icon bg-gradient-to-br from-botswana-500 to-botswana-600 text-white"
                       style={{background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', fontSize: '2rem', marginBottom: '16px'}}>
                    🏛️
                  </div>
                  <h3 className="text-xl font-bold text-botswanaBlack-900 mb-3" style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '12px'}>High Court of Appeal</h3>
                  <p className="text-botswanaBlack-600" style={{color: '#475569'}}>Supreme appellate jurisdiction</p>
                  <div className="mt-4 text-botswana-500 font-medium group-hover:text-botswana-600 transition-colors" style={{marginTop: '16px', color: '#0ea5e9', fontWeight: '500'}}>
                    Access Court →
                  </div>
                </Link>
                
                <Link 
                  href="/login?court=high-court" 
                  className="court-card group"
                  style={{backgroundColor: 'white', border: '2px solid #bae6fd', borderRadius: '16px', padding: '32px', textAlign: 'center', textDecoration: 'none', transition: 'all 0.3s'}}
                >
                  <div className="court-icon bg-gradient-to-br from-botswana-500 to-botswana-600 text-white"
                       style={{background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', fontSize: '2rem', marginBottom: '16px'}}>
                    ⚖️
                  </div>
                  <h3 className="text-xl font-bold text-botswanaBlack-900 mb-3" style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '12px'}>High Court</h3>
                  <p className="text-botswanaBlack-600" style={{color: '#475569'}}>Superior court jurisdiction</p>
                  <div className="mt-4 text-botswana-500 font-medium group-hover:text-botswana-600 transition-colors" style={{marginTop: '16px', color: '#0ea5e9', fontWeight: '500'}}>
                    Access Court →
                  </div>
                </Link>
                
                <Link 
                  href="/login?court=industrial-court" 
                  className="court-card group"
                  style={{backgroundColor: 'white', border: '2px solid #bae6fd', borderRadius: '16px', padding: '32px', textAlign: 'center', textDecoration: 'none', transition: 'all 0.3s'}}
                >
                  <div className="court-icon bg-gradient-to-br from-botswana-500 to-botswana-600 text-white"
                       style={{background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', fontSize: '2rem', marginBottom: '16px'}}>
                    🏢
                  </div>
                  <h3 className="text-xl font-bold text-botswanaBlack-900 mb-3" style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '12px'}>Industrial Court</h3>
                  <p className="text-botswanaBlack-600" style={{color: '#475569'}}>Labor and employment disputes</p>
                  <div className="mt-4 text-botswana-500 font-medium group-hover:text-botswana-600 transition-colors" style={{marginTop: '16px', color: '#0ea5e9', fontWeight: '500'}}>
                    Access Court →
                  </div>
                </Link>
                
                <Link 
                  href="/login?court=magistrate-court" 
                  className="court-card group"
                  style={{backgroundColor: 'white', border: '2px solid #bae6fd', borderRadius: '16px', padding: '32px', textAlign: 'center', textDecoration: 'none', transition: 'all 0.3s'}}
                >
                  <div className="court-icon bg-gradient-to-br from-botswana-500 to-botswana-600 text-white"
                       style={{background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', fontSize: '2rem', marginBottom: '16px'}}>
                    📋
                  </div>
                  <h3 className="text-xl font-bold text-botswanaBlack-900 mb-3" style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '12px'}>Magistrate Court</h3>
                  <p className="text-botswanaBlack-600" style={{color: '#475569'}}>Lower court jurisdiction</p>
                  <div className="mt-4 text-botswana-500 font-medium group-hover:text-botswana-600 transition-colors" style={{marginTop: '16px', color: '#0ea5e9', fontWeight: '500'}}>
                    Access Court →
                  </div>
                </Link>
                
                <Link 
                  href="/login?court=customary-high-court-appeal" 
                  className="court-card group"
                  style={{backgroundColor: 'white', border: '2px solid #bae6fd', borderRadius: '16px', padding: '32px', textAlign: 'center', textDecoration: 'none', transition: 'all 0.3s'}}
                >
                  <div className="court-icon bg-gradient-to-br from-botswana-500 to-botswana-600 text-white"
                       style={{background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', fontSize: '2rem', marginBottom: '16px'}}>
                    🌿
                  </div>
                  <h3 className="text-xl font-bold text-botswanaBlack-900 mb-3" style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '12px'}>Customary High Court of Appeal</h3>
                  <p className="text-botswanaBlack-600" style={{color: '#475569'}}>Customary law appellate</p>
                  <div className="mt-4 text-botswana-500 font-medium group-hover:text-botswana-600 transition-colors" style={{marginTop: '16px', color: '#0ea5e9', fontWeight: '500'}}>
                    Access Court →
                  </div>
                </Link>
                
                <Link 
                  href="/login?court=customary-court" 
                  className="court-card group"
                  style={{backgroundColor: 'white', border: '2px solid #bae6fd', borderRadius: '16px', padding: '32px', textAlign: 'center', textDecoration: 'none', transition: 'all 0.3s'}}
                >
                  <div className="court-icon bg-gradient-to-br from-botswana-500 to-botswana-600 text-white"
                       style={{background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', fontSize: '2rem', marginBottom: '16px'}}>
                    🏘️
                  </div>
                  <h3 className="text-xl font-bold text-botswanaBlack-900 mb-3" style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '12px'}>Customary Court</h3>
                  <p className="text-botswanaBlack-600" style={{color: '#475569'}}>Traditional law jurisdiction</p>
                  <div className="mt-4 text-botswana-500 font-medium group-hover:text-botswana-600 transition-colors" style={{marginTop: '16px', color: '#0ea5e9', fontWeight: '500'}}>
                    Access Court →
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-botswanaBlack-900 mb-6">
              Government Digital Justice Platform
            </h2>
            <p className="text-xl text-botswanaBlack-600 max-w-3xl mx-auto leading-relaxed">
              Streamlining court operations across Botswana's judicial system with secure, 
              efficient digital tools designed for government use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Case Management */}
            <div className="feature-card">
              <div className="feature-icon bg-gradient-to-br from-botswana-500 to-botswana-600 text-white">
                📄
              </div>
              <h3 className="text-xl font-bold text-botswanaBlack-900 mb-4">Digital Case Management</h3>
              <p className="text-botswanaBlack-600 mb-6 leading-relaxed">
                Complete digital case filing, tracking, and management system for all court types 
                with real-time updates and comprehensive search capabilities.
              </p>
              <ul className="text-sm text-botswanaBlack-500 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-botswana-500 rounded-full mr-3"></span>
                  Electronic case registration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-botswana-500 rounded-full mr-3"></span>
                  Real-time status tracking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-botswana-500 rounded-full mr-3"></span>
                  Document management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-botswana-500 rounded-full mr-3"></span>
                  Case history tracking
                </li>
              </ul>
            </div>

            {/* Document Digitization */}
            <div className="feature-card">
              <div className="feature-icon bg-gradient-to-br from-success-500 to-success-600 text-white">
                🔍
              </div>
              <h3 className="text-xl font-bold text-botswanaBlack-900 mb-4">Document Digitization</h3>
              <p className="text-botswanaBlack-600 mb-6 leading-relaxed">
                Convert handwritten documents and forms to digital text with high accuracy 
                using advanced OCR technology and multi-language support.
              </p>
              <ul className="text-sm text-botswanaBlack-500 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-success-500 rounded-full mr-3"></span>
                  Handwriting recognition
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-success-500 rounded-full mr-3"></span>
                  Multi-language support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-success-500 rounded-full mr-3"></span>
                  Batch processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-success-500 rounded-full mr-3"></span>
                  Searchable documents
                </li>
              </ul>
            </div>

            {/* Hearing Management */}
            <div className="feature-card">
              <div className="feature-icon bg-gradient-to-br from-accent-500 to-accent-600 text-white">
                📅
              </div>
              <h3 className="text-xl font-bold text-botswanaBlack-900 mb-4">Hearing Management</h3>
              <p className="text-botswanaBlack-600 mb-6 leading-relaxed">
                Automated hearing scheduling with conflict resolution and resource allocation 
                for efficient court operations and calendar management.
              </p>
              <ul className="text-sm text-botswanaBlack-500 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Automated scheduling
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Conflict detection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Resource management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  Notification system
                </li>
              </ul>
            </div>

            {/* Administrative Control */}
            <div className="feature-card">
              <div className="feature-icon bg-gradient-to-br from-warning-500 to-warning-600 text-white">
                👥
              </div>
              <h3 className="text-xl font-bold text-botswanaBlack-900 mb-4">Administrative Control</h3>
              <p className="text-botswanaBlack-600 mb-6 leading-relaxed">
                Court administrators manage user access and permissions for their jurisdiction 
                with comprehensive role-based access control.
              </p>
              <ul className="text-sm text-botswanaBlack-500 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-warning-500 rounded-full mr-3"></span>
                  Role-based permissions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-warning-500 rounded-full mr-3"></span>
                  Court-specific access
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-warning-500 rounded-full mr-3"></span>
                  User management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-warning-500 rounded-full mr-3"></span>
                  Audit logging
                </li>
              </ul>
            </div>

            {/* Government Security */}
            <div className="feature-card">
              <div className="feature-icon bg-gradient-to-br from-error-500 to-error-600 text-white">
                🔒
              </div>
              <h3 className="text-xl font-bold text-botswanaBlack-900 mb-4">Government Security</h3>
              <p className="text-botswanaBlack-600 mb-6 leading-relaxed">
                Enterprise-grade security compliant with Botswana government standards 
                and data protection regulations.
              </p>
              <ul className="text-sm text-botswanaBlack-500 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-error-500 rounded-full mr-3"></span>
                  Government-grade encryption
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-error-500 rounded-full mr-3"></span>
                  Data protection compliance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-error-500 rounded-full mr-3"></span>
                  Regular security audits
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-error-500 rounded-full mr-3"></span>
                  Secure backup systems
                </li>
              </ul>
            </div>

            {/* Judicial Analytics */}
            <div className="feature-card">
              <div className="feature-icon bg-gradient-to-br from-botswana-700 to-botswana-800 text-white">
                📊
              </div>
              <h3 className="text-xl font-bold text-botswanaBlack-900 mb-4">Judicial Analytics</h3>
              <p className="text-botswanaBlack-600 mb-6 leading-relaxed">
                Comprehensive reporting and analytics for court performance monitoring 
                and government reporting requirements.
              </p>
              <ul className="text-sm text-botswanaBlack-500 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-botswana-700 rounded-full mr-3"></span>
                  Performance metrics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-botswana-700 rounded-full mr-3"></span>
                  Case statistics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-botswana-700 rounded-full mr-3"></span>
                  Judicial reports
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-botswana-700 rounded-full mr-3"></span>
                  Government reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-gradient-to-br from-botswana-50 to-botswana-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-botswanaBlack-900 mb-6">
              About JusticeConnect
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-botswanaBlack-600 space-y-6 leading-relaxed">
              <p>
                JusticeConnect is the official digital platform of the Botswana Justice Department, 
                designed to modernize and streamline court operations across the country's judicial system.
              </p>
              <p>
                This secure government platform serves all court types in Botswana, from the High Court 
                of Appeal to local Magistrate Courts, providing standardized digital tools for case 
                management, document processing, and court administration.
              </p>
              <p>
                Access is restricted to authorized court personnel and legal professionals, with each 
                court having its own administrative control over user management and permissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative bg-botswanaBlack-900 text-white py-16"
              style={{backgroundColor: '#0f172a', color: 'white', padding: '64px 0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                     style={{background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', borderRadius: '12px'}}>
                  ⚖️
                </div>
                <span className="ml-3 text-2xl font-bold" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>JusticeConnect</span>
              </div>
              <p className="text-botswana-200 mb-4 leading-relaxed" style={{color: '#bae6fd', marginBottom: '16px', lineHeight: '1.75'}}>
                Official digital platform of the Botswana Justice Department.
              </p>
              <p className="text-sm text-botswana-300" style={{fontSize: '0.875rem', color: '#7dd3fc'}}>
                © 2024 Botswana Justice Department. All rights reserved.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Government Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="https://www.gov.bw" className="text-botswana-200 hover:text-white transition-colors duration-200">
                    Government Portal
                  </Link>
                </li>
                <li>
                  <Link href="https://www.justice.gov.bw" className="text-botswana-200 hover:text-white transition-colors duration-200">
                    Justice Department
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-botswana-200 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-botswana-200 hover:text-white transition-colors duration-200">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/help" className="text-botswana-200 hover:text-white transition-colors duration-200">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-botswana-200 hover:text-white transition-colors duration-200">
                    Contact IT Support
                  </Link>
                </li>
                <li>
                  <Link href="/training" className="text-botswana-200 hover:text-white transition-colors duration-200">
                    Training Materials
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="text-botswana-200 hover:text-white transition-colors duration-200">
                    System Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-botswanaBlack-700 mt-12 pt-8 text-center" style={{borderTop: '1px solid #334155', marginTop: '48px', paddingTop: '32px', textAlign: 'center'}}>
            <p className="text-botswana-300" style={{color: '#7dd3fc'}}>
              Built for the Botswana Justice Department • Secure • Reliable • Government-Grade
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 