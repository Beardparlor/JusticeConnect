import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="h-8 w-8 text-blue-600">⚖️</div>
              <span className="ml-2 text-xl font-bold text-gray-900">JusticeConnect</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link 
                href="/login" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Botswana
              <span className="text-blue-600"> Justice </span>
              System
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              JusticeConnect is the official digital platform of the Botswana Justice Department. 
              Access your court's case management system and streamline judicial operations.
            </p>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Select Your Court
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <Link 
                  href="/login?court=high-court-appeal" 
                  className="bg-white border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg rounded-lg p-6 text-center transition-all duration-200"
                >
                  <div className="text-3xl mb-3">🏛️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">High Court of Appeal</h3>
                  <p className="text-sm text-gray-600">Supreme appellate jurisdiction</p>
                </Link>
                
                <Link 
                  href="/login?court=high-court" 
                  className="bg-white border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg rounded-lg p-6 text-center transition-all duration-200"
                >
                  <div className="text-3xl mb-3">⚖️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">High Court</h3>
                  <p className="text-sm text-gray-600">Superior court jurisdiction</p>
                </Link>
                
                <Link 
                  href="/login?court=industrial-court" 
                  className="bg-white border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg rounded-lg p-6 text-center transition-all duration-200"
                >
                  <div className="text-3xl mb-3">🏢</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Industrial Court</h3>
                  <p className="text-sm text-gray-600">Labor and employment disputes</p>
                </Link>
                
                <Link 
                  href="/login?court=magistrate-court" 
                  className="bg-white border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg rounded-lg p-6 text-center transition-all duration-200"
                >
                  <div className="text-3xl mb-3">📋</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Magistrate Court</h3>
                  <p className="text-sm text-gray-600">Lower court jurisdiction</p>
                </Link>
                
                <Link 
                  href="/login?court=customary-high-court-appeal" 
                  className="bg-white border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg rounded-lg p-6 text-center transition-all duration-200"
                >
                  <div className="text-3xl mb-3">🌿</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Customary High Court of Appeal</h3>
                  <p className="text-sm text-gray-600">Customary law appellate</p>
                </Link>
                
                <Link 
                  href="/login?court=customary-court" 
                  className="bg-white border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg rounded-lg p-6 text-center transition-all duration-200"
                >
                  <div className="text-3xl mb-3">🏘️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Customary Court</h3>
                  <p className="text-sm text-gray-600">Traditional law jurisdiction</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Government Digital Justice Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlining court operations across Botswana's judicial system with secure, efficient digital tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Management */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <div className="h-6 w-6 text-blue-600">📄</div>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Digital Case Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Complete digital case filing, tracking, and management system for all court types.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Electronic case registration</li>
                <li>• Real-time status tracking</li>
                <li>• Document management</li>
                <li>• Case history tracking</li>
              </ul>
            </div>

            {/* OCR Technology */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <div className="h-6 w-6 text-green-600">🔍</div>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Document Digitization</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Convert handwritten documents and forms to digital text with high accuracy.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Handwriting recognition</li>
                <li>• Multi-language support</li>
                <li>• Batch processing</li>
                <li>• Searchable documents</li>
              </ul>
            </div>

            {/* Court Scheduling */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <div className="h-6 w-6 text-purple-600">📅</div>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Hearing Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automated hearing scheduling with conflict resolution and resource allocation.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Automated scheduling</li>
                <li>• Conflict detection</li>
                <li>• Resource management</li>
                <li>• Notification system</li>
              </ul>
            </div>

            {/* User Management */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <div className="h-6 w-6 text-orange-600">👥</div>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Administrative Control</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Court administrators manage user access and permissions for their jurisdiction.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Role-based permissions</li>
                <li>• Court-specific access</li>
                <li>• User management</li>
                <li>• Audit logging</li>
              </ul>
            </div>

            {/* Security & Compliance */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <div className="h-6 w-6 text-red-600">🔒</div>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Government Security</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Enterprise-grade security compliant with Botswana government standards.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Government-grade encryption</li>
                <li>• Data protection compliance</li>
                <li>• Regular security audits</li>
                <li>• Secure backup systems</li>
              </ul>
            </div>

            {/* Analytics & Reporting */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <div className="h-6 w-6 text-indigo-600">📊</div>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Judicial Analytics</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive reporting and analytics for court performance monitoring.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Performance metrics</li>
                <li>• Case statistics</li>
                <li>• Judicial reports</li>
                <li>• Government reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About JusticeConnect
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-600 space-y-6">
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
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 text-blue-400">⚖️</div>
                <span className="ml-2 text-xl font-bold">JusticeConnect</span>
              </div>
              <p className="text-gray-400 mb-4">
                Official digital platform of the Botswana Justice Department.
              </p>
              <p className="text-sm text-gray-500">
                © 2024 Botswana Justice Department. All rights reserved.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Government Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="https://www.gov.bw" className="hover:text-white transition-colors">Government Portal</Link></li>
                <li><Link href="https://www.justice.gov.bw" className="hover:text-white transition-colors">Justice Department</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact IT Support</Link></li>
                <li><Link href="/training" className="hover:text-white transition-colors">Training Materials</Link></li>
                <li><Link href="/status" className="hover:text-white transition-colors">System Status</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>Built for the Botswana Justice Department • Secure • Reliable • Government-Grade</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 