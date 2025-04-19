
import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-research-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Academic<span className="text-research-muted">Research</span></h3>
            <p className="text-sm text-gray-300 mb-4">
              Dedicated to advancing knowledge through rigorous academic research and collaboration.
            </p>
          </div>
          
          {/* Middle Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm hover:text-research-muted transition-colors">About Me</a></li>
              <li><a href="#research" className="text-sm hover:text-research-muted transition-colors">Research</a></li>
              <li><a href="#publications" className="text-sm hover:text-research-muted transition-colors">Publications</a></li>
              <li><a href="#contact" className="text-sm hover:text-research-muted transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Right Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-white hover:text-research-muted transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-white hover:text-research-muted transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white hover:text-research-muted transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-research-muted transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-xs text-gray-400">
              © {currentYear} Academic Research. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
