import React from "react";

const ParallaxOverlaySection = ({ bgImage, children }) => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Card Content */}
      <div className="relative bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-2xl m-4 text-white
                transform -translate-x-10 opacity-0 animate-slideIn rounded-2xl shadow-xl p-8 max-w-2xl m-4 text-gray-900">
        {children}
      </div>
    </section>
  );
};

export default ParallaxOverlaySection;
