import { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { Maximize2, X, Image as ImageIcon, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import gymInterior from "../assets/images/gym_interior_1779950761960.png";
import gymReception from "../assets/images/gym_reception_1779950792842.png";

type FilterCategory = "All" | "Floor" | "Community" | "Equipments" | "Lobby";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const items = GALLERY_ITEMS(gymInterior, gymReception);

  const filteredItems = activeFilter === "All"
    ? items
    : items.filter((item) => item.category === activeFilter);

  const categories: FilterCategory[] = ["All", "Floor", "Equipments", "Community", "Lobby"];

  return (
    <section id="gallery" className="py-24 bg-neutral-50/70 border-t border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Gallery Header Row */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-[#B31919] font-mono text-xs uppercase tracking-widest font-semibold mb-3">
              <span>ATMOSPHERE</span>
              <span className="w-8 h-[1px] bg-[#B31919]" />
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-neutral-900 tracking-tight leading-none">
              The Real Space.
            </h2>
          </div>
          <p className="font-sans text-neutral-500 font-light text-sm max-w-sm leading-relaxed">
            Real snapshots from PURE GYM MYSORE. No artificial over-editing or deceptive model stock images. Inspect our clean layout and modern gear.
          </p>
        </div>

        {/* Minimalist Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-10 pb-2 border-b border-neutral-100">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`gallery-filter-${cat.toLowerCase()}`}
              onClick={() => setActiveFilter(cat)}
              className={`cursor-pointer px-4 py-2 font-sans text-xs tracking-wider uppercase font-medium border transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-neutral-950 text-white border-neutral-950 font-semibold"
                  : "bg-white text-neutral-500 border-neutral-200 hover:text-neutral-900 hover:border-neutral-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              className="bg-white border border-neutral-200/60 p-2.5 shadow-xs relative group cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              {/* Image Frame Container */}
              <div className="overflow-hidden aspect-[4/3] bg-neutral-100 relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Ambient Soft Grid overlay */}
                <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 bg-white text-neutral-950 inline-block shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                {/* Small indicator inside the image frame */}
                <span className="absolute bottom-2 left-2 bg-neutral-950/80 backdrop-blur-xs text-[9px] font-mono font-bold text-white px-2 py-0.5 tracking-wider uppercase">
                  {item.category}
                </span>
              </div>

              {/* Caption and interactive footer */}
              <div className="pt-3 px-1 pb-1 flex flex-col gap-0.5">
                <h3 className="font-display font-semibold text-[13.5px] text-neutral-900 tracking-tight leading-tight group-hover:text-[#B31919] transition-colors duration-200">
                  {item.alt}
                </h3>
                <p className="font-sans text-[11px] text-neutral-400 font-light leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              id="gallery-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xs flex items-center justify-center p-6"
            >
              <button
                id="lightbox-close-btn"
                className="absolute top-6 right-6 p-2 text-white bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 cursor-pointer"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Expanded Gym Asset View"
                  className="max-w-full max-h-full object-contain border border-neutral-800 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
