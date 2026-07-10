import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { label: "ABOUT", id: "about" },
    { label: "WORK", id: "work" },
    { label: "CONTACT", id: "contact" }
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full h-24 z-50 transition-all duration-300 flex items-center ${
        scrolled ? "bg-[#09090b]/90 backdrop-blur-md border-b border-white/5 h-20" : "bg-transparent h-24"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-bold text-2xl tracking-tighter text-white hover:opacity-80 transition-opacity cursor-pointer flex items-center"
          id="nav-logo"
        >
          LOC<span className="text-[#10b981] ml-0.5">.</span>
        </button>

        {/* Center Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xs font-mono font-medium tracking-widest text-gray-400 hover:text-[#10b981] transition-colors cursor-pointer"
              id={`nav-link-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
            </span>
            <span className="text-[10px] font-mono tracking-wider text-gray-300">AVAILABLE FOR WORK</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:text-[#10b981] transition-colors focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-[#09090b] border-b border-white/10 py-8 px-6 flex flex-col space-y-6 md:hidden shadow-xl"
            id="mobile-drawer"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-sm font-mono font-medium tracking-widest text-gray-300 hover:text-[#10b981] transition-colors py-2 border-b border-white/5"
                id={`mobile-nav-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-3 rounded-xl justify-center">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
              </span>
              <span className="text-xs font-mono tracking-wider text-gray-300">AVAILABLE FOR WORK</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
