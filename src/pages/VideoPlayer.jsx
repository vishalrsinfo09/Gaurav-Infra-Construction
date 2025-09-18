import React, { useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const VideoPlayer = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef(null);

  // Video configurations
  const videoConfig = {
    "2bhk": {
      title: "2 BHK Sample Flat Video",
      src: "/2BHKvideo.mp4",
    },
    "3bhk": {
      title: "3 BHK Sample Flat Video",
      src: "/3BHKvideo.mp4",
    },
  };

  const currentVideo = videoConfig[type];

  // Back button
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      window.history.back();
    }
  };

  // Auto fullscreen + speed
  useEffect(() => {
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          videoRef.current.playbackRate = 0.50; 
          await videoRef.current.play();
          if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
          }
        } catch (err) {
          console.log("Autoplay blocked:", err);
        }
      };
      playVideo();
    }
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!videoRef.current) return;

      if (e.key === "ArrowRight") {
        videoRef.current.currentTime += 5; 
      }
      if (e.key === "ArrowLeft") {
        videoRef.current.currentTime -= 5; 
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Update progress bar
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percent =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percent);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Back Button */}
      <header className="absolute top-4 left-4 z-20">
        <button
          onClick={handleBack}
          className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg text-white"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
      </header>

      {/* Video */}
      <video
        ref={videoRef}
        src={currentVideo.src}
        autoPlay
        loop
        muted={true}
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-screen object-cover"
      />
    </div>
  );
};

export default VideoPlayer;
