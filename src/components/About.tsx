import { Check, ShieldCheck, HelpCircle, Users2, Info } from "lucide-react";
import { GYM_INFO } from "../data";
import gymReception from "../assets/images/gym_reception_1779950792842.png";

export default function About() {
  const values = [
    {
      title: "Active Supportive Trainers",
      description: "No intimidating trainers or silent floors. Our crew actively guides safety, correcting your forms, posture alignment, and rep counts without premium personal charges."
    },
    {
      title: "Scientific Muscle Conditioning",
      description: "We don't believe in random routines. Every program leverages anatomical kinesiology and scientific workout structuring to maximize core stimulation and fat oxidation safely."
    },
    {
      title: "Clean, Well-Ventilated space",
      description: "We prioritize a hygienic workout field. High-capacity clean air routing, strict sanitization protocols for dumbbells/racks, and beautifully arranged locker rooms."
    },
    {
      title: "Student-Friendly & Transparent Rates",
      description: "No hidden registration fee structures, sales pressures, or premium lock-ins. High-end fitness should be genuinely cost-effective for Mysore's students and young pros."
    }
  ];

  return (
    <section
      id="about"
      className="py-20 bg-neutral-50/70 border-t border-b border-neutral-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Dynamic header row to maintain art-directed rhythm */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <div className="flex items-center gap-2 text-[#B31919] font-mono text-xs uppercase tracking-widest font-semibold mb-3">
            <span>ABOUT OUR COOPERATIVE</span>
            <span className="w-8 h-[1px] bg-[#B31919] inline-block" />
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-neutral-900 tracking-tight leading-tight">
            Designed for genuine physical progress, without the high price tag.
          </h2>
        </div>

        {/* Core two-column narrative layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Philosophical Cards (Values) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="font-sans text-neutral-600 text-base leading-relaxed font-light mb-2">
              At <strong className="text-neutral-950 font-medium">Pure Gym Mysore</strong>, we believe elite fitness experiences are defined by proper ergonomics, hygienic maintenance, and structured support networks — not loud colors or expensive marketing campaigns. Our space in TK Layout delivers a scientifically focused workout field where beginners and advanced lifters train side-by-side with mutual respect.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="bg-white border border-neutral-200/60 p-6 shadow-xs relative hover:border-neutral-300 transition-all duration-200"
                >
                  {/* Subtle index indicator */}
                  <span className="absolute top-4 right-4 text-[10px] font-mono font-bold text-neutral-300">
                    0{i + 1}
                  </span>

                  <h3 className="font-display font-semibold text-[15px] text-neutral-950 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#B31919] shrink-0" strokeWidth={2.5} />
                    {v.title}
                  </h3>
                  <p className="font-sans text-[13px] text-neutral-500 leading-relaxed font-light">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Micro warning indicator highlighting genuine local trust */}
            <div className="flex items-center gap-3 bg-white border border-[#FFD700]/70 p-4.5 rounded-none shadow-xs mt-2">
              <Info className="w-5 h-5 text-neutral-900 shrink-0" />
              <p className="font-sans text-xs text-neutral-700 leading-relaxed">
                <strong>Why PURE GYM?</strong> We hold a highly positive verified <strong>4.6-Star rating on Google</strong>. Our memberships are kept simple and student-friendly because our primary mission is elevating the health and active lifestyle of Mysore's local youth.
              </p>
            </div>
          </div>

          {/* Right Column: Reception Mock Frame */}
          <div className="lg:col-span-5 flex flex-col gap-4 sticky top-24">
            <div className="border border-neutral-200 bg-white p-2.5 shadow-sm">
              <div className="overflow-hidden aspect-video relative bg-neutral-100">
                <img
                  src={gymReception}
                  alt="Pure Gym Mysore Reception Counter Area"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#B31919] text-[9px] font-mono font-bold text-white px-2.5 py-1 tracking-widest uppercase">
                  Warm Welcome
                </div>
              </div>
              
              <div className="pt-4 px-1 pb-1">
                <h4 className="font-display font-semibold text-sm text-neutral-900 mb-1">
                  Professional Reception & Support Counter
                </h4>
                <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                  Step in and feel the clean, high-contrast wood-accented atmosphere. This real-shot photo showcases our entry lobby equipped with sanitized student lockers and immediate coach orientation.
                </p>
              </div>
            </div>

            {/* Quick Location Badge overlay */}
            <div className="bg-neutral-900 text-white p-6 rounded-none flex items-center justify-between border border-neutral-950 shadow-sm">
              <div>
                <span className="block text-[10px] tracking-widest uppercase font-mono text-neutral-400 mb-0.5">
                  LOCATED AT
                </span>
                <span className="text-xs font-sans text-neutral-200 pr-4 block font-light">
                  #443 New Kanthraj Urs Rd, TK Layout, Kuvempu Nagar
                </span>
              </div>
              <div className="h-10 w-[1px] bg-neutral-800 shrink-0" />
              <div className="text-right pl-4">
                <span className="block text-[10px] tracking-widest uppercase font-mono text-neutral-400 mb-0.5">
                  OPPOSITE TO
                </span>
                <span className="text-xs font-sans text-[#FFD700] font-semibold block uppercase">
                  Maruthi Temple
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
