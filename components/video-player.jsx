"use client";
import { Pause, Play, StopCircle } from "lucide-react"; // Import StopCircle icon
import { useState, useRef, useEffect } from "react";

const VideoPlayer = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false); // Initially hide controls
  const [progress, setProgress] = useState(0); // Video progress state
  const videoRef = useRef(null);

  // Toggle play/pause functionality
  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Stop the video and reset to the beginning
  const stopVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // Reset video time to 0
    setIsPlaying(false);
    setProgress(0); // Reset progress
  };

  // Update the progress bar as the video plays
  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        setProgress(
          (videoRef.current.currentTime / videoRef.current.duration) * 100
        );
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Handle slider change
  const handleSliderChange = (e) => {
    const newTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowControls(true)} // Show controls on hover
      onMouseLeave={() => setShowControls(false)} // Hide controls when not hovering
    >
      <video
        ref={videoRef}
        src={videoSrc}
        alt="video"
        width={1200}
        height={1200}
        onClick={togglePlayPause}
        className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border"
      />
      {showControls && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <button
            onClick={togglePlayPause}
            className="p-2 rounded-full cursor-pointer z-99 bg-slate-300/40"
          >
            {!isPlaying ? <Play /> : <Pause />}
          </button>
        </div>
      )}

      {showControls && (
        <div className="absolute bottom-0 w-full px-4 z-50">
          <input
            type="range"
            value={progress}
            max="100"
            onChange={handleSliderChange}
            className="w-full h-1 bg-gray-400 rounded-lg cursor-pointer"
          />
        </div>
      )}

      {showControls && (
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={stopVideo}
            className="p-2 rounded-full cursor-pointer z-99"
          >
            <StopCircle />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
