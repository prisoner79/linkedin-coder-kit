import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-tech-blue">
          RC<span className="text-gray-800">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <span onClick={() => scrollToSection("home")} className="nav-link">
            Home
          </span>
          <span onClick={() => scrollToSection("about")} className="nav-link">
            About
          </span>
          <span onClick={() => scrollToSection("experience")} className="nav-link">
            Experience
          </span>
          <span onClick={() => scrollToSection("education")} className="nav-link">
            Education
          </span>
          <span onClick={() => scrollToSection("projects")} className="nav-link">
            Projects
          </span>
          <span onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </span>
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/prisoner79"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-tech-blue transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-tech-blue transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:critik127@gmail.com"
            className="text-gray-600 hover:text-tech-blue transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
