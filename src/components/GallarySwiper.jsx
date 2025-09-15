import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const GallerySection = () => {
  const images = [
    "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-8.jpg",
    "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-9.jpg",
    "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-10.jpg",
    "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-11.jpg",
    "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-12.jpg",
  ];

  // Group images in sets of 3
  const slides = [];
  for (let i = 0; i < images.length; i += 3) {
    slides.push(images.slice(i, i + 3));
  }

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Infinite and Blissful</h2>
      <p className="gallery-subtitle">World Class Living</p>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={3000}
        allowTouchMove={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((group, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gridTemplateRows: "repeat(2, 1fr)",
                gap: "20px",
                height: "600px",
                width: "100%",
              }}
            >
              {group[0] && (
                <img
                  src={group[0]}
                  style={{
                    gridRow: "1 / span 2",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt=""
                />
              )}
              {group[1] && (
                <img
                  src={group[1]}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt=""
                />
              )}
              {group[2] && (
                <img
                  src={group[2]}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt=""
                />
              )}
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