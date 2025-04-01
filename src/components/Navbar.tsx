
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      isScrolled ? "bg-gym-dark/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-poppins font-bold text-white">
              STRENGTH<span className="text-gym-red">HUB</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gym-blue font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-gym-blue font-medium transition-colors">About</Link>
            <Link to="/facilities" className="text-white hover:text-gym-blue font-medium transition-colors">Facilities</Link>
            <Link to="/programs" className="text-white hover:text-gym-blue font-medium transition-colors">Programs</Link>
            <Link to="/trainers" className="text-white hover:text-gym-blue font-medium transition-colors">Trainers</Link>
            <Link to="/pricing" className="text-white hover:text-gym-blue font-medium transition-colors">Pricing</Link>
            <Link to="/contact" className="text-white hover:text-gym-blue font-medium transition-colors">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/join" className="btn-primary">Join Now</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gym-dark/95 backdrop-blur-md absolute top-full left-0 right-0 border-t border-gray-800 animate-fade-in-up">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-white py-2 hover:text-gym-blue font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-white py-2 hover:text-gym-blue font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/facilities" className="text-white py-2 hover:text-gym-blue font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Facilities</Link>
              <Link to="/programs" className="text-white py-2 hover:text-gym-blue font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Programs</Link>
              <Link to="/trainers" className="text-white py-2 hover:text-gym-blue font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Trainers</Link>
              <Link to="/pricing" className="text-white py-2 hover:text-gym-blue font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
              <Link to="/contact" className="text-white py-2 hover:text-gym-blue font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link to="/join" className="btn-primary w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Join Now</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
