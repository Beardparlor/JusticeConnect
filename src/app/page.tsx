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
  ChevronRight,
  Play,
  Download,
  ExternalLink
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-botswana-50 via-white to-botswana-100">
      {/* Navigation */}
      <nav className="nav-glass border-b border-botswana-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 animate-fade-in-up">
              <div className="w-14 h-14 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-2xl flex items-center justify-center hover-lift shadow-xl">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-botswana-900 font-display">JusticeConnect</h1>
                <p className="text-sm text-botswana-600 font-medium">Botswana Justice Department</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-10">
              <a href="#features" className="text-botswana-700 hover:text-botswana-900 transition-colors hover-lift font-medium text-lg">Features</a>
              <a href="#about" className="text-botswana-700 hover:text-botswana-900 transition-colors hover-lift font-medium text-lg">About</a>
              <a href="#contact" className="text-botswana-700 hover:text-botswana-900 transition-colors hover-lift font-medium text-lg">Contact</a>
              <Button className="btn-beautiful px-8 py-3 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-botswana-500/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-dots opacity-50"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-6xl mx-auto">
            <Badge className="mb-10 bg-botswana-100 text-botswana-700 border-botswana-200 px-6 py-3 text-base font-semibold animate-fade-in-up">
              <Star className="w-5 h-5 mr-3" />
              Modern Justice Platform
            </Badge>
            <h1 className="text-7xl lg:text-9xl font-bold text-botswana-900 mb-10 leading-tight font-display animate-fade-in-up">
              Transforming
              <span className="gradient-text block mt-2"> Justice</span>
              in Botswana
            </h1>
            <p className="text-2xl lg:text-3xl text-botswana-700 mb-16 max-w-5xl mx-auto leading-relaxed animate-fade-in-up font-light">
              A modern digital platform revolutionizing court management with advanced case tracking, 
              document processing, and seamless scheduling tools for the Botswana justice system.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-up mb-20">
              <Button size="lg" className="btn-beautiful px-12 py-5 text-xl font-bold">
                Explore Platform
                <ArrowRight className="w-7 h-7 ml-3" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-botswana-300 text-botswana-700 hover:bg-botswana-50 px-12 py-5 text-xl font-bold hover-lift group">
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="container mx-auto px-6 mt-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
            <div className="stats-card animate-fade-in-up">
              <div className="text-6xl font-bold text-botswana-600 mb-6">50+</div>
              <div className="text-botswana-700 font-semibold text-xl">Courts Connected</div>
            </div>
            <div className="stats-card animate-fade-in-up">
              <div className="text-6xl font-bold text-botswana-600 mb-6">10K+</div>
              <div className="text-botswana-700 font-semibold text-xl">Cases Processed</div>
            </div>
            <div className="stats-card animate-fade-in-up">
              <div className="text-6xl font-bold text-botswana-600 mb-6">99.9%</div>
              <div className="text-botswana-700 font-semibold text-xl">Uptime</div>
            </div>
            <div className="stats-card animate-fade-in-up">
              <div className="text-6xl font-bold text-botswana-600 mb-6">24/7</div>
              <div className="text-botswana-700 font-semibold text-xl">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 lg:py-40 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-botswana-50/30 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-24">
            <Badge className="mb-8 bg-botswana-100 text-botswana-700 border-botswana-200 px-6 py-3 text-base font-semibold">
              <Zap className="w-5 h-5 mr-3" />
              Powerful Features
            </Badge>
            <h2 className="text-6xl lg:text-7xl font-bold text-botswana-900 mb-10 font-display">
              Everything you need for
              <span className="gradient-text block mt-4"> modern justice</span>
            </h2>
            <p className="text-2xl lg:text-3xl text-botswana-700 max-w-5xl mx-auto leading-relaxed font-light">
              Our platform combines cutting-edge technology with user-friendly design to streamline 
              court operations and improve access to justice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            <div className="card-beautiful p-10 animate-fade-in-up hover-lift group">
              <div className="w-20 h-20 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-3xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-botswana-900 mb-8 font-display">Case Management</h3>
              <p className="text-botswana-700 leading-relaxed text-xl">
                Streamlined case tracking with real-time updates, document management, and automated workflows.
              </p>
            </div>

            <div className="card-beautiful p-10 animate-fade-in-up hover-lift group">
              <div className="w-20 h-20 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-3xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-botswana-900 mb-8 font-display">Smart Scheduling</h3>
              <p className="text-botswana-700 leading-relaxed text-xl">
                Intelligent scheduling system with conflict detection and automated notifications.
              </p>
            </div>

            <div className="card-beautiful p-10 animate-fade-in-up hover-lift group">
              <div className="w-20 h-20 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-3xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-botswana-900 mb-8 font-display">User Management</h3>
              <p className="text-botswana-700 leading-relaxed text-xl">
                Comprehensive user roles and permissions with secure authentication and access control.
              </p>
            </div>

            <div className="card-beautiful p-10 animate-fade-in-up hover-lift group">
              <div className="w-20 h-20 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-3xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-botswana-900 mb-8 font-display">Security First</h3>
              <p className="text-botswana-700 leading-relaxed text-xl">
                Enterprise-grade security with encryption, audit trails, and compliance standards.
              </p>
            </div>

            <div className="card-beautiful p-10 animate-fade-in-up hover-lift group">
              <div className="w-20 h-20 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-3xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-botswana-900 mb-8 font-display">Cloud Native</h3>
              <p className="text-botswana-700 leading-relaxed text-xl">
                Built for the cloud with automatic scaling, backups, and disaster recovery.
              </p>
            </div>

            <div className="card-beautiful p-10 animate-fade-in-up hover-lift group">
              <div className="w-20 h-20 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-3xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-botswana-900 mb-8 font-display">Award Winning</h3>
              <p className="text-botswana-700 leading-relaxed text-xl">
                Recognized for excellence in digital transformation and public service innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-botswana-50 to-white relative">
        <div className="absolute inset-0 bg-dots opacity-50"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-24">
            <Badge className="mb-8 bg-botswana-100 text-botswana-700 border-botswana-200 px-6 py-3 text-base font-semibold">
              <CheckCircle className="w-5 h-5 mr-3" />
              Component Showcase
            </Badge>
            <h2 className="text-6xl lg:text-7xl font-bold text-botswana-900 mb-10 font-display">
              Beautiful UI Components
            </h2>
            <p className="text-2xl lg:text-3xl text-botswana-700 max-w-5xl mx-auto leading-relaxed font-light">
              Experience our modern component library built with shadcn/ui and Tailwind CSS, 
              showcasing responsive design and accessibility best practices.
            </p>
          </div>
          
          <Feature108Demo />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-botswana-500 to-botswana-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-50"></div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-6xl lg:text-7xl font-bold text-white mb-10 font-display">
            Ready to transform your court system?
          </h2>
          <p className="text-2xl lg:text-3xl text-botswana-100 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Join the digital revolution in justice. Get started with JusticeConnect today.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button size="lg" className="bg-white text-botswana-600 hover:bg-botswana-50 px-16 py-6 text-xl font-bold shadow-2xl hover-lift">
              Start Free Trial
              <ArrowRight className="w-7 h-7 ml-3" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-botswana-600 px-16 py-6 text-xl font-bold hover-lift">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-botswana-900 text-white py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-botswana-500 rounded-2xl flex items-center justify-center">
                  <Scale className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold font-display">JusticeConnect</span>
              </div>
              <p className="text-botswana-300 text-xl leading-relaxed">
                Modernizing justice through technology and innovation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-2xl mb-8 font-display">Platform</h4>
              <ul className="space-y-6 text-botswana-300">
                <li><a href="#" className="hover:text-white transition-colors text-xl">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-xl">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-xl">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-xl">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-2xl mb-8 font-display">Support</h4>
              <ul className="space-y-6 text-botswana-300">
                <li><a href="#" className="hover:text-white transition-colors text-xl">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-xl">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-xl">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-xl">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-2xl mb-8 font-display">Company</h4>
              <ul className="space-y-6 text-botswana-300">
                <li><a href="#" className="hover:text-white transition-colors text-xl">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-xl">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-xl">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-xl">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-botswana-800 mt-16 pt-12 text-center text-botswana-400">
            <p className="text-xl">&copy; 2024 JusticeConnect. All rights reserved. | Botswana Justice Department</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 