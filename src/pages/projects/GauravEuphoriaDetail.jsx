import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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

const tabs = [
  { id: "details", label: "DETAILS" },
  { id: "amenities", label: "AMENITIES" },
];

const GauravEuphoriaDetail = () => {
  const { projectId } = useParams();
  const project = allProjects[projectId] || allProjects["gaurav-euphoria"];
  const [activeTab, setActiveTab] = useState("details");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const sections = [
    { title: "BUILDING STRUCTURE", items: ["R.C.C. frame structure.", "Earthquake resistant design."] },
    { title: "WALLS", items: ["External 150mm, Internal 115mm thick."] },
    { title: "FLOORING", items: ["24x24 vitrified tiles.", "Toilet & Balcony anti-skid tiles."] },
    { title: "KITCHEN", items: ["Granite platform with SS sink, dado up to 2’"] },
    { title: "PAINTING", items: ["Plastic paint inside, Apex outside."] },
    { title: "PAINTING FINISHES", items: ["Internal walls of all the rooms to be putty finish and painted in Plastic or Royal paint.", "All external walls to be painted in Apex or Ultima."] },
    { title: "ELECTRICAL", items: ["Electrical wiring to be concealed with 4.5 points in each room with modular switches.", "A.C., CCTV, Telephone and Cable connection point in all room."] },
    { title: "TOILETS", items: ["Jaquar fitting in bathing area. One Indian & European WC in each flat."] },
    { title: "OTHERS", items: ["POP with light in all ceiling.", "Two lift of Kone or Jhonson company with Rescue Backup.", "24 hour water supply from over head tank & underground sump."] },
    { title: "ADDITIONAL CHARGES", items: ["Registration, stamp duty charges and document preparation charges shall be paid by purchaser.", "M.S.E.B. meter, water meter and other incidental expenses will be charged extra.", "Any extra work other than specification shall be charged separately before execution.", "Elevation changes are not allowed.", "All rights reserved with builder for making changes in drawing & Specification.", "GST & other Govt. taxes if applicable will be charge extra.", "Possession after full clearance of all dues."] }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
        threshold: 0.3,
      }
    );
    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // let mm = gsap.matchMedia();
    // mm.add("(min-width: 767px)", () => {
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
    // });

    // For mobile
    // mm.add("(max-width: 767px)", () => {

    //   const sections = document.querySelectorAll(".project-panel");
    //   sections.forEach((sec) => {
    //     sec.classList.remove("h-screen");
    //     sec.classList.add("min-h-screen");
    //   });
    // });
    // return () => mm.revert();
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div>Project not found.</div>;

  return (
    <div className="overflow-hidden">

      {!isScrolled && (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-blur-md px-6 py-4 flex justify-between items-center">

          <div className="flex items-center">
            <img src="/Logo3.png" alt="Logo" className="h-16 w-auto" />
          </div>

          <nav className="hidden md:flex space-x-8 text-white relative">
            <a href="/" className="hover:text-cyan-300 transition-colors">HOME</a>
            <a href="/projects" className="hover:text-cyan-300 transition-colors">PROJECTS</a>
            <div className="relative group inline-block"
            // onMouseEnter={() => setOpenDropdown(true)}
            // onMouseLeave={() => setOpenDropdown(false)}
            >
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="bg-transparent text-white hover:text-cyan-300 transition-colors cursor-pointer pr-6 focus:outline-none">
                INTERIOR WALKTHROUGH
              </button>
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
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </header>
      )}

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

      <div className="project-wrapper">

        <section className="project-panel h-screen flex flex-col md:flex-row min-h-screen">
          {/* Left Side: Title + Info Box */}
          <div className="flex-1 flex flex-col justify-center gap-6 
                  px-4 sm:px-8 md:px-10 lg:px-12 
                  py-8 md:py-12 bg-white text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-wide  pt-20 sm:pt-8 md:pt-0">
              <span className="block text-amber-700" style={{
                fontFamily: 'Playfair Display, serif',
                color: '#B8860B',
                fontWeight: '700',
                letterSpacing: '2px',
                fontSize: '30px'
              }}>
                Gaurav
              </span>

              <span className="text-amber-600 italic relative" style={{
                fontFamily: 'Dancing Script, Brush Script MT, cursive',
                color: '#CD853F',
                fontWeight: '400',
                fontSize: '1.2em',
                letterSpacing: '3px',
                fontStyle: 'italic'
              }}>
                Euphori
                <span className="relative inline-block">
                  a
                  <span
                    className="absolute"
                    style={{
                      top: '4px',
                      left: '0%',
                      transform: 'translateX(-50%)',
                      fontSize: '40px',
                      color: '#CD853F',
                      animation: 'gentle-float 3s ease-in-out infinite'
                    }}
                  >
                    ✿
                  </span>
                </span>
              </span>

              <div className="text-amber-700 text-lg md:text-xl" style={{
                fontFamily: 'Playfair Display, serif',
                color: '#B8860B',
                fontWeight: '500',
                letterSpacing: '1px',
                paddingLeft: '100px'
              }}>
                2 & 3 BHK Premium Homes
              </div>
            </h1>

            <div className="text-green-800 rounded-lg  sm:mt-4 md:mt-6 inline-block custome-mt">
              <p className="text-2xl sm:text-xl md:text-3xl" style={{ fontFamily: 'Cairo' }}>
                the first <strong style={{ fontSize: '45px' }}>highrise</strong> building<br />
                <span className="ps-4 sm:ps-2 md:ps-6">
                  in <span style={{ fontWeight: 'bold' }}>Lashkaribagh</span> with modern
                  <strong style={{ fontSize: '45px' }}>amenities</strong>
                </span>
              </p>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-64 sm:h-80 
      md:h-screen md:object-contain 
      lg:h-full lg:object-cover"
            />
          </div>
        </section>


        <section className="project-panel h-screen content-section pin bg-gray-50">
          <div className="section-container max-w-7xl mx-auto px-6 sm:px-6">
            <h2 className="section-title  text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-[#D2AD75] tracking-wide pt-6  mb-6 sm:mb-8">
              About Project
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#D2AD75] mx-auto mb-2 sm:mb-4"></div>
            <div className="section-content grid  grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
              <div className="">
                <img
                  src="/carousal-build.jpeg"
                  alt="Gaurav Euphoria modern facade"
                  className="w-full h-60 sm:h-72 md:h-[400px] object-cover rounded-xl shadow-2xl"
                  onClick={() => setSelectedImage("/carousal-build.jpeg")}
                />
              </div>
              <div className="content-text fade-up">
                <p className="mb-2 text-gray-700 leading-relaxed text-[10px] md:text-[14px] lg:text-lg text-justify">
                  There are too many option for homes, but every home is not a luxurious home. Luxury cannot be described, it has to be experienced.
                  Experience it first, at the finest residential project <strong>"Gaurav Euphoria"</strong> developed by Gaurav Infra at the prime location of the city.
                </p>
                <p className="mb-2 text-gray-700 leading-relaxed text-[10px] md:text-[14px] lg:text-lg text-justify">
                  It offers 2 & 3 spacious bed rooms with proper ventilation and sunlight. A large living room along with entrance foyer. Big kitchen with separate dining space. Balcony / terrace to every rooms. Thoughtful planning, stylish design, quality construction and peaceful surrounding make <strong>"Gaurav Euphoria"</strong> more prestigious and beautiful place to live.
                </p>
                <p className="mb-2 text-gray-700 leading-relaxed text-[10px] md:text-[14px] lg:text-lg text-justify">
                  The additional advantage of the project is its location. You can easily access many things like Shopping Mall, Inox, Metro Station, Hospital, Petrol Pump, ATM etc. within walking distance.
                  <strong>"Gaurav Euphoria"</strong> is the perfect place to live luxurious life, that you can call a dream home.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="project-panel h-screen content-section pin bg-gray-50" id="architecture">
          <div className="section-container max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="section-title text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-[#D2AD75] tracking-wide pt-6 mb-6">
              Architecture
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#D2AD75] mx-auto mb-8"></div>

            {/* Grid Layout */}
            <div className="section-content grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">

              {/* Image First on Mobile */}
              <div className="order-1 md:order-2">
                <img
                  src="/carousal-build2.jpeg"
                  alt="Gaurav Euphoria modern facade"
                  className="w-full h-64 sm:h-80 md:h-[400px] object-cover rounded-xl shadow-2xl"
                  onClick={() => setSelectedImage("/carousal-build2.jpeg")}
                />
              </div>

              {/* Text Content */}
              <div className="content-text fade-up order-2 md:order-1">
                <p className="mb-0 text-gray-700 leading-relaxed text-[9px] md:text-[14px] lg:text-lg text-justify">
                  <strong>Gaurav Euphoria</strong> showcases a modern minimalist architectural design,
                  combining sleek glass facades with textured stone cladding. Each tower is thoughtfully
                  oriented to maximize natural light, cross-ventilation, and panoramic views of the
                  landscaped gardens below.
                </p>
                <p className="mb-0  text-gray-700 leading-relaxed text-[9px] md:text-[14px] lg:text-lg text-justify">
                  Apartments feature open-plan living areas, modular kitchens, and spacious bedrooms.
                  Balconies with elegant glass railings provide uninterrupted views, emphasizing the
                  seamless connection between indoor and outdoor spaces.
                </p>
                <p className="mb-0 text-gray-700 leading-relaxed text-[9px] md:text-[14px] lg:text-lg text-justify">
                  The construction emphasizes durability and sustainability, using high-quality concrete,
                  eco-friendly materials, and energy-efficient systems. Rainwater harvesting, solar lighting,
                  and landscaped terraces reflect Gaurav Infra’s commitment to environmentally conscious design.
                </p>
                <p className="mb-0  text-gray-700 leading-relaxed text-[9px] md:text-[14px] lg:text-lg text-justify">
                  Exclusive amenities like rooftop sky lounges, meditation decks, and wellness-focused terraces
                  create a luxurious living experience while maintaining a harmonious blend of aesthetics
                  and functionality.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="project-panel h-screen floor-plan-section relative bg-gray-50 py-6">
          <div className="section-container max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-2 md:mb-12 text-[#D2AD75]">
              Floor Plan
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#D2AD75] mx-auto mb-2 md:mb-8"></div>
            {/* Image Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* Left Column */}
              <div className="flex flex-col gap-4 md:gap-8">
                {/* First Image */}
                <div className="flex flex-col items-center w-full " onClick={() => setSelectedImage("/_2bhk_floor.png")}>
                  <h3 className="text-1xl font-semibold text-gray-800 mb-0 md:mb-2 text-center">2BHK (1st Floor Plan)</h3>
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
                  <h3 className="text-1xl font-semibold text-gray-800 mb-0 md:mb-2 text-center"> (2nd/4th/6th/8th/10th Floor Plan)</h3>
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
              <div className="flex flex-col gap-4 md:gap-8">
                {/* Third Image */}
                <div className="flex flex-col items-center w-full" onClick={() => setSelectedImage("/_2bhk_floor.png")}>
                  <h3 className="text-1xl font-semibold text-gray-800 mb-0 md:mb-2 text-center">(3rd/5th/7th/9th/11th Floor Plan)</h3>
                  <div className="rounded-lg shadow-lg overflow-hidden w-full">
                    <img
                      src="/_2bhk_floor.png"
                      alt="3BHK Floor Plan"
                      className="w-full h-auto object-contain cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Fourth Image */}
                <div className="flex flex-col items-center w-full" onClick={() => setSelectedImage("/_2bhk_floor.png")}>
                  <h3 className="text-1xl font-semibold text-gray-800 mb-0 md:mb-2 text-center">(12th Floor Plan)</h3>
                  <div className="rounded-lg shadow-lg overflow-hidden w-full">
                    <img
                      src="/_2bhk_floor.png"
                      alt="3BHK Premium Floor Plan"
                      className="w-full h-auto object-contain cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>

        <section className="project-panel h-screen floor-plan-section relative bg-gray-50 py-6">
          <div className="section-container max-w-5xl mx-auto px-6">
            <h2 className="text-[34px] md:text-5xl font-bold text-center mb:6 md:mb-12 text-[#D2AD75]">
              Isometric View
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#D2AD75] mx-auto mb-2 md:mb-8"></div>
            {/* Image Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 2BHK Floor Plan */}
              <div className="flex flex-col items-center w-full" onClick={() => setSelectedImage("/2bhk_isometric_view.png")}>
                {/* <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">2BHK</h3> */}
                <div className="rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/2bhk_isometric_view.png"
                    alt="Gaurav Euphoria 2BHK floor plan"
                    className="w-[250px] h-[250px] object-fill cursor-pointer md:w-full md:h-auto"
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
                    className="w-[250px] h-[250px] object-fill cursor-pointer md:w-full md:h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-panel h-screen md:h-screen min-h-screen md:min-h-0 content-section pin bg-gradient-to-r from-white via-gray-50 to-gray-100" id="lifestyle">
          <div className="section-container max-w-7xl mx-auto px-4 md:px-6 py-8 text-center">

            {/* Heading */}
            <h2 className="section-title text-3xl sm:text-4xl md:text-6xl font-bold text-[#D2AD75] tracking-wide mb-0 md:mb-6">
              Lifestyle
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-[#D2AD75] mx-auto mt-2 mb-2 md:mb-8 md:mb-10"></div>

            {/* Text Content */}
            <div className="content-text fade-up max-w-3xl mx-auto space-y-0 md:space-y-4">
              <p className="text-gray-700 leading-relaxed text-[11px] sm:text-lg px-2">
                Our team of experienced interior designers and furniture planners brings years of
                expertise, making us a trusted choice for creating luxurious living spaces.
                Each design blends comfort, elegance, and functionality.
              </p>
              <p className="text-gray-700 leading-relaxed text-[11px] sm:text-lg px-2">
                Whether you’re redesigning your living room, planning a new office, or creating your dream kitchen,
                we craft spaces that truly reflect your personality while ensuring cost-effectiveness and precision.
              </p>
            </div>

            {/* Images Layout */}
            <div className="relative w-full max-w-5xl mx-auto h-auto flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 mt-0 mb:mt-6">

              {/* Left Image */}
              <div className="w-[200px] h-[200px]  w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-80 border-2 border-gray-300 shadow-lg">
                <img
                  src="/RAJ06604.JPG"
                  alt="Floor Plan 1"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>

              {/* Right Image */}
              <div className="w-[200px] h-[200px] sm:w-72 md:w-96 h-64 sm:h-72 md:h-80 border-2 border-gray-300 shadow-lg">
                <img
                  src="/RAJ06598.JPG"
                  alt="Floor Plan 2"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>


        <section className="project-panel h-auto md:h-screen content-section pin bg-gradient-to-r from-white via-gray-50 to-gray-100 px-4 sm:px-6 py-6">
          {/* Heading */}
          <h2 className="section-title text-3xl sm:text-4xl md:text-6xl font-bold text-[#D2AD75] tracking-wide text-center mb-0 md:mb-6">
            Specification
          </h2>
            <div className="w-16 sm:w-24 h-1 bg-[#D2AD75] mx-auto mt-2 mb-2 md:mb-8 md:mb-10"></div>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-0">

            {/* Left: Text */}
            <div className="w-full md:w-1/2 space-y-0 md:space-y-6">
              {sections.map((sec, i) => (
                <div key={i}>
                  <h3
                    className="text-[14px] sm:text-2xl font-semibold text-[#D2AD75] mb-0 md:mb-2 cursor-pointer hover:text-amber-600 flex items-center gap-0 md:gap-2"
                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  >
                    <span
                      className={`transform transition-transform duration-300 text-[10px] sm:text-2xl ${activeIndex === i ? "rotate-90" : "rotate-0"}`}
                    >
                      +
                    </span>
                    {sec.title}
                  </h3>

                  {activeIndex === i && (
                    <ul className="list-disc list-inside space-y-0 md:space-y-1 leading-relaxed text-[12px] sm:text-lg pl-2">
                      {sec.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 flex justify-center items-start mt-6 md:mt-0">
              <img
                src="/specifications.png"
                alt="Specification illustration"
                className="w-full max-w-sm sm:max-w-md md:max-w-full h-auto object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>


        <section className="project-panel h-screen relative z-20 px-4 sm:px-6 md:px-24 py-12 sm:py-16 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/carousal-build.jpeg')" }}>
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


                  <div className="mt-8">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">SITE ADDRESS</h3>
                    <p className="mt-2 text-sm sm:text-base">
                      Plot No. 41, Dr. Aulebabu Chowk, <br />
                      Opp. Kali Mandir, Lashkaribagh, <br />
                      Nagpur – 440017.
                    </p>
                    <a href="/contact">
                      <button className="mt-6 sm:mt-8 px-5 py-2 sm:px-6 sm:py-3 border border-white text-white hover:bg-white hover:text-black transition-colors text-sm sm:text-base">
                        Enquire Now
                      </button>
                    </a>
                  </div>
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
            </div>
          </div>
        </section>

      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
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