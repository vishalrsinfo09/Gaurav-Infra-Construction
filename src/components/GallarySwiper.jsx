import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const GallerySection = () => {
  const images = [
    "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-1.jpg",
    "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-2.jpg",
    "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-10.jpg",
    "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-11.jpg",
    "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-12.jpg",
  ];

  return (
    <section className="gallery-section">
      {/* <h2 className="gallery-title">Infinite and Blissful</h2> */}
      {/* <p className="gallery-subtitle ">World Class Living</p> */}

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={10000}
        grabCursor={true}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr", // left stacked small, right big
                gap: "10px",
                height: "600px",
                width: "100%",
              }}
            >
              {/* Left: 2 small images stacked vertically */}
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: "1fr 1fr",
                  gap: "10px",
                }}
              >
                <img
                  src={img}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                />
                <img
                  src={images[(index + 1) % images.length]}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                />
              </div>

              {/* Right: 1 big image */}
              <img
                src={images[(index + 2) % images.length]}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .gallery-section {
          padding: 4rem 1rem;
          text-align: center;
          background: #f8f9fa;
        }
        .gallery-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .gallery-subtitle {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 2rem;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;