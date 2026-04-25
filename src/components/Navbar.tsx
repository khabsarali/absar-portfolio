import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect, useMemo } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const sectionIds = useMemo(() => navLinks.map(link => link.href.replace("#", "")), []);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-bg/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <motion.a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold text-gradient"
        >
          Absar Ali
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`text-sm font-medium transition-all relative group ${
                activeSection === link.href.replace("#", "") 
                ? "text-brand-cyan" 
                : "text-brand-lavender hover:text-brand-cyan"
              }`}
            >
              {link.name}
              {activeSection === link.href.replace("#", "") && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-cyan rounded-full"
                />
              )}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="px-5 py-2 rounded-full border border-brand-purple text-brand-purple font-bold hover:bg-brand-purple hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.4)]"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-brand-card border-b border-white/10"
        >
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-lg font-medium transition-colors ${
                  activeSection === link.href.replace("#", "") 
                  ? "text-brand-cyan" 
                  : "text-brand-lavender hover:text-brand-cyan"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="text-center px-5 py-3 rounded-lg bg-brand-purple text-white font-bold"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
