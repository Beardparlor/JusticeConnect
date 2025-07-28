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
  ExternalLink,
  Sparkles,
  TrendingUp,
  Target,
  Rocket
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-botswana-50 via-white to-botswana-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-botswana-400/20 to-botswana-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-gradient-to-br from-botswana-300/15 to-botswana-500/15 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-botswana-200/10 to-botswana-400/10 rounded-full blur-2xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="nav-glass border-b border-botswana-200/50 sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-3xl flex items-center justify-center hover-lift shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Scale className="w-9 h-9 text-white relative z-10" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-botswana-900 font-display">JusticeConnect</h1>
                <p className="text-sm text-botswana-600 font-medium">Botswana Justice Department</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-12">
              <a href="#features" className="text-botswana-700 hover:text-botswana-900 transition-all duration-300 hover-lift font-medium text-lg relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-botswana-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-botswana-700 hover:text-botswana-900 transition-all duration-300 hover-lift font-medium text-lg relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-botswana-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-botswana-700 hover:text-botswana-900 transition-all duration-300 hover-lift font-medium text-lg relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-botswana-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <Button className="btn-beautiful px-10 py-4 text-lg shadow-2xl hover:shadow-3xl">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-40 lg:py-52">
        <div className="absolute inset-0 bg-gradient-to-br from-botswana-500/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-dots opacity-50"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-botswana-400/30 to-botswana-600/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-botswana-300/20 to-botswana-500/20 rounded-full blur-lg animate-float animation-delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-botswana-200/15 to-botswana-400/15 rounded-full blur-md animate-float animation-delay-2000"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-7xl mx-auto">
            <Badge className="mb-12 bg-gradient-to-r from-botswana-100 to-botswana-200 text-botswana-700 border-botswana-200 px-8 py-4 text-lg font-semibold animate-fade-in-up shadow-lg">
              <Sparkles className="w-6 h-6 mr-3 animate-spin-slow" />
              Modern Justice Platform
            </Badge>
            <h1 className="text-8xl lg:text-9xl font-bold text-botswana-900 mb-12 leading-tight font-display animate-fade-in-up">
              Transforming
              <span className="gradient-text block mt-4 relative">
                Justice
                <div className="absolute -inset-4 bg-gradient-to-r from-botswana-500/20 to-botswana-600/20 blur-2xl rounded-full animate-pulse-slow"></div>
              </span>
              in Botswana
            </h1>
            <p className="text-3xl lg:text-4xl text-botswana-700 mb-20 max-w-6xl mx-auto leading-relaxed animate-fade-in-up font-light">
              A modern digital platform revolutionizing court management with advanced case tracking, 
              document processing, and seamless scheduling tools for the Botswana justice system.
            </p>
            <div className="flex flex-col sm:flex-row gap-10 justify-center items-center animate-fade-in-up mb-32">
              <Button size="lg" className="btn-beautiful px-16 py-6 text-2xl font-bold shadow-2xl hover:shadow-3xl group">
                <Rocket className="w-7 h-7 mr-3 group-hover:animate-bounce" />
                Explore Platform
                <ArrowRight className="w-8 h-8 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="border-3 border-botswana-300 text-botswana-700 hover:bg-botswana-50 px-16 py-6 text-2xl font-bold hover-lift group backdrop-blur-sm">
                <Play className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="container mx-auto px-6 mt-40">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            <div className="stats-card animate-fade-in-up group">
              <div className="relative">
                <div className="text-7xl font-bold text-botswana-600 mb-8 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-botswana-400 to-botswana-600 rounded-full animate-pulse"></div>
              </div>
              <div className="text-botswana-700 font-semibold text-2xl">Courts Connected</div>
            </div>
            <div className="stats-card animate-fade-in-up group">
              <div className="relative">
                <div className="text-7xl font-bold text-botswana-600 mb-8 group-hover:scale-110 transition-transform duration-300">10K+</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-botswana-400 to-botswana-600 rounded-full animate-pulse animation-delay-500"></div>
              </div>
              <div className="text-botswana-700 font-semibold text-2xl">Cases Processed</div>
            </div>
            <div className="stats-card animate-fade-in-up group">
              <div className="relative">
                <div className="text-7xl font-bold text-botswana-600 mb-8 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-botswana-400 to-botswana-600 rounded-full animate-pulse animation-delay-1000"></div>
              </div>
              <div className="text-botswana-700 font-semibold text-2xl">Uptime</div>
            </div>
            <div className="stats-card animate-fade-in-up group">
              <div className="relative">
                <div className="text-7xl font-bold text-botswana-600 mb-8 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-botswana-400 to-botswana-600 rounded-full animate-pulse animation-delay-1500"></div>
              </div>
              <div className="text-botswana-700 font-semibold text-2xl">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-40 lg:py-52 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-botswana-50/30 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-32">
            <Badge className="mb-10 bg-gradient-to-r from-botswana-100 to-botswana-200 text-botswana-700 border-botswana-200 px-8 py-4 text-lg font-semibold">
              <Zap className="w-6 h-6 mr-3 animate-pulse" />
              Powerful Features
            </Badge>
            <h2 className="text-7xl lg:text-8xl font-bold text-botswana-900 mb-12 font-display">
              Everything you need for
              <span className="gradient-text block mt-6 relative">
                modern justice
                <div className="absolute -inset-4 bg-gradient-to-r from-botswana-500/20 to-botswana-600/20 blur-2xl rounded-full animate-pulse-slow"></div>
              </span>
            </h2>
            <p className="text-3xl lg:text-4xl text-botswana-700 max-w-6xl mx-auto leading-relaxed font-light">
              Our platform combines cutting-edge technology with user-friendly design to streamline 
              court operations and improve access to justice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
            <div className="card-beautiful p-12 animate-fade-in-up hover-lift group">
              <div className="w-24 h-24 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-3xl flex items-center justify-center mb-12 shadow-2xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FileText className="w-12 h-12 text-white relative z-10" />
              </div>
              <h3 className="text-4xl font-bold text-botswana-900 mb-10 font-display">Case Management</h3>
              <p className="text-botswana-700 leading-relaxed text-2xl">
                Streamlined case tracking with real-time updates, document management, and automated workflows.
              </p>
            </div>

            <div className="card-beautiful p-12 animate-fade-in-up hover-lift group">
              <div className="w-24 h-24 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-3xl flex items-center justify-center mb-12 shadow-2xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Calendar className="w-12 h-12 text-white relative z-10" />
              </div>
              <h3 className="text-4xl font-bold text-botswana-900 mb-10 font-display">Smart Scheduling</h3>
              <p className="text-botswana-700 leading-relaxed text-2xl">
                Intelligent scheduling system with conflict detection and automated notifications.
              </p>
            </div>

            <div className="card-beautiful p-12 animate-fade-in-up hover-lift group">
              <div className="w-24 h-24 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-3xl flex items-center justify-center mb-12 shadow-2xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Users className="w-12 h-12 text-white relative z-10" />
              </div>
              <h3 className="text-4xl font-bold text-botswana-900 mb-10 font-display">User Management</h3>
              <p className="text-botswana-700 leading-relaxed text-2xl">
                Comprehensive user roles and permissions with secure authentication and access control.
              </p>
            </div>

            <div className="card-beautiful p-12 animate-fade-in-up hover-lift group">
              <div className="w-24 h-24 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-3xl flex items-center justify-center mb-12 shadow-2xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Shield className="w-12 h-12 text-white relative z-10" />
              </div>
              <h3 className="text-4xl font-bold text-botswana-900 mb-10 font-display">Security First</h3>
              <p className="text-botswana-700 leading-relaxed text-2xl">
                Enterprise-grade security with encryption, audit trails, and compliance standards.
              </p>
            </div>

            <div className="card-beautiful p-12 animate-fade-in-up hover-lift group">
              <div className="w-24 h-24 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-3xl flex items-center justify-center mb-12 shadow-2xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Globe className="w-12 h-12 text-white relative z-10" />
              </div>
              <h3 className="text-4xl font-bold text-botswana-900 mb-10 font-display">Cloud Native</h3>
              <p className="text-botswana-700 leading-relaxed text-2xl">
                Built for the cloud with automatic scaling, backups, and disaster recovery.
              </p>
            </div>

            <div className="card-beautiful p-12 animate-fade-in-up hover-lift group">
              <div className="w-24 h-24 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-3xl flex items-center justify-center mb-12 shadow-2xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Award className="w-12 h-12 text-white relative z-10" />
              </div>
              <h3 className="text-4xl font-bold text-botswana-900 mb-10 font-display">Award Winning</h3>
              <p className="text-botswana-700 leading-relaxed text-2xl">
                Recognized for excellence in digital transformation and public service innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="py-40 lg:py-52 bg-gradient-to-br from-botswana-50 to-white relative">
        <div className="absolute inset-0 bg-dots opacity-50"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-32">
            <Badge className="mb-10 bg-gradient-to-r from-botswana-100 to-botswana-200 text-botswana-700 border-botswana-200 px-8 py-4 text-lg font-semibold">
              <CheckCircle className="w-6 h-6 mr-3 animate-pulse" />
              Component Showcase
            </Badge>
            <h2 className="text-7xl lg:text-8xl font-bold text-botswana-900 mb-12 font-display">
              Beautiful UI Components
            </h2>
            <p className="text-3xl lg:text-4xl text-botswana-700 max-w-6xl mx-auto leading-relaxed font-light">
              Experience our modern component library built with shadcn/ui and Tailwind CSS, 
              showcasing responsive design and accessibility best practices.
            </p>
          </div>
          
          <Feature108Demo />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 lg:py-52 bg-gradient-to-br from-botswana-500 to-botswana-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-50"></div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-7xl lg:text-8xl font-bold text-white mb-12 font-display">
            Ready to transform your court system?
          </h2>
          <p className="text-3xl lg:text-4xl text-botswana-100 mb-20 max-w-5xl mx-auto leading-relaxed font-light">
            Join the digital revolution in justice. Get started with JusticeConnect today.
          </p>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <Button size="lg" className="bg-white text-botswana-600 hover:bg-botswana-50 px-20 py-8 text-2xl font-bold shadow-3xl hover-lift group">
              <Target className="w-8 h-8 mr-3 group-hover:animate-pulse" />
              Start Free Trial
              <ArrowRight className="w-8 h-8 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button size="lg" variant="outline" className="border-3 border-white text-white hover:bg-white hover:text-botswana-600 px-20 py-8 text-2xl font-bold hover-lift group backdrop-blur-sm">
              <TrendingUp className="w-8 h-8 mr-3 group-hover:animate-pulse" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-botswana-900 text-white py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            <div>
              <div className="flex items-center space-x-4 mb-10">
                <div className="w-14 h-14 bg-botswana-500 rounded-3xl flex items-center justify-center">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <span className="text-4xl font-bold font-display">JusticeConnect</span>
              </div>
              <p className="text-botswana-300 text-2xl leading-relaxed">
                Modernizing justice through technology and innovation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-3xl mb-10 font-display">Platform</h4>
              <ul className="space-y-8 text-botswana-300">
                <li><a href="#" className="hover:text-white transition-colors text-2xl">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-2xl">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-2xl">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-2xl">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-3xl mb-10 font-display">Support</h4>
              <ul className="space-y-8 text-botswana-300">
                <li><a href="#" className="hover:text-white transition-colors text-2xl">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-2xl">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-2xl">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-2xl">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-3xl mb-10 font-display">Company</h4>
              <ul className="space-y-8 text-botswana-300">
                <li><a href="#" className="hover:text-white transition-colors text-2xl">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-2xl">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-2xl">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-2xl">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-botswana-800 mt-20 pt-16 text-center text-botswana-400">
            <p className="text-2xl">&copy; 2024 JusticeConnect. All rights reserved. | Botswana Justice Department</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 