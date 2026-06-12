import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Holistic Culinary Arts",
    role: "Shopify Store Owner (41 Hours)",
    date: "Nov 24, 2025 - Jun 12, 2026",
    text: "I couldn't thank Moyo enough for keeping up with my less than basic knowledge of upkeeping my website. He has been so patient and understanding. He shared knowledge consistently just to give me ideas quite difficult for me to come up with. I see his passion in his works, and I hope he is still available for my future projects",
    initials: "HC",
    rating: 5.0,
    endorsements: ["Committed to Quality", "Solution Oriented", "Clear Communicator", "Professional"]
  },
  {
    name: "Lash Sales with QuickBooks Integration",
    role: "Shopify Developer (60 Hours)",
    date: "Apr 20, 2026 - Jun 9, 2026",
    text: "Super great to work with! Coming from someone with no background he was very helping and was willing to be patient",
    initials: "LS",
    rating: 5.0,
    endorsements: ["Committed to Quality", "Clear Communicator", "Detail Oriented"]
  },
  {
    name: "Website Design For Clinic",
    role: "Shopify Web Designer (Fixed Price)",
    date: "Jan 21, 2026 - Jan 27, 2026",
    text: "Does great work and delivers on time. Also willing to work with you based on your feedback. I would work with Moyosore again.",
    initials: "WD",
    rating: 5.0,
    endorsements: ["Reliable", "Collaborative", "Committed to Quality", "Clear Communicator", "Detail Oriented"]
  }
];

const HOLD_MS = 9000;

const TestimonialCard = ({ item }) => (
  <div className="w-full flex-shrink-0 px-1">
    <div className="border border-architectural p-6 md:p-8 bg-brand-bg/50 min-h-[340px] md:min-h-[380px] flex flex-col justify-between transition-colors duration-300">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1 text-[#85c7f2] text-sm">
            {"★".repeat(Math.round(item.rating))}
          </div>
          <span className="font-body text-[10px] text-brand-navy/60 uppercase tracking-wider">
            {item.date}
          </span>
        </div>
        <p className="font-body text-sm md:text-base text-brand-navy italic leading-relaxed mb-6">
          &ldquo;{item.text}&rdquo;
        </p>
      </div>
      
      <div className="flex flex-col gap-4">
        {/* Endorsements tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.endorsements.map((tag) => (
            <span key={tag} className="text-[9px] uppercase tracking-wider px-2 py-0.5 border border-architectural text-brand-navy/70 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 border-t border-architectural/50 pt-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-navy flex items-center justify-center rounded-full text-brand-bg font-display font-semibold text-xs md:text-sm shrink-0">
            {item.initials}
          </div>
          <div>
            <p className="font-body font-semibold text-sm text-brand-navy">
              {item.name}
            </p>
            <p className="font-body text-[10px] md:text-xs text-brand-navy/70 uppercase tracking-wider">
              {item.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const total = testimonials.length;

  const goTo = useCallback(
    (index) => {
      setIsTransitioning(true);
      setActiveIndex(((index % total) + total) % total);
    },
    [total],
  );

  const next = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const prev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, HOLD_MS);
    return () => clearInterval(id);
  }, [isPaused, next]);

  return (
    <section
      id="testimonials"
      className="mb-20 md:mb-32 py-8 md:py-12 border-y border-architectural"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), HOLD_MS)}
    >
      <h2 className="font-display text-xl md:text-[32px] font-bold text-brand-navy mb-8 md:mb-12 text-center px-4">
        Client Endorsements
      </h2>

      <div className="relative max-w-3xl mx-auto px-4 md:px-8">
        <div className="overflow-hidden">
          <div
            className="flex testimonial-track"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transition: isTransitioning
                ? "transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)"
                : "none",
            }}
            onTransitionEnd={() => setIsTransitioning(true)}
          >
            {testimonials.map((item) => (
              <TestimonialCard key={item.initials} item={item} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 md:w-11 md:h-11 border border-architectural flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-brand-bg transition-all duration-300 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeIndex
                    ? "w-7 bg-brand-navy"
                    : "w-2 bg-brand-accent/50 hover:bg-brand-accent"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 md:w-11 md:h-11 border border-architectural flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-brand-bg transition-all duration-300 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-center font-body text-[10px] md:text-xs text-accent mt-4 tracking-wider transition-opacity duration-300">
          {activeIndex + 1} of {total}
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
