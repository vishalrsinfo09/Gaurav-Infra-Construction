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
    heroImage: "/image4.jpg",
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
  const heroImgRef = useRef(null);
  const textRef = useRef(null);
  // const galleryRef = useRef(null);
  // const imagesRef = useRef([]);
  // const [selectedInterior, setSelectedInterior] = useState("2BHK");
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("details");
  const [isScrolled, setIsScrolled] = useState(false);



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

            <div className="relative group inline-block">
              {/* Trigger */}
              <button className="bg-transparent text-white hover:text-cyan-300 transition-colors cursor-pointer pr-6 focus:outline-none">
                INTERIOR WALKTHROUGH
              </button>

              {/* Dropdown */}
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

              {/* Custom thin arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-cyan-300 text-sm">
                ▼
              </div>
            </div>

            <a href="#" className="hover:text-cyan-300 transition-colors">3D TOUR</a>
          </nav>

        </header>
      )}

      {/* Hero Section */}
      <div className="project-wrapper">
        <section
          ref={textRef}
          className=" project-panel h-screen relative flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-20 py-16"
        >
          {/* Left Side: Title + Info Box */}
          <div className="w-full md:w-1/2 flex flex-col mt-20 justify-center space-y-6 z-10">
            <h1 className="text-6xl md:text-8xl font-bold tracking-wide">
              <span className="block text-gray-500">
                {project.title.split(" ")[0]}
              </span>
              <span className="text-amber-600 italic">
                {project.title.split(" ")[1] || ""}
              </span>
            </h1>

            <div className="bg-[#061121] text-white  p-8 md:p-14  rounded-lg shadow-lg max-w-2xl">
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
          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center pr-10 md:pr-40 overflow-hidden">
            <img
              ref={heroImgRef}
              src={project.heroImage}
              alt={project.title}
              className="w-[200%] h-auto object-cover"
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
                  src="/arch.jpg"
                  alt="Gaurav Euphoria modern facade"
                  className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
                  onClick={() => setSelectedImage("/arch.jpg")}
                />
              </div>
            </div>
          </div>
        </section>






        {/* Floor Plan Section */}
        <section className="project-panel h-screen floor-plan-section relative  bg-gray-50">
          <div className="section-container max-w-5xl mx-auto ">
            <h2 className="text-5xl md:text-5xl font-bold text-center mb-12 text-[#D2AD75] pt-10">
              Floor Plan
            </h2>

            {/* Image Container */}
            <div className=" rounded-lg shadow-lg">
              <img
                src="/5bhk.jpg"
                alt="Gaurav Euphoria 5BHK floor plan"
                className="w-full h-auto object-fill transform transition-transform duration-1000 hover:scale-105"
              />
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
    </div>
  );
};

export default GauravEuphoriaDetail;