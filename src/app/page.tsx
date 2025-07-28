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
  Award,
  ChevronRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-botswana-50 via-white to-botswana-100">
      {/* Navigation */}
      <nav className="nav-glass border-b border-botswana-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 animate-fade-in-up">
              <div className="w-12 h-12 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-xl flex items-center justify-center hover-lift shadow-lg">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-botswana-900 font-display">JusticeConnect</h1>
                <p className="text-sm text-botswana-600 font-medium">Botswana Justice Department</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#features" className="text-botswana-700 hover:text-botswana-900 transition-colors hover-lift font-medium">Features</a>
              <a href="#about" className="text-botswana-700 hover:text-botswana-900 transition-colors hover-lift font-medium">About</a>
              <a href="#contact" className="text-botswana-700 hover:text-botswana-900 transition-colors hover-lift font-medium">Contact</a>
              <Button className="btn-beautiful px-6 py-2">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-botswana-500/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-5xl mx-auto">
            <Badge className="mb-8 bg-botswana-100 text-botswana-700 border-botswana-200 px-4 py-2 text-sm font-medium animate-fade-in-up">
              <Star className="w-4 h-4 mr-2" />
              Modern Justice Platform
            </Badge>
            <h1 className="text-6xl lg:text-8xl font-bold text-botswana-900 mb-8 leading-tight font-display animate-fade-in-up">
              Transforming
              <span className="gradient-text block"> Justice</span>
              in Botswana
            </h1>
            <p className="text-xl lg:text-2xl text-botswana-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-light">
              A modern digital platform revolutionizing court management with advanced case tracking, 
              document processing, and seamless scheduling tools for the Botswana justice system.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
              <Button size="lg" className="btn-beautiful px-10 py-4 text-lg font-semibold">
                Explore Platform
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-botswana-300 text-botswana-700 hover:bg-botswana-50 px-10 py-4 text-lg font-semibold hover-lift">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="container mx-auto px-6 mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="stats-card animate-fade-in-up">
              <div className="text-5xl font-bold text-botswana-600 mb-4">50+</div>
              <div className="text-botswana-700 font-semibold text-lg">Courts Connected</div>
            </div>
            <div className="stats-card animate-fade-in-up">
              <div className="text-5xl font-bold text-botswana-600 mb-4">10K+</div>
              <div className="text-botswana-700 font-semibold text-lg">Cases Processed</div>
            </div>
            <div className="stats-card animate-fade-in-up">
              <div className="text-5xl font-bold text-botswana-600 mb-4">99.9%</div>
              <div className="text-botswana-700 font-semibold text-lg">Uptime</div>
            </div>
            <div className="stats-card animate-fade-in-up">
              <div className="text-5xl font-bold text-botswana-600 mb-4">24/7</div>
              <div className="text-botswana-700 font-semibold text-lg">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-botswana-100 text-botswana-700 border-botswana-200 px-4 py-2 text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-botswana-900 mb-8 font-display">
              Everything you need for
              <span className="gradient-text block"> modern justice</span>
            </h2>
            <p className="text-xl lg:text-2xl text-botswana-700 max-w-4xl mx-auto leading-relaxed font-light">
              Our platform combines cutting-edge technology with user-friendly design to streamline 
              court operations and improve access to justice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="card-beautiful p-8 animate-fade-in-up hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-botswana-900 mb-6 font-display">Case Management</h3>
              <p className="text-botswana-700 leading-relaxed text-lg">
                Streamlined case tracking with real-time updates, document management, and automated workflows.
              </p>
            </div>

            <div className="card-beautiful p-8 animate-fade-in-up hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-botswana-900 mb-6 font-display">Smart Scheduling</h3>
              <p className="text-botswana-700 leading-relaxed text-lg">
                Intelligent scheduling system with conflict detection and automated notifications.
              </p>
            </div>

            <div className="card-beautiful p-8 animate-fade-in-up hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-botswana-900 mb-6 font-display">User Management</h3>
              <p className="text-botswana-700 leading-relaxed text-lg">
                Comprehensive user roles and permissions with secure authentication and access control.
              </p>
            </div>

            <div className="card-beautiful p-8 animate-fade-in-up hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-botswana-900 mb-6 font-display">Security First</h3>
              <p className="text-botswana-700 leading-relaxed text-lg">
                Enterprise-grade security with encryption, audit trails, and compliance standards.
              </p>
            </div>

            <div className="card-beautiful p-8 animate-fade-in-up hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-botswana-900 mb-6 font-display">Cloud Native</h3>
              <p className="text-botswana-700 leading-relaxed text-lg">
                Built for the cloud with automatic scaling, backups, and disaster recovery.
              </p>
            </div>

            <div className="card-beautiful p-8 animate-fade-in-up hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-botswana-900 mb-6 font-display">Award Winning</h3>
              <p className="text-botswana-700 leading-relaxed text-lg">
                Recognized for excellence in digital transformation and public service innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-botswana-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-botswana-100 text-botswana-700 border-botswana-200 px-4 py-2 text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              Component Showcase
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-botswana-900 mb-8 font-display">
              Beautiful UI Components
            </h2>
            <p className="text-xl lg:text-2xl text-botswana-700 max-w-4xl mx-auto leading-relaxed font-light">
              Experience our modern component library built with shadcn/ui and Tailwind CSS, 
              showcasing responsive design and accessibility best practices.
            </p>
          </div>
          
          <Feature108Demo />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-botswana-500 to-botswana-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 font-display">
            Ready to transform your court system?
          </h2>
          <p className="text-xl lg:text-2xl text-botswana-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Join the digital revolution in justice. Get started with JusticeConnect today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-botswana-600 hover:bg-botswana-50 px-12 py-4 text-lg font-semibold shadow-xl">
              Start Free Trial
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-botswana-600 px-12 py-4 text-lg font-semibold">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-botswana-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 bg-botswana-500 rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold font-display">JusticeConnect</span>
              </div>
              <p className="text-botswana-300 text-lg leading-relaxed">
                Modernizing justice through technology and innovation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6 font-display">Platform</h4>
              <ul className="space-y-4 text-botswana-300">
                <li><a href="#" className="hover:text-white transition-colors text-lg">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6 font-display">Support</h4>
              <ul className="space-y-4 text-botswana-300">
                <li><a href="#" className="hover:text-white transition-colors text-lg">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6 font-display">Company</h4>
              <ul className="space-y-4 text-botswana-300">
                <li><a href="#" className="hover:text-white transition-colors text-lg">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-botswana-800 mt-12 pt-8 text-center text-botswana-400">
            <p className="text-lg">&copy; 2024 JusticeConnect. All rights reserved. | Botswana Justice Department</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 