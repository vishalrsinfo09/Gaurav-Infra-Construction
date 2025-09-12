import React from "react";

const SplitParallaxSection = ({ bgImage, children, reverse = false }) => {
  return (
    <section className={`relative flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} min-h-screen`}>
      {/* Parallax Image */}
      <div
        className="md:w-1/2 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Content */}
      <div className="md:w-1/2 flex items-center justify-center p-8 bg-gray-100">
        <div className="max-w-md text-gray-900">{children}</div>
      </div>
    </section>
  );
};

export default SplitParallaxSection;

