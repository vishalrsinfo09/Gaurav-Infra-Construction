import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

const VideoPlayer = () => {
  const { type } = useParams(); // Get video type from URL
  const navigate = useNavigate();
  const videoRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  // Video configurations
  const videoConfig = {
    '2bhk': {
      title: '2 BHK Sample Flat Video',
      src: '/video/2 BHK Sample Flat Video @ Gaurav Euphoria.mp4',
      description: 'Experience the spacious and elegant 2 BHK apartment design'
    },
    '3bhk': {
      title: '3 BHK Sample Flat Video',
      src: '/video/3 BHK Sample Flat @ Gaurav Euphoria, Nagpur.mp4',
      description: 'Discover the luxurious and premium 3 BHK apartment layout'
    }
  };

  const currentVideo = videoConfig[type];

  // Back button handler
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // React Router way
    } else {
      window.history.back(); // Browser history way
    }
  };

  // Video control functions
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  // Format time helper
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.code) {
        case 'Space':
          e.preventDefault();
          togglePlay();
          break;
        case 'KeyM':
          toggleMute();
          break;
        case 'KeyF':
          toggleFullscreen();
          break;
        case 'Escape':
          handleBack();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, isMuted]);

  // Fullscreen change handler
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header with Back Button */}
      <header className="bg-black bg-opacity-80 p-4 pb-0 flex items-center justify-between text-white relative z-10">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <div>
            <h1 className="text-xl font-bold">{currentVideo.title}</h1>
            {/* <p className="text-gray-300 text-sm">{currentVideo.description}</p> */}
          </div>
        </div>
      </header>

      {/* Video Container */}
      <div className="items-center justify-center bg-black">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full rounded-lg shadow-2xl"
            style={{height:'521px'}}
            src={currentVideo.src}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onClick={togglePlay}
          />

          {/* Custom Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 rounded-b-lg">
            {/* Progress Bar */}
            <div 
              className="w-full h-2 bg-gray-600 rounded-full mb-4 cursor-pointer"
              onClick={handleSeek}
            >
              <div 
                className="h-full bg-cyan-500 rounded-full transition-all duration-200"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-4">
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  className="bg-cyan-600 hover:bg-cyan-700 p-2 rounded-full transition-colors duration-300"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>

                {/* Volume Controls */}
                <div className="flex items-center space-x-2">
                  <button onClick={toggleMute} className="hover:text-cyan-300 transition-colors">
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-20 accent-cyan-500"
                  />
                </div>

                {/* Time Display */}
                <span className="text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {/* Right Side Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleFullscreen}
                  className="hover:text-cyan-300 transition-colors"
                >
                  {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Loading/Paused Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
              <button
                onClick={togglePlay}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-8 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Play size={48} fill="white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
