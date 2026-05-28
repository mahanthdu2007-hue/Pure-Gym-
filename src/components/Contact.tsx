import { useState, FormEvent, ChangeEvent } from "react";
import { GYM_INFO } from "../data";
import { Mail, Phone, Clock, MapPin, Send, MessageSquare, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    occupation: "",
    plan: "Free Trial Session",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and phone number so we can reach you.");
      return;
    }
    setIsSubmitting(true);
    
    // Simulate API storage / server routing delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after brief display
      setFormData({
        name: "",
        phone: "",
        occupation: "",
        plan: "Free Trial Session",
        notes: ""
      });
    }, 1200);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const triggerWhatsappInquiry = () => {
    const text = `Hello Pure Gym Mysore! I want to enquire about physical training slots at your T.K Layout Kuvempunagar center. Please connect me to a coach.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${GYM_INFO.whatsappNumber.replace(/[^0-9+]/g, "")}?text=${encoded}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <div className="flex items-center gap-2 text-[#B31919] font-mono text-xs uppercase tracking-widest font-semibold mb-3">
            <span>GET IN TOUCH</span>
            <span className="w-8 h-[1px] bg-[#B31919]" />
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-neutral-900 tracking-tight leading-none">
            Start Your Journey.
          </h2>
          <p className="font-sans text-neutral-500 font-light text-sm max-w-md leading-relaxed mt-4">
            Book a single free physical workout slot, ask questions, or secure your discounted student rates with a simple inquiry.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Column: Coordinates details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Quick stats panel */}
            <div className="flex flex-col gap-6 bg-neutral-50 border border-neutral-200/60 p-8">
              
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#B31919] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-neutral-400 mb-1">
                    PHYSCIAL ADDRESS
                  </h4>
                  <p className="font-sans text-[13.5px] text-neutral-800 leading-relaxed font-light">
                    {GYM_INFO.address}
                  </p>
                  <span className="inline-block mt-2 font-mono text-[11px] text-neutral-500 font-semibold">
                    Opposite Maruthi Temple Near TK Layout Corner
                  </span>
                </div>
              </div>

              <div className="h-[1px] bg-neutral-200/60 w-full" />

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-neutral-400 mb-1">
                    PHONE & SUPPORT
                  </h4>
                  <p className="font-sans text-[13.5px] text-neutral-800 leading-none mb-1 font-medium">
                    {GYM_INFO.phone}
                  </p>
                  <span className="text-xs text-neutral-400 font-light block font-mono">
                    Direct desk support during business shifts
                  </span>
                </div>
              </div>

              <div className="h-[1px] bg-neutral-200/60 w-full" />

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-neutral-400 mb-1">
                    SHIFT TIMINGS
                  </h4>
                  <div className="space-y-1 font-sans text-[13px] text-neutral-600 font-light">
                    <div className="flex justify-between gap-4">
                      <span>Mon - Sat:</span>
                      <span className="font-medium text-neutral-900">{GYM_INFO.timings.weekdays}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Saturday:</span>
                      <span className="font-medium text-neutral-900">{GYM_INFO.timings.saturday}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Sundays:</span>
                      <span className="font-medium text-neutral-900">{GYM_INFO.timings.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Instant Whatsapp Trigger Actions */}
            <button
              id="direct-whatsapp-chat-btn"
              onClick={triggerWhatsappInquiry}
              className="cursor-pointer w-full bg-[#128C7E] hover:bg-[#075E54] text-white p-5 flex items-center justify-between transition-colors shadow-xs group"
            >
              <div className="flex items-center gap-4 text-left">
                <MessageSquare className="w-6 h-6 speech-icon" />
                <div>
                  <span className="block font-sans font-bold text-sm tracking-wide uppercase">
                    WhatsApp Chat Support
                  </span>
                  <span className="text-xs text-emerald-100 font-light">
                    Direct connect with on-floor gym desk
                  </span>
                </div>
              </div>
              <span className="bg-white/10 px-3 py-1 text-[11px] font-mono tracking-wider uppercase font-semibold">
                CHAT NOW
              </span>
            </button>

          </div>

          {/* Right Column: Interaction Form */}
          <div className="lg:col-span-7 bg-neutral-50/50 border border-neutral-100/80 p-8 md:p-10">
            {isSuccess ? (
              <div className="py-12 px-6 text-center flex flex-col items-center justify-center">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mb-6" />
                <h3 className="font-display font-bold text-2xl text-neutral-900 mb-2">
                  Inquiry Logged Successfully!
                </h3>
                <p className="font-sans text-neutral-500 font-light text-sm max-w-sm leading-relaxed mb-8">
                  Thank you! Your spot is scheduled. Our supportive coordinator will message you within 2 hours. See you soon!
                </p>
                <button
                  id="reset-form-btn"
                  onClick={() => setIsSuccess(false)}
                  className="cursor-pointer bg-neutral-950 hover:bg-neutral-800 text-white font-sans text-xs uppercase tracking-widest font-semibold px-6 py-3.5"
                >
                  Log Another Request
                </button>
              </div>
            ) : (
              <form id="gym-inquiry-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-lg text-neutral-950 mb-1">
                    Secure Free Session or Rate Lock-In
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
                    Once submitted, our fitness coordinator reserves your workout slot immediately.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans font-semibold text-[11px] text-neutral-500 uppercase tracking-widest">
                      Your Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Mahanth Gowda"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white border border-neutral-200 p-3 text-sm focus:outline-none focus:border-neutral-900 font-sans font-light"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans font-semibold text-[11px] text-neutral-500 uppercase tracking-widest">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="e.g. 0987654321"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white border border-neutral-200 p-3 text-sm focus:outline-none focus:border-neutral-900 font-sans font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* College or Occupation */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans font-semibold text-[11px] text-neutral-500 uppercase tracking-widest">
                      College / Occupation
                    </label>
                    <input
                      type="text"
                      name="occupation"
                      placeholder="e.g. Mysore University Student / Pro"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="bg-white border border-neutral-200 p-3 text-sm focus:outline-none focus:border-neutral-900 font-sans font-light"
                    />
                  </div>

                  {/* Plan interest */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans font-semibold text-[11px] text-neutral-500 uppercase tracking-widest">
                      Program Tier Interest
                    </label>
                    <select
                      name="plan"
                      value={formData.plan}
                      onChange={handleChange}
                      className="bg-white border border-neutral-200 p-3 text-sm focus:outline-none focus:border-neutral-900 font-sans font-light cursor-pointer"
                    >
                      <option value="Free Trial Session">Book Free Trial Session</option>
                      <option value="Classic Monthly">Classic Monthly (₹1,499)</option>
                      <option value="Regular Quarterly">Regular Quarterly (₹3,799)</option>
                      <option value="Pure Gym Elite Annual">Pure Gym Elite Annual (₹10,999)</option>
                    </select>
                  </div>
                </div>

                {/* Custom questions */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans font-semibold text-[11px] text-neutral-500 uppercase tracking-widest">
                    Brief workout background or questions (Optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="e.g. Any specific student hours / body composition assessment schedule?"
                    value={formData.notes}
                    onChange={handleChange}
                    className="bg-white border border-neutral-200 p-3 text-sm focus:outline-none focus:border-neutral-900 font-sans font-light resize-none"
                  />
                </div>

                {/* Submitting button */}
                <button
                  id="inquiry-form-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer bg-neutral-950 hover:bg-neutral-800 disabled:bg-neutral-600 text-white p-4.5 font-sans font-medium text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-3 border border-neutral-950"
                >
                  {isSubmitting ? "Processing Reservation..." : "Start Your Fitness Journey"}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Google Maps Interactive IFrame Embed */}
        <div className="border border-neutral-200 p-2.5 bg-white shadow-xs">
          <div className="relative w-full h-[400px] overflow-hidden bg-neutral-100">
            <iframe
              title="Pure Gym Mysore Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.397554907405!2d76.62123517589657!3d12.295604129532822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf6504a5c0b1bb%3A0xe7a505cb7dfbd1d6!2sPure%20Gym!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="pt-4 pb-2 px-1 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-neutral-500">
            <span>📌 Address: Kuvempu Nagar Close to T.K Layout Corner • Opposite to Sri Maruthi Temple</span>
            <a
              id="google-maps-redirect-link"
              href="https://maps.app.goo.gl/BtwpTGrEwXJv82HAA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 border-b border-neutral-900 hover:text-[#B31919] hover:border-[#B31919] transition-colors duration-200"
            >
              Open Directly in Google Maps App
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
