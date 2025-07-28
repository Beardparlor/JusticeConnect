"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  Scale, 
  ArrowRight,
  Home,
  FileText,
  Calendar,
  Users,
  Settings,
  HelpCircle
} from "lucide-react";

interface MobileNavProps {
  className?: string;
}

export function MobileNav({ className }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: FileText, label: "Features", href: "#features" },
    { icon: Calendar, label: "Schedule", href: "#" },
    { icon: Users, label: "About", href: "#about" },
    { icon: Settings, label: "Settings", href: "#" },
    { icon: HelpCircle, label: "Contact", href: "#contact" },
  ];

  return (
    <div className={`md:hidden ${className}`}>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className="relative z-50 p-2 hover:bg-botswana-50"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-botswana-700" />
        ) : (
          <Menu className="w-6 h-6 text-botswana-700" />
        )}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={toggleMenu}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-botswana-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-botswana-500 to-botswana-600 rounded-lg flex items-center justify-center">
                    <Scale className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-botswana-900">JusticeConnect</h2>
                    <p className="text-xs text-botswana-600">Botswana Justice Department</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMenu}
                  className="p-2 hover:bg-botswana-50"
                >
                  <X className="w-5 h-5 text-botswana-700" />
                </Button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 p-6">
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="flex items-center space-x-3 p-3 rounded-xl text-botswana-700 hover:bg-botswana-50 hover:text-botswana-900 transition-all duration-200"
                        onClick={toggleMenu}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-botswana-200">
                <Button className="w-full bg-botswana-500 hover:bg-botswana-600 text-white">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-botswana-500 mt-3 text-center">
                  © 2024 JusticeConnect
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 