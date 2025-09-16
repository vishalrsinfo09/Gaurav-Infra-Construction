import React, { useRef, useEffect, useState } from "react";

const InteriorSection = ({ interiors }) => {
  const [selectedInterior, setSelectedInterior] = useState(
    Object.keys(interiors)[0]
  );
  const galleryRef = useRef(null);

  // Scroll horizontally on vertical wheel
  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY; // vertical wheel scrolls horizontally
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [selectedInterior]);

  return (
    <section className="project-panel h-screen bg-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-serif">INTERIOR</h2>
        <p className="mt-2 text-lg uppercase tracking-widest text-gray-600">
          WORLD CLASS LIVING
        </p>
      </div>

      {/* Interior Type Selector */}
      <div className="flex justify-center gap-4 mb-6">
        {Object.keys(interiors).map((type) => (
          <button
            key={type}
            onClick={() => setSelectedInterior(type)}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedInterior === type
                ? "bg-amber-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Gallery for Selected Interior */}
      <div
        className="gallery-container relative w-full overflow-x-auto"
        ref={galleryRef}
      >
        <div className="flex flex-nowrap">
          {interiors[selectedInterior].map((img, idx) => (
            <div key={idx} className="flex-shrink-0 w-screen h-[400px]">
              <img
                src={img}
                alt={`${selectedInterior} ${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-container::-webkit-scrollbar {
          display: none; /* hide scrollbar */
        }
      `}</style>
    </section>
  );
};

export default InteriorSection;
