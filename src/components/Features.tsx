import { FEATURES } from "../data";
import { Dumbbell, Flame, Cpu, ShieldCheck, Utensils, Heart } from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<string, any> = {
  Dumbbell: Dumbbell,
  Flame: Flame,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Utensils: Utensils,
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Dynamic header row to maintain art-directed rhythm */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-[#B31919] font-mono text-xs uppercase tracking-widest font-semibold mb-3">
              <span>WORKOUT PROGRAMS</span>
              <span className="w-8 h-[1px] bg-[#B31919]" />
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-neutral-900 tracking-tight leading-none">
              High-Caliber Training Fields.
            </h2>
          </div>
          <p className="font-sans text-neutral-500 font-light text-sm max-w-sm leading-relaxed">
            All programs are optimized with correct workout biomechanics, clean floor layout spacing, and complete coach support. No extra activation premiums apply.
          </p>
        </div>

        {/* Features minimal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat) => {
            const IconComponent = iconMap[feat.iconName] || Dumbbell;
            return (
              <div
                key={feat.id}
                id={`feature-card-${feat.id}`}
                className="bg-white border border-neutral-100 p-8 hover:border-neutral-300 transition-all duration-350 flex flex-col justify-between group h-[280px]"
              >
                <div>
                  {/* Icon framed extremely minimally */}
                  <div className="w-10 h-10 border border-neutral-200/80 bg-neutral-50/50 flex items-center justify-center text-neutral-800 transition-colors duration-300 group-hover:bg-[#FFD700]/10 group-hover:border-[#FFD700] mb-8">
                    <IconComponent className="w-4 h-4 text-neutral-900 transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  <h3 className="font-display font-medium text-lg text-neutral-950 mb-3 tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-[13.5px] text-neutral-500 leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>

                {/* Micro branding link indicator as subtle interaction */}
                <div className="pt-4 flex items-center gap-2 text-[11px] font-mono tracking-wider text-neutral-400 group-hover:text-neutral-900 transition-colors duration-200 uppercase font-semibold">
                  <span>Standard Elite Asset</span>
                  <span className="w-0 h-[1.5px] bg-neutral-900 transition-all duration-350 group-hover:w-8" />
                </div>
              </div>
            );
          })}

          {/* Special Custom CTA Card filling the last slot beautifully */}
          <div className="bg-neutral-950 border border-neutral-900 p-8 flex flex-col justify-between text-white relative overflow-hidden group h-[280px]">
            {/* Subtle accent corner element */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#FFD700]/10 blur-xl rounded-full" />

            <div>
              <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FFD700] mb-8">
                <Heart className="w-4 h-4 fill-current text-white text-[12px]" />
              </div>
              <h3 className="font-display font-medium text-lg text-white mb-2 tracking-tight">
                Pure Vibe Community
              </h3>
              <p className="font-sans text-[13px] text-neutral-400 leading-relaxed font-light">
                Our members support each other. You aren't just joining a gym machine hall — you are joining a dedicated athletic collective of Mysore.
              </p>
            </div>

            <div className="text-[10px] font-mono tracking-widest text-[#FFD700] uppercase font-semibold flex items-center gap-1">
              <span>● NO REGISTRATION ADMISSION CHARGES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
