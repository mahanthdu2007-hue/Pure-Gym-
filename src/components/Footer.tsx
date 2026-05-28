import { GYM_INFO } from "../data";
import { ArrowUp, Dumbbell, Send, RefreshCw, Smartphone, Instagram, Facebook } from "lucide-react";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-neutral-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Brand block (left) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <button
              id="footer-brand-btn"
              onClick={() => onScrollToSection("hero")}
              className="flex items-center gap-3 text-left cursor-pointer group"
            >
              <div className="relative w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center border border-black shadow-[1px_1px_0px_#000000] group-hover:scale-105 transition-transform duration-200">
                <svg
                  viewBox="0 0 100 100"
                  className="w-5 h-5 text-black stroke-black fill-none"
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
                <span className="font-display font-bold text-[14.5px] tracking-tight text-neutral-900 block leading-tight">
                  PURE GYM MYSORE
                </span>
                <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-400 block font-light leading-none">
                  ಪ್ಯೂರ್ ಜಿಮ್ ಮೈಸೂರು
                </span>
              </div>
            </button>

            <p className="font-sans text-[13px] text-neutral-500 leading-relaxed font-light max-w-sm">
              We specialize in elite-performance scientific fitness, proper biomechanical postural alignments, and student-first membership rates in Mysuru. Let&apos;s build a healthier, stronger community together.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-400 transition-colors"
                aria-label="Instagram Link"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-400 transition-colors"
                aria-label="Facebook Link"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick links block (center-right) */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-xs tracking-wider text-neutral-400 uppercase mb-5">
              Navigate Space
            </h4>
            <div className="flex flex-col gap-3 font-sans text-[13px] text-neutral-600 font-light">
              <button
                onClick={() => onScrollToSection("about")}
                className="hover:text-neutral-900 cursor-pointer text-left w-fit"
              >
                About Our Center
              </button>
              <button
                onClick={() => onScrollToSection("features")}
                className="hover:text-neutral-900 cursor-pointer text-left w-fit"
              >
                Programs & Gear
              </button>
              <button
                onClick={() => onScrollToSection("gallery")}
                className="hover:text-neutral-900 cursor-pointer text-left w-fit"
              >
                Actual Environment Gallery
              </button>
              <button
                onClick={() => onScrollToSection("membership")}
                className="hover:text-neutral-900 cursor-pointer text-left w-fit"
              >
                Student & Pro Rates
              </button>
              <button
                onClick={() => onScrollToSection("contact")}
                className="hover:text-neutral-900 cursor-pointer text-left w-fit"
              >
                Location & Schedule
              </button>
            </div>
          </div>

          {/* Location / hours description block (far right) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-display font-semibold text-xs tracking-wider text-neutral-400 uppercase mb-1">
              Main Center Address
            </h4>
            <address className="not-italic font-sans text-[13px] text-neutral-600 font-light leading-relaxed">
              <strong>PURE GYM MYSORE</strong>
              <br />
              #443, New Kanthraj Urs Road, T.K Layout,
              <br />
              Kuvempu Nagara, Mysuru, Karnataka 570023
              <br />
              <span className="block mt-2 font-mono text-[11px] text-neutral-500 font-semibold text-[#B31919]">
                📲 Phone: 072044 17477
              </span>
            </address>
          </div>

        </div>

        {/* Lower footer segment with fine lines */}
        <div className="border-t border-neutral-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="font-sans text-xs text-neutral-400 font-light text-center sm:text-left">
            <span>© {new Date().getFullYear()} PURE GYM MYSORE. All rights reserved.</span>
            <span className="block sm:inline sm:ml-2 text-[10px] text-neutral-300 font-mono">
              Administered by Pure Vibe Mysore Community.
            </span>
          </div>

          <button
            id="back-to-top-btn"
            onClick={handleBackToTop}
            className="cursor-pointer group flex items-center gap-2 px-3 py-1.5 border border-neutral-200 text-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition-all font-sans text-xs uppercase tracking-wider font-medium"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
