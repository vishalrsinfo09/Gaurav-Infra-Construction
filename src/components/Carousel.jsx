import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { type: "video", src: "/bg_video.mp4" },
  { type: "video", src: "/video2.mp4" },
  { type: "image", src: "/carousal2.jpg" },
  
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence>
        {slides.map((slide, i) =>
          i === index ? (
            <motion.div
              key={i}
              className="absolute inset-0 w-full h-full z-10"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.9 }}
            >
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={slide.src}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Overlay Content (optional) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white pointer-events-none z-20">
        {/* You can put overlay text/buttons here */}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 pointer-events-auto"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 pointer-events-auto"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30 pointer-events-auto">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-opacity ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
