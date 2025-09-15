import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; // ✅ remove Loop
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
        "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-13.jpg",
        "/Interior/3 BHK Sample Flat @ Gaurav Euphoria Photos-images-14.jpg",
    ];

    return (
        <section className="gallery-section">
            <h2 className="gallery-title">Infinite and Blissful</h2>
            <p className="gallery-subtitle">World Class Living</p>

            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={3}
                // navigation
                loop={true}
                autoplay={{
                    delay: 0,           // no delay between slides
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                speed={3000}          // higher speed for smooth scrolling
                allowTouchMove={true} // optional: prevent manual dragging
                grabCursor={true}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >

                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "2fr 1fr",
                                gridTemplateRows: "repeat(2, 1fr)",
                                gap: "20px",
                                height: "600px",
                                width:"100%" // adjust as needed
                            }}
                        >
                            <img
                                src={img}
                                style={{ gridRow: "1 / span 2", width: "100%", height: "100%", objectFit: "cover" }}
                                alt=""
                            />
                            <img
                                src={images[(index + 1) % images.length]}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                alt=""
                            />
                            <img
                                src={images[(index + 2) % images.length]}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                alt=""
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
        .gallery-card {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        .gallery-card img {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }
        .gallery-card img:hover {
          transform: scale(1.05);
        }
      `}</style>
        </section>
    );
};

export default GallerySection;
