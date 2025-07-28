"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scale, ArrowRight, Home, FileText, Calendar, Users, Settings, HelpCircle } from "lucide-react";

interface MobileNavProps {
  className?: string;
}

export function MobileNav({ className }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navItems = [
    { href: "#features", label: "Features", icon: FileText },
    { href: "#about", label: "About", icon: HelpCircle },
    { href: "#contact", label: "Contact", icon: Users },
  ];

  return (
    <div className={`lg:hidden ${className}`}>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={toggleMenu} 
        className="relative z-50 p-2 hover:bg-botswana-50 rounded-xl transition-all duration-300"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-botswana-700 transition-transform duration-300" />
        ) : (
          <Menu className="w-6 h-6 text-botswana-700 transition-transform duration-300" />
        )}
      </Button>
      
      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300" 
            onClick={toggleMenu}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl border-l border-botswana-200/50">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-botswana-200/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-botswana-900">JusticeConnect</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleMenu}
                className="p-2 hover:bg-botswana-50 rounded-lg"
              >
                <X className="w-5 h-5 text-botswana-700" />
              </Button>
            </div>
            
            {/* Navigation Items */}
            <nav className="p-6">
              <ul className="space-y-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="flex items-center space-x-3 p-4 rounded-xl text-botswana-700 hover:text-botswana-900 hover:bg-botswana-50 transition-all duration-300 group"
                        onClick={toggleMenu}
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium text-lg">{item.label}</span>
                        <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            
            {/* CTA Section */}
            <div className="p-6 border-t border-botswana-200/50 mt-auto">
              <Button 
                className="w-full btn-beautiful px-6 py-4 text-lg font-semibold shadow-lg hover:shadow-xl"
                onClick={toggleMenu}
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 