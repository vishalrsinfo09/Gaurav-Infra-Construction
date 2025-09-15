// src/pages/projects/GauravEuphoriaDetail.jsx
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GalleryLoop from "../../components/GallarySwiper";

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
const interiors = {
  "2BHK": [
    "/5bhk.jpg",
    "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-4.jpg",
  ],
  "3BHK": [
    "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-5.jpg",
    "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-6.jpg",
  ],
};

const GauravEuphoriaDetail=()=> {
  const { projectId } = useParams();
  const project = allProjects[projectId] || allProjects["gaurav-euphoria"];
  const heroImgRef = useRef(null);
  const textRef = useRef(null);
  const galleryRef = useRef(null);
  const imagesRef = useRef([]);
  const [selectedInterior, setSelectedInterior] = useState("2BHK");
  const [activeTab, setActiveTab] = useState("details");

  // GSAP effects
  useEffect(() => {
    if (!project) return;

    // Hero Text Parallax
    // const heroAnim = gsap.to(textRef.current, {
    //   y: -100,
    //   opacity: 0.5,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: textRef.current,
    //     start: "top 80px",
    //     end: "bottom top",
    //     scrub: 1,
    //   },
    // });

    gsap.set(heroImgRef.current, { xPercent: -5 });
    // Hero Image Parallax
    const imgAnim = gsap.to(heroImgRef.current, {
      xPercent: 10, // adjust how much the image moves
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: true,
      },
    });


    // Horizontal Gallery Scroll
    if (galleryRef.current) {
      imagesRef.current = gsap.utils.toArray(
        galleryRef.current.querySelectorAll("img")
      );

      let scrollTween;
      if (imagesRef.current.length > 0) {
        scrollTween = gsap.to(imagesRef.current, {
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


      }

      return () => {
        // heroAnim.kill();
        imgAnim.kill();
        scrollTween?.kill();
      };
    }

    return () => {
      // heroAnim.kill();
      imgAnim.kill();
    };
  }, [project]);
  useEffect(() => {
    if (!galleryRef.current) return;

    // Collect current interior images
    imagesRef.current = gsap.utils.toArray(
      galleryRef.current.querySelectorAll("img")
    );

    if (imagesRef.current.length === 0) return;

    // GSAP timeline for auto-scroll + scroll-trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top top",
        end: () =>
          `+=${galleryRef.current.scrollWidth - galleryRef.current.offsetWidth}`,
        scrub: 1,
        pin: true,
      },
    });

    // Scroll horizontally as user scrolls
    tl.to(imagesRef.current, {
      xPercent: -100 * (imagesRef.current.length - 1),
      ease: "none",
    });

    // Auto scroll animation
    const autoScroll = gsap.to(imagesRef.current, {
      xPercent: -100 * (imagesRef.current.length - 1),
      duration: imagesRef.current.length * 3, // adjust speed here
      repeat: -1,
      ease: "linear",
    });

    return () => {
      tl.kill();
      autoScroll.kill();
    };
  }, [selectedInterior]);

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
    if (!window.lifestyleMasonry) return;

    const el = window.lifestyleMasonry;
    let tween = gsap.to(el, {
      scrollLeft: el.scrollWidth - el.clientWidth,
      duration: 20,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });

    // अगर user manually scroll करे → auto scroll pause हो
    const stopScroll = () => tween.pause();
    const resumeScroll = () => tween.resume();

    el.addEventListener("mouseenter", stopScroll);
    el.addEventListener("mouseleave", resumeScroll);

    return () => {
      tween.kill();
      el.removeEventListener("mouseenter", stopScroll);
      el.removeEventListener("mouseleave", resumeScroll);
    };
  }, []);





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
        className="relative flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-20 py-16 mt-24"
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


      <section className="content-section pin bg-gray-50" id="architecture">
        <div className="section-container max-w-7xl mx-auto px-6 py-24">
          <h2 className="section-title text-5xl md:text-6xl font-serif font-bold mb-14 text-[#D2AD75] tracking-wide">
            Architecture
          </h2>

          <div className="section-content grid md:grid-cols-2 gap-16 items-center">
            {/* Left Text */}
            <div className="content-text fade-up">
              {/* <div className="text-6xl font-bold text-[#D2AD75] mb-6">02</div> */}
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

            {/* Right Images */}
            <div className="content-images fade-left grid grid-cols-1 gap-6">
              <img
                src="/arch.jpg"
                alt="Gaurav Euphoria modern facade"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <img
                src="/architectural.jpg"
                alt="Gaurav Euphoria balcony and terrace"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>




      {/* Floor Plan Section */}
      <section className="floor-plan-section relative py-20 bg-gray-50">
        <div className="section-container max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Floor Plan
          </h2>

          {/* Image Container */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/5bhk.jpg"
              alt="Gaurav Euphoria 5BHK floor plan"
              className="w-full h-auto object-cover transform transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="content-section pin bg-gradient-to-r from-white via-gray-50 to-gray-100" id="lifestyle">
        <div className="section-container max-w-7xl mx-auto px-6 py-24 text-center">

          {/* Heading */}
          <h2 className="section-title text-5xl md:text-6xl font-serif font-bold text-[#D2AD75] tracking-wide">
            Lifestyle
          </h2>
          <div className="w-24 h-1 bg-[#D2AD75] mx-auto mt-4 mb-10"></div>

          {/* Text Content */}
          <div className="content-text fade-up max-w-3xl mx-auto">
            {/* <div className="text-6xl font-bold text-[#D2AD75] mb-6">03</div> */}
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
              Our team of experienced interior designers and furniture planners brings years of
              expertise, making us a trusted choice for creating luxurious living spaces.
              Each design blends comfort, elegance, and functionality.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
              Whether you’re redesigning your living room, planning a new office, or creating your dream kitchen,
              we craft spaces that truly reflect your personality while ensuring cost-effectiveness and precision.
            </p>
          </div>


          {/* Masonry Grid Below */}
          <div className="relative">
            {/* Arrows */}
            <button
              onClick={() => window.lifestyleMasonry.scrollBy({ left: -400, behavior: "smooth" })}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10"
            >
              ←
            </button>
            <button
              onClick={() => window.lifestyleMasonry.scrollBy({ left: 400, behavior: "smooth" })}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10"
            >
              →
            </button>

            <div
              className="mt-16 flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
              ref={(el) => (window.lifestyleMasonry = el)}
            >
              {/* Column 1 */}
              <div className="flex flex-col gap-6 w-1/3">
                <img src="/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-1.jpg" className="w-full h-auto shadow-lg" />
                <img src="/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-2.jpg" className="w-full h-auto shadow-lg" />
              </div>
              {/* Column 2 */}
              <div className="flex flex-col gap-6 w-1/3">
                <img src="/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-6.jpg" className="w-full h-auto shadow-lg" />
              </div>
              {/* Column 3 */}
              <div className="flex flex-col gap-6 w-1/3">
                <img src="/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-8.jpg" className="w-full h-auto shadow-lg" />
                <img src="/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-9.jpg" className="w-full h-auto shadow-lg" />
              </div>
            </div>
          </div>




        </div>
      </section>

      <GalleryLoop />



      {/* <div className="h-60 md:h-62"></div> */}

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
                className={`py-4 px-2 md:px-8 uppercase font-semibold transition-colors duration-300 ${activeTab === tab.id
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

            {/* {activeTab === "amenities" && (
              <div className="text-center py-8">
                <h2 className="text-3xl font-bold mb-4">AMENITIES</h2>
                <p>Double height entrance lobby ... etc.</p>
              </div>
            )} */}
            {activeTab === "amenities" && (
              <section className="content-section pin" id="amenities">
                <div className="section-container">
                  <h2 className="section-title anim">Amenities</h2>
                  <div className="section-content">
                    <div className="content-text anim">
                      <div className="text-6xl font-bold text-[#D2AD75] mb-4">04</div>
                      <p className="mb-6">
                        Luxury living is made even more enjoyable with flat amenities. Residents of flats can enjoy
                        a range of conveniences and features designed to make life easier and more enjoyable. With
                        considering everyone's safety and placement of the flat we have implemented East Facing flat
                        Vastu for both 3BHK, 4BHK & 5BHK plans.
                      </p>
                      <p className="mb-6">
                        Some of the most popular flat amenities include a common rooftop Gym, Garden, and Jogging Track,
                        Hydraulic car parking with E-Vehicle charging point, car washing area, service elevator and many more.
                      </p>
                    </div>
                    <div className="content-images anim">
                      <img
                        src="/architectural.jpg"
                        alt="Gaurav Euphoria rooftop"
                        className="content-image"
                      />
                      <img
                        src="/arch.jpg"
                        alt="Gaurav Euphoria event hall"
                        className="content-image"
                      />
                    </div>
                  </div>
                </div>
              </section>

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

      <section className="bg-white py-12">
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
              className={`px-6 py-2 rounded-lg font-semibold transition-colors
          ${selectedInterior === type ? "bg-amber-600 text-white" : "bg-gray-200 text-gray-800"}`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Gallery for Selected Interior */}
        <div className="gallery-container relative w-full overflow-hidden" ref={galleryRef}>
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
        </div>
      </section>


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