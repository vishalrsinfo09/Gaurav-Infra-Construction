import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rohit Prajapati",
    designation: "Doctor",
    message:
      "Gaurav Infra has redefined luxury living for me. The apartments are spacious, Vastu-compliant, and the amenities are world-class. Truly a dream home!",
    image: "/testimonials/test2.jpg",
  },
  {
    name: "Sneha Meshram",
    designation: "Business Owner",
    message:
      "From planning to possession, the experience has been seamless. The interiors are stunning, and the community vibe is warm and welcoming.",
    image: "/testimonials/test1.jpg",
  },
  {
    name: "Amruta Deshmukh",
    designation: "Entrepreneur",
    message:
      "The quality of construction and attention to detail is unmatched. I highly recommend Gaurav Infra to anyone looking for a luxurious home in Nagpur.",
    image: "/testimonials/test4.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hear From Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
            Happy Residents
          </span>
        </motion.h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          speed={1000}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                //  initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <p className="text-gray-700 italic text-lg mb-6">
                  "{item.message}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-blue-500 transition-transform duration-500 ease-in-out hover:scale-125"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h4>
                    <p className="text-gray-500">{item.designation}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
