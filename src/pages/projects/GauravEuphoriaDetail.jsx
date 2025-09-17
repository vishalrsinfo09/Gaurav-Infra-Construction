// src/pages/projects/GauravEuphoriaDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);


// Mock project data
const allProjects = {
  "gaurav-euphoria": {
    title: "Gaurav Euphoria",
    tagline: "A Destination Fit for Royalty",
    heroImage: "/carousal-build2.jpeg",
    galleryImages: [
      "/carousal-build.jpeg",
      "/image1.jpg",
      "/image2.jpg",
    ],
  },
};
// Mock data for interiors
// const interiors = {
//   "2BHK": [
//     "/5bhk.jpg",
//     "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-4.jpg",
//   ],
//   "3BHK": [
//     "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-5.jpg",
//     "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-6.jpg",
//   ],
// };

const GauravEuphoriaDetail = () => {
  const { projectId } = useParams();
  const project = allProjects[projectId] || allProjects["gaurav-euphoria"];
  // const heroImgRef = useRef(null);
  // const textRef = useRef(null);
  // const galleryRef = useRef(null);
  // const imagesRef = useRef([]);
  // const [selectedInterior, setSelectedInterior] = useState("2BHK");
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("details");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);


  //navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true);   // Hero se bahar → button
      } else {
        setIsScrolled(false);  // Hero ke andar → full navbar
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up, .fade-left");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.3, // triggers when 30% visible
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const sections = gsap.utils.toArray(".project-panel");

    sections.forEach((panel) => {


      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: 1,
        snap: 1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (!project) return <div>Project not found.</div>;

  const tabs = [
    { id: "details", label: "DETAILS" },
    { id: "amenities", label: "AMENITIES" },
    { id: "specifications", label: "SPECIFICATIONS" },
    // { id: "walkthrough", label: "VIDEO WALKTHROUGH" },
  ];

  return (

    <div className="overflow-hidden">
      {/* Header */}
      {/* <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center text-dark bg-black bg-opacity-10 backdrop-blur-sm">
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
      </header> */}
      {!isScrolled && (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-blur-md px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/Logo3.png" alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Full Navbar */}
          <nav className="hidden md:flex space-x-8 text-white relative">
            <a href="/" className="hover:text-cyan-300 transition-colors">HOME</a>
            <a href="/projects" className="hover:text-cyan-300 transition-colors">PROJECTS</a>

            <div className="relative group inline-block"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              {/* Trigger */}
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="bg-transparent text-white hover:text-cyan-300 transition-colors cursor-pointer pr-6 focus:outline-none">
                INTERIOR WALKTHROUGH
              </button>

              {/* Dropdown */}
              {openDropdown && (
                <ul className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                  <li>
                    <a
                      href="/video-player/2bhk"
                      className="block px-4 py-2 hover:bg-cyan-600"
                    >
                      2 BHK
                    </a>
                  </li>
                  <li>
                    <a
                      href="/video-player/3bhk"
                      className="block px-4 py-2 hover:bg-cyan-600"
                    >
                      3 BHK
                    </a>
                  </li>
                </ul>
              )}
            </div>

            <a href="#" className="hover:text-cyan-300 transition-colors">3D TOUR</a>
          </nav>
          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </header>
      )}
      {/* Mobile menu */}
      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white text-xl md:hidden z-40">
          <a href="/" onClick={() => setIsOpen(false)}>HOME</a>
          <a href="/projects" onClick={() => setIsOpen(false)}>PROJECTS</a>

          {/* Interior Walkthrough with Dropdown */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center gap-2"
            >
              INTERIOR WALKTHROUGH
              <span className={`transform transition-transform ${openDropdown ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {openDropdown && (
              <div className="mt-3 flex flex-col space-y-2">
                <a
                  href="/video-player/2bhk"
                  className="hover:text-cyan-300"
                  onClick={() => setIsOpen(false)}
                >
                  2 BHK
                </a>
                <a
                  href="/video-player/3bhk"
                  className="hover:text-cyan-300"
                  onClick={() => setIsOpen(false)}
                >
                  3 BHK
                </a>
              </div>
            )}
          </div>

          <a href="#" onClick={() => setIsOpen(false)}>3D TOUR</a>
        </div>
      )}

      {/* Hero Section */}
      <div className="project-wrapper">
        <section className="flex flex-col md:flex-row min-h-screen">
          {/* Left Side: Title + Info Box */}
          <div className="flex-1 flex flex-col justify-center gap-6 px-6 md:px-12 py-12 bg-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-wide">
              <span className="block text-gray-500">{project.title.split(" ")[0]}</span>
              <span className="text-amber-600 italic">
                {project.title.split(" ")[1] || ""}
              </span>
            </h1>

            <div className="bg-[#061121] text-white p-8 rounded-xl shadow-lg max-w-xl">
              <h2 className="text-lg md:text-xl font-semibold uppercase tracking-wide mb-3">
                {project.tagline}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {project.title} speaks the language of architecture very fluently.
                It is designed to redefine luxury living with modern comforts and timeless elegance.
              </p>
            </div>
          </div>

          {/* Right Side: Hero Image */}
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>



        <section className="project-panel h-screen content-section pin bg-gray-50" id="architecture">
          <div className="section-container max-w-7xl mx-auto px-6">
            <h2 className="section-title text-5xl md:text-6xl font-serif font-bold text-[#D2AD75] tracking-wide pt-12">
              Architecture
            </h2>
            <div className="w-24 h-1 bg-[#D2AD75] mx-auto mb-10"></div>
            <div className="section-content grid md:grid-cols-2 gap-16 items-center">
              {/* Left Text */}
              <div className="content-text fade-up">
                <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                  <strong>Gaurav Euphoria</strong> showcases a modern minimalist architectural design,
                  combining sleek glass facades with textured stone cladding. Each tower is thoughtfully
                  oriented to maximize natural light, cross-ventilation, and panoramic views of the
                  landscaped gardens below.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                  Apartments feature open-plan living areas, modular kitchens, and spacious bedrooms.
                  Balconies with elegant glass railings provide uninterrupted views, emphasizing the
                  seamless connection between indoor and outdoor spaces.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                  The construction emphasizes durability and sustainability, using high-quality concrete,
                  eco-friendly materials, and energy-efficient systems. Rainwater harvesting, solar lighting,
                  and landscaped terraces reflect Gaurav Infra’s commitment to environmentally conscious design.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                  Exclusive amenities like rooftop sky lounges, meditation decks, and wellness-focused terraces
                  create a luxurious living experience while maintaining a harmonious blend of aesthetics
                  and functionality.
                </p>
              </div>

              {/* Right Image (only one now) */}
              <div className="content-images fade-left">
                <img
                  src="/carousal-build2.jpeg"
                  alt="Gaurav Euphoria modern facade"
                  className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
                  onClick={() => setSelectedImage("/carousal-build2.jpeg")}
                />
              </div>
            </div>
          </div>
        </section>






        <section className="project-panel h-screen floor-plan-section relative bg-gray-50 py-12">
          <div className="section-container max-w-5xl mx-auto px-6">
            <h2 className="text-5xl md:text-5xl font-bold text-center mb-12 text-[#D2AD75]">
              Floor Plan
            </h2>

            {/* Image Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="flex flex-col gap-8">
                {/* First Image */}
                <div className="flex flex-col items-center w-full " onClick={() => setSelectedImage("/_2bhk_floor.png")}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">2BHK</h3>
                  <div className="rounded-lg shadow-lg overflow-hidden w-full">
                    <img
                      src="/_2bhk_floor.png"
                      alt="2BHK Floor Plan"
                      className="w-full h-auto object-contain cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Second Image */}
                <div className="flex flex-col items-center w-full" onClick={() => setSelectedImage("/_2bhk_floor.png")}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">2BHK Premium</h3>
                  <div className="rounded-lg shadow-lg overflow-hidden w-full">
                    <img
                      src="/_2bhk_floor.png"
                      alt="2BHK Premium Floor Plan"
                      className="w-full h-auto object-contain cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-8">
                {/* Third Image */}
                <div className="flex flex-col items-center w-full" onClick={() => setSelectedImage("/_2bhk_floor.png")}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">3BHK</h3>
                  <div className="rounded-lg shadow-lg overflow-hidden w-full">
                    <img
                      src="/_2bhk_floor.png"
                      alt="3BHK Floor Plan"
                      className="w-full h-auto object-contain cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Fourth Image */}
                <div className="flex flex-col items-center w-full" onClick={() => setSelectedImage("/5bhk.jpg")}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">3BHK Premium</h3>
                  <div className="rounded-lg shadow-lg overflow-hidden w-full">
                    <img
                      src="/5bhk.jpg"
                      alt="3BHK Premium Floor Plan"
                      className="w-full h-auto object-contain cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>


        <section className="project-panel h-screen floor-plan-section relative bg-gray-50 py-12">
          <div className="section-container max-w-5xl mx-auto px-6">
            <h2 className="text-5xl md:text-5xl font-bold text-center mb-12 text-[#D2AD75]">
              Isometric View
            </h2>

            {/* Image Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 2BHK Floor Plan */}
              <div className="flex flex-col items-center w-full" onClick={() => setSelectedImage("/2bhk_isometric_view.png")}>
                {/* <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">2BHK</h3> */}
                <div className="rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/2bhk_isometric_view.png"
                    alt="Gaurav Euphoria 2BHK floor plan"
                    className="w-full max-w-sm h-auto object-contain cursor-pointer"
                  />
                </div>
              </div>

              {/* 3BHK Floor Plan */}
              <div className="flex flex-col items-center" onClick={() => setSelectedImage("/3bhk_isometric_view.png")}>
                {/* <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">3BHK</h3> */}
                <div className="rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/3bhk_isometric_view.png"
                    alt="Gaurav Euphoria 3BHK floor plan"
                    className="w-full max-w-sm h-auto object-contain cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* Lifestyle Section */}
        <section
          className="project-panel h-screen content-section pin bg-gradient-to-r from-white via-gray-50 to-gray-100"
          id="lifestyle"
        >
          <div className="section-container max-w-7xl mx-auto px-6 py-12 text-center">

            {/* Heading */}
            <h2 className="section-title text-5xl md:text-6xl font-serif font-bold text-[#D2AD75] tracking-wide">
              Lifestyle
            </h2>
            <div className="w-24 h-1 bg-[#D2AD75] mx-auto mt-4 mb-10"></div>

            {/* Text Content */}
            <div className="content-text fade-up max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed text-lg">
                Our team of experienced interior designers and furniture planners brings years of
                expertise, making us a trusted choice for creating luxurious living spaces.
                Each design blends comfort, elegance, and functionality.
              </p>
              <p className=" text-gray-700 leading-relaxed text-lg">
                Whether you’re redesigning your living room, planning a new office, or creating your dream kitchen,
                we craft spaces that truly reflect your personality while ensuring cost-effectiveness and precision.
              </p>
            </div>

            {/* Overlapping Images Layout */}
            <div className="relative w-full max-w-5xl mx-auto h-auto flex justify-center gap-6 mt-4">
              {/* Left Image */}
              <div className="w-72 md:w-96 h-80 border-2 border-gray-300 shadow-lg">
                <img
                  src="/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-22.jpg"
                  alt="Floor Plan 1"
                  className="rounded-lg w-full h-full object-contain"
                />
              </div>

              {/* Right Image */}
              <div className="w-72 md:w-96 h-80 border-2 border-gray-300 shadow-lg">
                <img
                  src="/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-32.jpg"
                  alt="Floor Plan 2"
                  className="rounded-lg w-full h-full object-contain"
                />
              </div>
            </div>


          </div>
        </section>
        {/* 

        <GalleryLoop /> */}

        {/* Tabs Section */}
        <section
          className="project-panel h-screen relative z-20 px-4 sm:px-6 md:px-24 py-12 sm:py-16 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/carousal2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 text-white">
            {/* Tabs */}
            <div className="overflow-x-auto">
              <div className="flex flex-nowrap justify-start sm:justify-around border-b border-gray-600">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-shrink-0 py-3 px-4 sm:px-6 md:px-8 uppercase font-semibold transition-colors duration-300 ${activeTab === tab.id
                      ? "border-b-2 border-white"
                      : "border-b-2 border-transparent hover:border-gray-400"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="tab-content mt-6 sm:mt-8 p-4 sm:p-6">
              {activeTab === "details" && (
                <div className="text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">DETAILS</h2>
                  <p className="mt-4 text-base sm:text-lg">2 BHK & 3 BHK</p>
                  <p className="mt-2 text-sm sm:text-base">4 FLOORS OF WORLD CLASS AMENITIES</p>
                  <button className="mt-6 sm:mt-8 px-5 py-2 sm:px-6 sm:py-3 border border-white text-white hover:bg-white hover:text-black transition-colors text-sm sm:text-base">
                    Enquire Now
                  </button>
                </div>
              )}

              {activeTab === "amenities" && (
                <section className="content-section pin mt-6 sm:mt-8" id="amenities">
                  <div className="section-container">
                    <ul className="space-y-3 sm:space-y-4 list-disc list-inside text-sm sm:text-base md:text-lg">
                      <li>Double Height Entrance Lobby</li>
                      <li>Landscaped Garden & Kids Play Area</li>
                      <li>Clubhouse with Gym & Indoor Games</li>
                      <li>Swimming Pool & Jogging Track</li>
                      <li>24x7 Security with CCTV Surveillance</li>
                      <li>Dedicated Parking Area</li>
                      <li>Power Backup for Common Areas & Lifts</li>
                    </ul>
                  </div>
                </section>
              )}

              {activeTab === "specifications" && (
                <div className="text-left py-6 sm:py-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Specifications</h2>
                  <ul className="space-y-2 sm:space-y-3 list-disc list-inside text-sm sm:text-base md:text-lg">
                    <li>
                      <strong>BUILDING STRUCTURE:</strong> Earthquake resistant design and premium quality construction.
                    </li>
                    <li>RCC framed earthquake-resistant structure</li>
                    <li>
                      <strong>WALLS:</strong> External walls 150 mm thick and Internal walls 115 mm thick.
                    </li>
                    <li>
                      <strong>PLASTER:</strong> All internal walls to be plastered with 12mm fanti plaster and external walls with 20mm sand face plaster.
                    </li>
                    <li>
                      <strong>DOORS:</strong> Teak Wood Main Door. Rest of the door to be pre laminate door.
                    </li>
                    <li>
                      <strong>WINDOWS:</strong> Powder coated aluminium glazed sliding windows with MS grills.
                    </li>
                    <li>
                      <strong>FLOORING:</strong> Complete vitrified tile flooring of size 24 X 24 or 32 X 32.

                      Toilets in Ceramic Concept Tile up to lintel level and antiskid tiles in flooring.

                      Balconies to have non skid ceramic tiles/ Kota tiles.
                    </li>
                    <li>
                      <strong>KITCHEN:</strong> Granite cooking platform with stainless steel sink and dado up to 2’ height.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

      </div>
      {/* <section className="bg-white py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-serif">INTERIOR</h2>
          <p className="mt-2 text-lg uppercase tracking-widest text-gray-600">
            WORLD CLASS LIVING
          </p>
        </div> */}

      {/* Interior Type Selector */}
      {/* <div className="flex justify-center gap-4 mb-6">
          {Object.keys(interiors).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedInterior(type)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors
          ${selectedInterior === type ? "bg-amber-600 text-white" : "bg-gray-200 text-gray-800"}`}
            >
              {type}
            </button>
          ))}
        </div> */}

      {/* Gallery for Selected Interior */}
      {/* <div className="gallery-container relative w-full overflow-hidden" ref={galleryRef}>
          <div className="flex flex-nowrap">
            {interiors[selectedInterior].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${selectedInterior} ${idx}`}
                className="w-screen h-[400px] object-cover"
              />
            ))}
          </div>
        </div> */}
      {/* </section> */}


      {/* Horizontal Gallery */}
      {/* <section className="bg-white py-12">
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
      </section> */}

      {/* PopUp Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // Close on background click
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Selected Floor Plan"
              className="w-full h-full object-contain"
            />
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export default GauravEuphoriaDetail;