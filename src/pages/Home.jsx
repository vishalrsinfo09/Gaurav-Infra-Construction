import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import WhatsAppChat from '../components/WhatsAppChat';
import ProgressBar from '../components/ProgressBar';
// import { ArrowDown, Building, Users, Award, Shield, Car, Dumbbell, Wifi, Camera } from 'lucide-react';
import Carousel from "../components/Carousel";
import ParallaxOverlaySection from '../components/parallaxOverlaySection';
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Testimonials from "../components/Testimonials";


// const container = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.02, // speed between characters
//     },
//   },
// };

// const char = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.10 } },
// };
// const sentence = "Discover luxury living in the heart of Nagpur. Premium 2BHK and 3BHK apartments with modern amenities and timeless elegance.";


const Home = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // const amenities = [
  //   {
  //     icon: <Building />,
  //     title: "Premium Architecture",
  //     description: "Contemporary design with traditional Indian elements"
  //   },
  //   {
  //     icon: <Shield />,
  //     title: "24/7 Security",
  //     description: "Round-the-clock security with CCTV surveillance"
  //   },
  //   {
  //     icon: <Car />,
  //     title: "Parking & Car Wash",
  //     description: "Covered parking with professional car washing service"
  //   },
  //   {
  //     icon: <Dumbbell />,
  //     title: "Fitness Center",
  //     description: "Modern gymnasium with latest equipment"
  //   },
  //   {
  //     icon: <Users />,
  //     title: "Community Hall",
  //     description: "Spacious hall for events and gatherings"
  //   },
  //   {
  //     icon: <Wifi />,
  //     title: "High-Speed Internet",
  //     description: "Fiber optic connectivity throughout the building"
  //   }
  // ];

  return (
    <div className="wrapper">
      <ProgressBar />
      <Navigation />
      <WhatsAppChat />

      <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 -z-0">
          <Carousel />
        </div>

        {/* Foreground Content */}
        <div className="relative max-w-3xl px-8 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-cyan-400 via-white to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
            Gaurav Infra
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white">
            Experience luxury living with our premium 2BHK & 3BHK apartments in the heart of Nagpur. Modern amenities, traditional values, and uncompromising quality.
          </p>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-100 text-sm flex flex-col items-center gap-2 animate-bounce">
          <span>Scroll Down</span>
          <ArrowDown />
        </div> */}
      </section>


      <section className="relative py-28 text-center bg-gradient-to-br ">
        <div className="max-w-4xl mx-auto px-6">

          {/* Luxury Heading */}
          <motion.h2
            className="text-6xl md:text-7xl font-serif font-extrabold mb-6 
                text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            Welcome to Gaurav Infra
          </motion.h2>

          {/* Description */}
          {/* <motion.p
      className="text-lg md:text-xl lg:text-2xl text-[#C6C6C6] mb-8 leading-relaxed "
      style={{ backgroundImage: "url('/chandi.jpg')" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {sentence.split(" ").map((word, i) => (
        <motion.span key={i} variants={char} className="inline-block mr-1">
          {word}
        </motion.span>
      ))}
    </motion.p> */}

          {/* Gold underline accent */}
          <span className="block w-40 h-1 mx-auto bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 rounded-full shadow-md"></span>
        </div>
      </section>



      {/* About Section */}
      <section className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side: Image */}
        <div className="md:w-1/2">
          <img
            src="carousal-build3.jpeg"
            alt="Gaurav Square"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Text */}
        <div className="md:w-1/2 flex flex-col justify-center p-8 bg-gray-400">
          <h3
            className="text-3xl md:text-4xl  font-extrabold mb-6 
                 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white 
                 bg-clip-text text-transparent drop-shadow-2xl tracking-wide mx-auto"
          >
            Your Dream Place Awaits
          </h3>

          <p className="mb-4 text-lg md:text-xl max-w-3xl leading-relaxed text-gray-900 font-light drop-shadow-lg">
            Gaurav Infra is proud to present <span className="font-semibold">Gaurav Square</span>,
            a premium commercial destination designed to give your business a new identity.
            This landmark project brings together modern architecture and strategic location
            to create the perfect synergy for growth.
          </p>

          <p className="mb-6 text-lg md:text-xl max-w-3xl leading-relaxed text-gray-900 font-light  drop-shadow-lg">
            Located on a prime road-touch site with seamless connectivity across the city,
            Gaurav Square ensures your business stays connected and accessible.
            Offering smartly planned spaces for diverse business needs, it provides
            an environment where success finds its true address.
          </p>

          <span className="block w-32 h-1 mx-auto bg-gradient-to-r from-yellow-500 via-yellow-300 to-white rounded-full mt-6"></span>
        </div>
      </section>




      {/* Architecture Section */}
      <section className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side: Text */}
        <div className="md:w-1/2 flex flex-col justify-center p-8 bg-gray-400">
          <h3 className="text-3xl md:text-4xl  font-extrabold mb-6 
                 bg-gradient-to-r from-yellow-400 via-yellow-200 to-white 
                 bg-clip-text text-transparent drop-shadow-2xl tracking-wide mx-auto" > Architectural Excellence </h3>
          <p className="mb-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-black/90 font-light drop-shadow-lg text-left">
            There are too many options for homes, but every home is not a luxurious home. Luxury cannot be described, it has to be experienced.
            Experience it first, at the finest residential project <strong>"Gaurav Euphoria"</strong> developed by Gaurav Infra at the prime location of the city.
          </p>

          <p className="mb-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-black/90 font-light drop-shadow-lg text-left">
            It offers 2 & 3 spacious bed rooms with proper ventilation and sunlight. A large living room along with entrance foyer. Big kitchen with separate dining space. Balcony / terrace to every room. Thoughtful planning, stylish design, quality construction and peaceful surroundings make <strong>"Gaurav Euphoria"</strong> a more prestigious and beautiful place to live.
          </p>

          <p className="mb-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-black/90 font-light drop-shadow-lg text-left">
            The additional advantage of the project is its location. You can easily access many things like Shopping Mall, Inox, Metro Station, Hospital, Petrol Pump, ATM etc. within walking distance.
            <strong>"Gaurav Euphoria"</strong> is the perfect place to live a luxurious life, that you can call a dream home.
          </p>

          {/* Accent underline */}
          <span className="block w-32 h-1 mx-auto bg-gradient-to-r from-yellow-500 via-yellow-300 to-white rounded-full mt-6"></span> </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-end">
          <img
            src="parallax_build2.jpeg"
            alt="Building"
            className="w-full h-full object-cover"
          />
        </div>
      </section>



      {/* Number of Projects Section */}
      <section className="relative bg-gradient-to-r from-gray-50 via-white to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <motion.h2
            className="text-5xl font-extrabold text-gray-900 mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Achievements
            </span>
          </motion.h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { number: 5, suffix: "+", text: "Completed Projects" },
              { number: 150000, suffix: "+", text: "Area Delivered In Square Feet" },
              { number: 300, suffix: "+", text: "Happy Clients" },
              // { number: 8, suffix: "+", text: "Ongoing Projects" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                {/* Animated Number */}
                <h3 className="text-5xl font-extrabold text-gray-900">
                  <CountUp end={item.number} duration={2} enableScrollSpy />{item.suffix}
                </h3>

                {/* Description */}
                <p className="text-gray-600 italic mt-3 text-lg relative inline-block">
                  {item.text}
                  <motion.span
                    className="block w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "4rem" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  />
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Lifestyle Section with space above */}
      <div className="mt-16 "> {/* Adds white space above */}
        <ParallaxOverlaySection bgImage="luxurious.jpg">
          <h3 className="text-3xl font-bold mb-4 text-center">Luxury Lifestyle Redefined</h3>
          <p className="mb-2">
            At Gaurav Infra, we understand that luxury is about more than just beautiful interiors. It's about creating a lifestyle that enhances your daily experiences and brings joy to every moment spent at home.
          </p>
          <p className="mb-2">
            Our experienced interior designers work closely with residents to create personalized living spaces that reflect individual tastes and preferences.
          </p>
          <p>
            The building offers exclusive amenities including a rooftop garden, a modern fitness center, and elegant community spaces for social gatherings.
          </p>
        </ParallaxOverlaySection>
      </div>





      {/* Amenities Section */}
      {/* <section className="section bg-premium-light">
        <div className="section-title">
          <h2>World-Class Amenities</h2>
          <p>Every convenience you need for a comfortable, luxurious lifestyle</p>
        </div>
        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-card">
              <div className="amenity-icon">
                {amenity.icon}
              </div>
              <h4>{amenity.title}</h4>
              <p>{amenity.description}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Gallery Preview */}
      {/* <section className="gallery-preview">
        <div className="section-title">
          <h2>Visual Gallery</h2>
          <p>Explore our beautiful spaces and amenities</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img
              src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Modern kitchen with island and premium appliances"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <Camera />
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Spacious master bedroom with luxury furnishing"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <Camera />
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Building exterior with modern architecture"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <Camera />
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Luxury bathroom with modern fixtures"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <Camera />
            </div>
          </div>
        </div>
      </section> */}
      <Testimonials />



    </div>
  );
};

export default Home;