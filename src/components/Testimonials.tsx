import { REVIEWS } from "../data";
import { Star, Quote, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-neutral-50/70 border-t border-b border-neutral-100 relative overflow-hidden">
      
      {/* Background soft outline design details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white border border-neutral-200/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <div className="flex items-center gap-2 text-[#B31919] font-mono text-xs uppercase tracking-widest font-semibold mb-3">
            <span>MEMBERS VOICE</span>
            <span className="w-8 h-[1px] bg-[#B31919]" />
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-neutral-900 tracking-tight leading-none">
            Verified Experiences.
          </h2>
          <p className="font-sans text-neutral-500 font-light text-sm max-w-md leading-relaxed mt-4">
            Hear from local students, fitness enthusiasts, and corporate professionals training under expert guidance at PURE GYM MYSORE.
          </p>
        </div>

        {/* Testimonials Static Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              id={`testimonial-card-${rev.id}`}
              className="bg-white border border-neutral-200/80 p-8 shadow-xs flex flex-col justify-between hover:border-neutral-300 transition-colors duration-250 relative group"
            >
              <div>
                
                {/* Header info detailing verified badges */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-0.5 text-[#FFD700]">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-neutral-400 font-mono text-[10px] tracking-wide uppercase">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Guest</span>
                  </div>
                </div>

                {/* Narrative block */}
                <p className="font-sans text-neutral-700 text-[14.5px] leading-relaxed font-light mb-8 italic">
                  &ldquo;{rev.text}&rdquo;
                </p>

              </div>

              {/* Reviewer signature info */}
              <div className="border-t border-neutral-100 pt-5 flex items-center justify-between">
                <div>
                  <span className="font-display font-bold text-[14px] text-neutral-900 block leading-tight">
                    {rev.name}
                  </span>
                  <span className="text-[11px] font-sans text-neutral-500 block">
                    {rev.role}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-neutral-400">
                  {rev.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Summary Rating */}
        <div className="mt-16 text-center border-t border-neutral-200/60 pt-12 max-w-xl mx-auto">
          <p className="font-sans text-[13.5px] text-neutral-500 leading-relaxed font-light">
            Working has never been more straightforward. We take pride in maintaining a <strong>4.6 out of 5.0 Google aggregate rating</strong> backed by genuine local reviews from Kuvempu Nagar athletic listings.
          </p>
        </div>

      </div>
    </section>
  );
}
