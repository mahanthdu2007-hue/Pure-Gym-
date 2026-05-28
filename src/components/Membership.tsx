import { MEMBERSHIPS, GYM_INFO } from "../data";
import { Check, ArrowRight, HelpCircle, GraduationCap } from "lucide-react";

interface MembershipProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Membership({ onScrollToSection }: MembershipProps) {
  
  const handleInquiry = (planName: string) => {
    // Elegant URL encoder for customized Whatsapp messages
    const text = `Hello Pure Gym Mysore, I am interested in joining under your "${planName}" plan. Please share membership registration details! Thank you.`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${GYM_INFO.whatsappNumber.replace(/[^0-9+]/g, "")}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="membership" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-[#B31919] font-mono text-xs uppercase tracking-widest font-semibold mb-3">
            <span>MEMBERSHIP DISCOUNTS</span>
            <span className="w-6 h-[1px] bg-[#B31919] inline-block" />
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-neutral-900 tracking-tight leading-tight mb-4">
            Transparent Pricing.
          </h2>
          <p className="font-sans text-neutral-500 font-light text-base leading-relaxed max-w-lg mx-auto">
            No dynamic sales quotes or registration admission tariffs. Explore our clear membership tiers designed for students and young professionals.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {MEMBERSHIPS.map((plan) => (
            <div
              key={plan.id}
              id={`membership-card-${plan.id}`}
              className={`bg-white border p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? "border-neutral-900 shadow-sm ring-1 ring-neutral-950/5 lg:-translate-y-2 z-10"
                  : "border-neutral-200/80 hover:border-neutral-300"
              }`}
            >
              {/* Popular Subdued Tag */}
              {plan.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-neutral-950 text-white text-[10px] font-mono font-bold tracking-widest uppercase px-4 py-1 border border-neutral-950 shadow-xs">
                  ★ MOST POPULAR PLAN
                </span>
              )}

              <div>
                {/* Meta details */}
                <h3 className="font-display font-medium text-xl text-neutral-950 mb-1 tracking-tight">
                  {plan.name}
                </h3>
                <p className="font-sans text-xs text-neutral-400 font-light mb-6">
                  {plan.description}
                </p>

                {/* Primary Pricing Figure */}
                <div className="flex items-baseline gap-2 mb-8 border-b border-neutral-100 pb-6">
                  <span className="font-display font-bold text-4xl sm:text-5xl text-neutral-950">
                    {plan.price}
                  </span>
                  <span className="font-sans text-xs text-neutral-400 font-normal">
                    / {plan.period}
                  </span>
                  {plan.originalPrice && (
                    <span className="font-sans text-xs text-neutral-400 line-through pl-1 decoration-neutral-300 font-light">
                      {plan.originalPrice}
                    </span>
                  )}
                </div>

                {/* Features Checklist */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex items-center justify-center w-4 h-4 rounded-full border border-neutral-200 text-neutral-900 shrink-0 bg-neutral-50/50">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </div>
                      <span className="font-sans text-[13px] text-neutral-600 leading-tight font-light">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action trigger linking to whatsapp / inquiry */}
              <button
                id={`membership-cta-${plan.id}`}
                onClick={() => handleInquiry(plan.name)}
                className={`w-full cursor-pointer py-4 text-xs font-sans tracking-widest font-medium uppercase transition-all duration-200 flex items-center justify-center gap-2 rounded-none border ${
                  plan.isPopular
                    ? "bg-neutral-950 hover:bg-neutral-800 text-white border-neutral-950"
                    : "bg-white hover:bg-neutral-50 text-neutral-900 border-neutral-300"
                }`}
              >
                {plan.ctaText}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic Collegiate Info Box as requested for Young Audience */}
        <div className="bg-neutral-50 border border-neutral-200/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white border border-neutral-200 flex items-center justify-center shrink-0 text-[#B31919]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-[15px] text-neutral-950 mb-0.5">
                Special College Student & Group Package Options Available
              </h4>
              <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
                Are you currently enrolled in Maharaja&apos;s College, SJCE, JSS, Mysore University, or other nearby campuses? Bring friends together to secure group enrollment and student special waivers!
              </p>
            </div>
          </div>
          <button
            id="student-whatsapp-inquiry-btn"
            onClick={() => handleInquiry("Student Group Offer")}
            className="cursor-pointer bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 px-6 py-3 font-sans text-xs tracking-wider uppercase font-medium shrink-0 whitespace-nowrap"
          >
            Inquire Group Discounts
          </button>
        </div>

      </div>
    </section>
  );
}
