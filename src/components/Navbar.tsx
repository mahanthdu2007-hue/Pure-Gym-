import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Programs", id: "features" },
    { name: "Gallery", id: "gallery" },
    { name: "Rates", id: "membership" },
    { name: "Contact & Location", id: "contact" },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onScrollToSection(id);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-100 py-3 shadow-xs"
          : "bg-white/40 backdrop-blur-xs border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Custom Logo inspired by PURE GYM original brand identity */}
        <button
          id="logo-brand-btn"
          onClick={() => handleLinkClick("hero")}
          className="flex items-center gap-3 cursor-pointer group text-left"
        >
          <div className="relative w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center border-2 border-black shadow-[1.5px_1.5px_0px_#000000] group-hover:scale-105 transition-transform duration-200">
            {/* High-Fidelity Custom Barbell + PG monogram vector SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-7 h-7 text-black stroke-black fill-none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g transform="rotate(-58 50 50)" stroke="black" strokeLinecap="round" strokeLinejoin="round">
                {/* Central Barbell Shaft */}
                <line x1="15" y1="50" x2="85" y2="50" strokeWidth="5.5" stroke="black" />
                
                {/* Left Plates Stack (Pyramid Shape) */}
                <line x1="33" y1="36" x2="33" y2="64" strokeWidth="4.5" stroke="black" />
                <line x1="29" y1="38" x2="29" y2="62" strokeWidth="4.5" stroke="black" />
                <line x1="25" y1="41" x2="25" y2="59" strokeWidth="4.5" stroke="black" />
                <line x1="21" y1="44" x2="21" y2="56" strokeWidth="4.5" stroke="black" />
                <line x1="17" y1="47" x2="17" y2="53" strokeWidth="4.5" stroke="black" />
                
                {/* Right Plates Stack (Pyramid Shape) */}
                <line x1="67" y1="36" x2="67" y2="64" strokeWidth="4.5" stroke="black" />
                <line x1="71" y1="38" x2="71" y2="62" strokeWidth="4.5" stroke="black" />
                <line x1="75" y1="41" x2="75" y2="59" strokeWidth="4.5" stroke="black" />
                <line x1="79" y1="44" x2="79" y2="56" strokeWidth="4.5" stroke="black" />
                <line x1="83" y1="47" x2="83" y2="53" strokeWidth="4.5" stroke="black" />

                {/* Center Interlocking Monogram Curves - Pure Gym PG Interlock */}
                <path d="M 45 50 C 45 32, 65 32, 65 50" strokeWidth="4.5" stroke="black" />
                <path d="M 49 50 C 49 38, 61 38, 61 50" strokeWidth="4.5" stroke="black" />
                
                <path d="M 55 50 C 55 68, 35 68, 35 50" strokeWidth="4.5" stroke="black" />
                <path d="M 51 50 C 51 62, 39 62, 39 50" strokeWidth="4.5" stroke="black" />
              </g>
            </svg>
          </div>
          <div>
            <span className="font-display font-bold text-lg tracking-tight text-neutral-900 block leading-tight">
              PURE GYM
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#B31919] block font-semibold leading-none">
              MYSORE
            </span>
          </div>
        </button>

        {/* Desktop Nav links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-link-${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className="font-sans font-medium text-[14px] text-neutral-600 hover:text-neutral-900 cursor-pointer transition-colors duration-200 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-neutral-900 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            id="nav-join-cta-btn"
            onClick={() => handleLinkClick("contact")}
            className="cursor-pointer bg-neutral-950 hover:bg-neutral-800 text-white font-sans font-medium text-xs tracking-wide uppercase px-6 py-2.5 rounded-xs transition-colors duration-200 flex items-center gap-2 border border-neutral-950"
          >
            Join Now
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          id="mobile-menu-trigger-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-neutral-800 hover:text-neutral-950 cursor-pointer transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-neutral-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className="font-sans font-medium text-lg text-neutral-800 hover:text-neutral-950 cursor-pointer text-left py-1"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
              <div className="border-t border-neutral-100 pt-6 flex flex-col gap-4">
                <button
                  id="mobile-nav-join-btn"
                  onClick={() => handleLinkClick("contact")}
                  className="cursor-pointer w-full text-center bg-neutral-950 hover:bg-neutral-800 text-white font-sans font-semibold text-sm py-3 rounded-none transition-colors"
                >
                  Join Today
                </button>
                <div className="text-center text-xs text-neutral-500 font-mono">
                  #443 New Kanthraj Urs Road, T.K Layout
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
