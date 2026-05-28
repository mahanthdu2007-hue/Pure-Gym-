import { ArrowRight, Star, MapPin, Clock, CalendarDays } from "lucide-react";
import { motion } from "motion/react";
import { GYM_INFO } from "../data";
import gymInterior from "../assets/images/gym_interior_1779950761960.png";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white pt-24 pb-16 flex items-center overflow-hidden"
    >
      {/* Editorial Grid Structure */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left text column - 6 columns on large screens */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          {/* Real Google Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-neutral-50 border border-neutral-100 px-3 py-1.5 rounded-full w-fit mb-6 shadow-xs">
            <div className="flex items-center gap-0.5 text-[#FFD700]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-sans font-semibold text-xs text-neutral-800">
              {GYM_INFO.rating} Stars
            </span>
            <span className="text-neutral-300">|</span>
            <span className="font-sans text-xs text-neutral-500">
              {GYM_INFO.reviewsCount} Google Reviews
            </span>
          </div>

          {/* Display Headline */}
          <h1 className="font-display font-medium text-4xl sm:text-6xl lg:text-7xl tracking-[0.01em] text-neutral-950 leading-[1.08] mb-6">
            Train Better.
            <br />
            <span className="text-neutral-500">Live Stronger.</span>
          </h1>

          {/* Subheadline and Narrative */}
          <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mb-8 font-light">
            An premium training facility in Kuvempu Nagar, Mysore designed for collegiate students, local professionals, and fitness beginners alike. Built on elite biomechanical strength equipment, general fitness education, and a dedicated, highly motivating local athletic community.
          </p>

          {/* Localized Location & Open Timings Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-neutral-100 py-5 mb-8">
            <div className="flex items-start gap-3">
              <div className="p-1 w-fit bg-neutral-50 border border-neutral-100 text-[#B31919]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-sans font-semibold text-[13px] text-neutral-900 leading-none mb-1">
                  Kuvempu Nagar / TK Layout
                </span>
                <span className="font-sans text-xs text-neutral-500 block">
                  New Kanthraj Urs Road, Mysuru
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1 w-fit bg-neutral-50 border border-neutral-100 text-neutral-800">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-sans font-semibold text-[13px] text-neutral-900 leading-none mb-1">
                  Operating Hours
                </span>
                <span className="font-sans text-xs text-neutral-500 block">
                  Mon - Sat: {GYM_INFO.timings.weekdays}
                </span>
              </div>
            </div>
          </div>

          {/* Clear Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              id="hero-join-cta"
              onClick={() => onScrollToSection("membership")}
              className="cursor-pointer bg-neutral-950 hover:bg-neutral-800 text-white font-sans font-medium text-xs tracking-wider uppercase px-8 py-4.5 rounded-none transition-colors duration-200 flex items-center justify-center gap-3 border border-neutral-950"
            >
              Explore Rates & Join
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="hero-free-trial-cta"
              onClick={() => onScrollToSection("contact")}
              className="cursor-pointer bg-white hover:bg-neutral-50 text-neutral-900 font-sans font-medium text-xs tracking-wider uppercase px-8 py-4.5 rounded-none transition-colors duration-200 flex items-center justify-center gap-3 border border-neutral-200"
            >
              <CalendarDays className="w-4 h-4" />
              Book Single Free Session
            </button>
          </div>

          {/* Minimal Key Indicators */}
          <div className="flex items-center gap-8 mt-10 text-neutral-500 font-mono text-[11px] uppercase tracking-widest pt-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B31919]" />
              AFFORDABLE PREMIUM
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B31919]" />
              STUDENT PREFERRED
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B31919]" />
              SCIENTIFIC LIFTING
            </div>
          </div>

        </div>

        {/* Right image column - 6 columns on large screens with premium framing */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg lg:max-w-xl group">
            
            {/* Soft decorative background frame */}
            <div className="absolute -inset-2 bg-neutral-50 -z-10 border border-neutral-100 transition-colors" />

            {/* High fidelity generated image representing the actual gym floor */}
            <div className="overflow-hidden border border-neutral-200 bg-neutral-50 shadow-sm relative aspect-[4/3] sm:aspect-[16:12]">
              <img
                src={gymInterior}
                alt="Pure Gym Mysore Workout Floor and Facilities"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-101"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              {/* Corner Watermark */}
              <div className="absolute bottom-3 left-3 bg-neutral-900/80 backdrop-blur-xs text-[10px] text-white px-2 py-1 uppercase tracking-widest font-mono">
                Actual Floor Profile
              </div>
            </div>

            {/* Art Direction Caption Tag */}
            <div className="mt-4 flex items-center justify-between text-neutral-500 font-sans text-xs tracking-tight">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full inline-block" />
                <span>#443 New Kanthraj Urs Rd, Opp. Maruthi Temple</span>
              </div>
              <span className="font-mono text-[10px] text-neutral-400">PURE GYM • EST. MYSORE</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
