import { Feature108Demo } from "@/components/ui/demo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MobileNav } from "@/components/ui/mobile-nav";
import { 
  Scale, 
  FileText, 
  Calendar, 
  Users, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Clock,
  Award
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-botswana-50 via-white to-botswana-100">
      {/* Navigation */}
      <nav className="nav-glass border-b border-botswana-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 animate-fade-in-up">
              <div className="w-10 h-10 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-xl flex items-center justify-center hover-lift">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-botswana-900 font-display">JusticeConnect</h1>
                <p className="text-xs text-botswana-600">Botswana Justice Department</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-botswana-700 hover:text-botswana-900 transition-colors hover-lift">Features</a>
              <a href="#about" className="text-botswana-700 hover:text-botswana-900 transition-colors hover-lift">About</a>
              <a href="#contact" className="text-botswana-700 hover:text-botswana-900 transition-colors hover-lift">Contact</a>
              <Button className="btn-beautiful">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-botswana-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-botswana-100 text-botswana-700 border-botswana-200 animate-fade-in-up">
              <Star className="w-3 h-3 mr-2" />
              Modern Justice Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-botswana-900 mb-6 leading-tight font-display animate-fade-in-up">
              Transforming
              <span className="gradient-text"> Justice</span>
              <br />
              in Botswana
            </h1>
            <p className="text-xl text-botswana-700 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
              A modern digital platform revolutionizing court management with advanced case tracking, 
              document processing, and seamless scheduling tools for the Botswana justice system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <Button size="lg" className="btn-beautiful px-8 py-3 text-lg">
                Explore Platform
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-botswana-300 text-botswana-700 hover:bg-botswana-50 px-8 py-3 text-lg hover-lift">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up hover-lift">
              <div className="text-3xl font-bold text-botswana-600 mb-2">50+</div>
              <div className="text-botswana-700">Courts Connected</div>
            </div>
            <div className="text-center animate-fade-in-up hover-lift">
              <div className="text-3xl font-bold text-botswana-600 mb-2">10K+</div>
              <div className="text-botswana-700">Cases Processed</div>
            </div>
            <div className="text-center animate-fade-in-up hover-lift">
              <div className="text-3xl font-bold text-botswana-600 mb-2">99.9%</div>
              <div className="text-botswana-700">Uptime</div>
            </div>
            <div className="text-center animate-fade-in-up hover-lift">
              <div className="text-3xl font-bold text-botswana-600 mb-2">24/7</div>
              <div className="text-botswana-700">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-botswana-100 text-botswana-700 border-botswana-200">
              <Zap className="w-3 h-3 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-botswana-900 mb-6">
              Everything you need for
              <span className="bg-gradient-to-r from-botswana-500 to-botswana-600 bg-clip-text text-transparent"> modern justice</span>
            </h2>
            <p className="text-xl text-botswana-700 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with user-friendly design to streamline 
              court operations and improve access to justice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="card-beautiful p-8 animate-fade-in-up hover-lift">
              <div className="w-12 h-12 bg-botswana-500 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-botswana-900 mb-4">Case Management</h3>
              <p className="text-botswana-700 leading-relaxed">
                Streamlined case tracking with real-time updates, document management, and automated workflows.
              </p>
            </div>

            <div className="card-beautiful p-8 animate-fade-in-up hover-lift">
              <div className="w-12 h-12 bg-botswana-500 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-botswana-900 mb-4">Smart Scheduling</h3>
              <p className="text-botswana-700 leading-relaxed">
                Intelligent scheduling system with conflict detection and automated notifications.
              </p>
            </div>

            <div className="card-beautiful p-8 animate-fade-in-up hover-lift">
              <div className="w-12 h-12 bg-botswana-500 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-botswana-900 mb-4">User Management</h3>
              <p className="text-botswana-700 leading-relaxed">
                Comprehensive user roles and permissions with secure authentication and access control.
              </p>
            </div>

            <div className="card-beautiful p-8 animate-fade-in-up hover-lift">
              <div className="w-12 h-12 bg-botswana-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-botswana-900 mb-4">Security First</h3>
              <p className="text-botswana-700 leading-relaxed">
                Enterprise-grade security with encryption, audit trails, and compliance standards.
              </p>
            </div>

            <div className="card-beautiful p-8 animate-fade-in-up hover-lift">
              <div className="w-12 h-12 bg-botswana-500 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-botswana-900 mb-4">Cloud Native</h3>
              <p className="text-botswana-700 leading-relaxed">
                Built for the cloud with automatic scaling, backups, and disaster recovery.
              </p>
            </div>

            <div className="card-beautiful p-8 animate-fade-in-up hover-lift">
              <div className="w-12 h-12 bg-botswana-500 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-botswana-900 mb-4">Award Winning</h3>
              <p className="text-botswana-700 leading-relaxed">
                Recognized for excellence in digital transformation and public service innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="py-20 bg-gradient-to-br from-botswana-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-botswana-100 text-botswana-700 border-botswana-200">
              <CheckCircle className="w-3 h-3 mr-2" />
              Component Showcase
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-botswana-900 mb-6">
              Beautiful UI Components
            </h2>
            <p className="text-xl text-botswana-700 max-w-3xl mx-auto">
              Experience our modern component library built with shadcn/ui and Tailwind CSS, 
              showcasing responsive design and accessibility best practices.
            </p>
          </div>
          
          <Feature108Demo />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-botswana-500 to-botswana-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your court system?
          </h2>
          <p className="text-xl text-botswana-100 mb-8 max-w-2xl mx-auto">
            Join the digital revolution in justice. Get started with JusticeConnect today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-botswana-600 hover:bg-botswana-50 px-8 py-3 text-lg">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-botswana-600 px-8 py-3 text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-botswana-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-botswana-500 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">JusticeConnect</span>
              </div>
              <p className="text-botswana-300">
                Modernizing justice through technology and innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-botswana-300">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-botswana-300">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-botswana-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-botswana-800 mt-8 pt-8 text-center text-botswana-400">
            <p>&copy; 2024 JusticeConnect. All rights reserved. | Botswana Justice Department</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 