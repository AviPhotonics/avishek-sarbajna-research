
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { 
  Menu, X, User, FileText, BookOpen, 
  BookMarked, Image, Code, Newspaper, 
  Mic, Mail
} from "lucide-react";
import { Button } from '@/components/ui/button';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  onClick?: () => void;
}

const NavItem = ({ icon, label, href, onClick }: NavItemProps) => (
  <a 
    href={href} 
    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-research-light/80 transition-colors"
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </a>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: <User size={18} />, label: "About Me", href: "#about" },
    { icon: <FileText size={18} />, label: "CV", href: "#cv" },
    { icon: <BookOpen size={18} />, label: "Research", href: "#research" },
    { icon: <BookMarked size={18} />, label: "Publications", href: "#publications" },
    { icon: <Image size={18} />, label: "Gallery", href: "#gallery" },
    { icon: <Code size={18} />, label: "Resources", href: "#resources" },
    { icon: <Newspaper size={18} />, label: "News", href: "#news" },
    { icon: <Mic size={18} />, label: "Talks", href: "#talks" },
    { icon: <Mail size={18} />, label: "Contact", href: "#contact" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-serif font-bold text-research-blue">
          Academic<span className="text-research-light-blue">Research</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavItem 
              key={item.label} 
              icon={item.icon} 
              label={item.label} 
              href={item.href} 
            />
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 md:hidden animate-fade-in">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <NavItem 
                key={item.label} 
                icon={item.icon} 
                label={item.label} 
                href={item.href} 
                onClick={closeMobileMenu}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
