// src/pages/projects/GauravEuphoriaDetail.jsx
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Mock project data
const allProjects = {
  "gaurav-euphoria": {
    title: "Gaurav Euphoria",
    tagline: "A Destination Fit for Royalty",
    heroImage: "/public/carousal-build2.jpeg",
    galleryImages: [
      "/carousal-build.jpeg",
      "/image1.jpg",
      "/image2.jpg",
    ],
  },
};

export default function GauravEuphoriaDetail() {
  const { projectId } = useParams();
  const project = allProjects[projectId] || allProjects["gaurav-euphoria"];

  const textRef = useRef(null);
  const galleryRef = useRef(null);
  const imagesRef = useRef([]);

  const [activeTab, setActiveTab] = useState("details");

  // GSAP effects
  useEffect(() => {
    if (!project) return;

    // Hero Parallax
    const heroAnim = gsap.to(textRef.current, {
      y: -100,
      opacity: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Horizontal Gallery Scroll
    if (galleryRef.current) {
      // collect images after DOM render
      imagesRef.current = gsap.utils.toArray(
        galleryRef.current.querySelectorAll("img")
      );

      if (imagesRef.current.length > 0) {
        const scrollTween = gsap.to(imagesRef.current, {
          xPercent: -100 * (imagesRef.current.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: galleryRef.current,
            pin: true,
            scrub: 1,
            end: () =>
              `+=${galleryRef.current.scrollWidth - galleryRef.current.offsetWidth}`,
          },
        });

        return () => {
          heroAnim.kill();
          scrollTween.kill();
        };
      }
    }

    return () => heroAnim.kill();
  }, [project]);

  if (!project) return <div>Project not found.</div>;

  const tabs = [
    { id: "details", label: "DETAILS" },
    { id: "amenities", label: "AMENITIES" },
    { id: "specifications", label: "SPECIFICATIONS" },
    { id: "walkthrough", label: "VIDEO WALKTHROUGH" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center text-dark bg-black bg-opacity-10 backdrop-blur-sm">
        <div className="flex items-center">
          <img src="/Logo3.png" alt="Logo" className="h-20 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-cyan-300 transition-colors">
            HOME
          </a>
             <a href="/projects" className="hover:text-cyan-300 transition-colors">
            PROJECTS
          </a>
          <a href="/" className="hover:text-cyan-300 transition-colors">
            INTERIOR WALKTHROGH
          </a>
        
          <a href="#" className="hover:text-cyan-300 transition-colors">
            3D TOUR
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        ref={textRef}
        className="relative flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-20 py-16 md:h-screen pt-32"
      >
        {/* Left Side: Title + Info Box */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
            <span className="block text-gray-500">
              {project.title.split(" ")[0]}
            </span>
            <span className="text-amber-600 italic">
              {project.title.split(" ")[1] || ""}
            </span>
          </h1>

          <div className="bg-[#061121] text-white p-6 md:p-10 rounded-lg shadow-lg max-w-md">
            <h2 className="text-lg md:text-xl font-semibold mb-3 tracking-wide uppercase">
              {project.tagline}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {project.title} speaks the language of architecture very
              fluently. It is designed to redefine luxury living with modern
              comforts and timeless elegance.
            </p>
          </div>
        </div>

        {/* Right Side: Hero Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-auto md:h-[85vh] object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      <div className="h-60 md:h-62"></div>

      {/* Tabs Section */}
      <section
        className="relative z-20 px-6 md:px-24 py-16 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/carousal-build.jpeg')" }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative text-white p-8">
          <div className="flex justify-around border-b border-gray-600">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 md:px-8 uppercase font-semibold transition-colors duration-300 ${
                  activeTab === tab.id
                    ? "border-b-2 border-white"
                    : "border-b-2 border-transparent hover:border-gray-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-content mt-8 p-4">
            {activeTab === "details" && (
              <div className="text-left">
                <h2 className="text-3xl font-bold">DETAILS</h2>
                <p className="mt-4 text-lg">4.5 BHK & 6.5 BHK</p>
                <p className="mt-2 text-sm">4 FLOORS OF WORLD CLASS AMENITIES</p>
                <button className="mt-8 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors">
                  Enquire Now
                </button>
              </div>
            )}

            {activeTab === "amenities" && (
              <div className="text-center py-8">
                <h2 className="text-3xl font-bold mb-4">AMENITIES</h2>
                <p>Double height entrance lobby ... etc.</p>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="text-center py-8">
                <h2 className="text-3xl font-bold mb-4">SPECIFICATIONS</h2>
                <p>Flooring, Fittings, Electrical, Plumbing details...</p>
              </div>
            )}

            {activeTab === "walkthrough" && (
              <div className="text-center py-8">
                <h2 className="text-3xl font-bold mb-4">VIDEO WALKTHROUGH</h2>
                <iframe
                  className="w-full h-96"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video Walkthrough"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Horizontal Gallery */}
      <section className="bg-white py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-serif">INTERIOR</h2>
          <p className="mt-2 text-lg uppercase tracking-widest text-gray-600">
            WORLD CLASS LIVING
          </p>
        </div>
        <div
          className="gallery-container relative w-full overflow-hidden"
          ref={galleryRef}
        >
          <div className="flex flex-nowrap">
            {project.galleryImages.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Gallery ${index}`}
                className="w-screen h-[400px] object-cover"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
