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
              <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </Link>
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
              <Link 
                href="/register" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4"
              >
                Get Started
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
              Modernizing
              <span className="text-blue-600"> Botswana's </span>
              Justice System
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              JusticeConnect is a comprehensive digital platform designed specifically for the Botswana Justice Department. 
              Streamline court operations, improve efficiency, and enhance access to justice through cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4 text-lg px-8 py-3">
                Watch Demo
              </Link>
              <Link href="/register" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 text-lg px-8 py-3">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Courts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to digitize and streamline court operations in one comprehensive platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Management */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <div className="h-6 w-6 text-blue-600">📄</div>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Case Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Digital case filing, tracking, and management with real-time updates and comprehensive search capabilities.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Digital case registration</li>
                <li>• Real-time status tracking</li>
                <li>• Advanced search & filtering</li>
                <li>• Document management</li>
              </ul>
            </div>

            {/* Handwriting Recognition */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <div className="h-6 w-6 text-green-600">🔍</div>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">OCR Technology</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Convert handwritten documents to digital text with high accuracy using advanced OCR technology.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Handwriting recognition</li>
                <li>• Multi-language support</li>
                <li>• Batch processing</li>
                <li>• Export to multiple formats</li>
              </ul>
            </div>

            {/* Court Scheduling */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <div className="h-6 w-6 text-purple-600">📅</div>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Court Scheduling</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automated hearing management with conflict resolution and resource allocation.
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
                <h3 className="ml-3 text-xl font-semibold text-gray-900">User Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Role-based access control with secure authentication and comprehensive user management.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Role-based permissions</li>
                <li>• Secure authentication</li>
                <li>• Multi-court support</li>
                <li>• Audit logging</li>
              </ul>
            </div>

            {/* Security & Compliance */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <div className="h-6 w-6 text-red-600">🔒</div>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Security & Compliance</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Enterprise-grade security with full compliance to Botswana data protection regulations.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• End-to-end encryption</li>
                <li>• Data protection compliance</li>
                <li>• Regular security audits</li>
                <li>• Backup & recovery</li>
              </ul>
            </div>

            {/* Analytics & Reporting */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <div className="h-6 w-6 text-indigo-600">📊</div>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Analytics & Reporting</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive analytics and reporting tools for performance monitoring and insights.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Performance metrics</li>
                <li>• Custom reports</li>
                <li>• Data visualization</li>
                <li>• Export capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Court Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the digital transformation of Botswana's justice system. 
            Start your free trial today and experience the future of court management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
            >
              Start Free Trial
              <span className="ml-2 h-5 w-5">→</span>
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 text-blue-400">⚖️</div>
                <span className="ml-2 text-xl font-bold">JusticeConnect</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering Botswana's justice system through modern technology and digital transformation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/demo" className="hover:text-white transition-colors">Demo</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/training" className="hover:text-white transition-colors">Training</Link></li>
                <li><Link href="/status" className="hover:text-white transition-colors">System Status</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JusticeConnect. All rights reserved. Built for the people of Botswana.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 