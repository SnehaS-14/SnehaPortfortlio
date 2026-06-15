import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Adjusted import path for the video
import heroVideo from '../assets/hero video/Software_engineer_speaking_intro_202606150841.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (videoRef.current) {
        if (mobile) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    if (isMobile && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.muted = false;
        videoRef.current.play();
        setIsPlaying(true);
        setIsMuted(false);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        autoPlay={isMobile}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end text-left w-full">

        {/* Mobile Play Button - Positioned at Right Side */}
        {isMobile && (
          <div className="absolute bottom-12 right-6 flex flex-col items-center gap-2 cursor-pointer group z-30" onClick={toggleVideo}>
            <div className="w-16 h-16 rounded-full border-2 border-white/40 bg-black/30 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] group-hover:border-white transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_50px_rgba(255,42,42,0.7)]">
              {!isPlaying || isMuted ? (
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </div>
            <span className="text-white text-xs font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
              {!isPlaying || isMuted ? "PLAY" : "PAUSE"}
            </span>
          </div>
        )}

        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left w-full md:max-w-2xl md:w-auto pt-4 md:pt-0">
          {/* Main Heading */}
          <h1
            data-aos="fade-up"
            className="text-white text-xl md:text-5xl font-bold mb-1 md:mb-4 tracking-tight leading-tight"
          >
            Hi, I’m Sneha S
          </h1>

          <h2 className="text-white text-lg md:text-4xl font-bold mb-4 md:mb-8 tracking-tight line-clamp-1">
            Full Stack Engineer
          </h2>

          {/* Subheading */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-xs md:text-base font-semibold mb-4 md:mb-8 max-w-xs md:max-w-sm drop-shadow-md leading-relaxed"
          >
            I build fast, scalable and modern web applications using React, Node.js and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-2 md:gap-3 w-full"
          >
            {/* Primary Button */}
            <button className="px-3 py-2 md:px-6 md:py-2 text-[11px] md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md whitespace-nowrap">
              View My Work
            </button>

            {/* Secondary Button - Glassmorphism style */}
            <button className="px-3 py-2 md:px-6 md:py-2 text-[11px] md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md whitespace-nowrap">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side: Play Button (Desktop Only) */}
        {!isMobile && (
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="flex flex-col items-center gap-3 cursor-pointer group self-auto"
            onClick={toggleVideo}
          >
            <div className="w-20 h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
              {!isPlaying || isMuted ? (
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </div>
            <span className="text-white text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              {!isPlaying || isMuted ? "Play Reel" : "Pause"}
            </span>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
