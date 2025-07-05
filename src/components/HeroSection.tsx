
"use client";
import React from 'react';
import { motion } from "framer-motion";

interface HeroSectionProps {
  tilref: React.RefObject<HTMLHeadingElement | null>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ tilref }) => {
  return (
    <>
      <div className="center px-10 py-8 h-[80vh] flex w-full">
        <div className="centerpart1 h-[100%] w-[44%]">
          <h1
            ref={tilref}
            className="text-[5vw] gs font-semibold leading-none capitalize"
          >
            Navigating the digital landscape for sucess
          </h1>
          <p className="text-2xl mt-12 mb-8 gs font-medium w-[95%] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Inventore tempora doloremque ipsum, dicta esse ratione id vel
            corrupti veniam ducimus?
          </p>
          <button className="bg-black cursor-pointer g text-white border-2 py-5 px-10 text-2xl font-semibold hover-effect">
            Book a consultation
          </button>
        </div>
        <div className="centerpart2 relative h-[100%] w-[56%]">
          <img
            src="https://neodrafts.com/_astro/hero12.Wth7asPL_ZjRIO9.svg"
            className="h-[100%] absolute right-0 hero-image"
            alt="Hero illustration"
          />
        </div>
      </div>
      <div className="section1bottom overflow-hidden py-8 px-0 relative">
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 h-full w-24 z-10" 
             style={{ background: 'linear-gradient(to right, rgba(255, 248, 231, 1) 0%, rgba(255, 248, 231, 0) 100%)' }}>
        </div>
        
        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 h-full w-24 z-10" 
             style={{ background: 'linear-gradient(to left, rgba(255, 248, 231, 1) 0%, rgba(255, 248, 231, 0) 100%)' }}>
        </div>
        
        <div className="marquee-wrapper w-full">
          <motion.div 
            className="marquee flex items-center gap-16 px-20" 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }} 
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {/* First set of logos */}
            <img className="h-14" src="https://neodrafts.com/_astro/Stack@1-4.Bf33ViW9.png" alt="Partner logo 1" />
            <img className="h-14" src="https://neodrafts.com/_astro/Stack@1-2.Dv6tSWqm.png" alt="Partner logo 2" />
            <img className="h-14" src="https://neodrafts.com/_astro/Stack@1-12.CzbcZjeo.png" alt="Partner logo 3" />
            <img className="h-14" src="https://neodrafts.com/_astro/Stack@1-4.Bf33ViW9.png" alt="Partner logo 4" />
            <img className="h-14" src="https://neodrafts.com/_astro/Stack@1-2.Dv6tSWqm.png" alt="Partner logo 5" />
            
            {/* Duplicate set for seamless looping */}
            <img className="h-14" src="https://neodrafts.com/_astro/Stack@1-4.Bf33ViW9.png" alt="Partner logo 1" />
            <img className="h-14" src="https://neodrafts.com/_astro/Stack@1-2.Dv6tSWqm.png" alt="Partner logo 2" />
            <img className="h-14" src="https://neodrafts.com/_astro/Stack@1-12.CzbcZjeo.png" alt="Partner logo 3" />
            <img className="h-14" src="https://neodrafts.com/_astro/Stack@1-4.Bf33ViW9.png" alt="Partner logo 4" />
            <img className="h-14" src="https://neodrafts.com/_astro/Stack@1-2.Dv6tSWqm.png" alt="Partner logo 5" />
            {/* Duplicate set for seamless looping */}
            <img className="h-14" src="https://neodrafts.com/_astro/Stack@1-4.Bf33ViW9.png" alt="Partner logo 1" />
            <img className="h-14" src="https://neodrafts.com/_astro/Stack@1-2.Dv6tSWqm.png" alt="Partner logo 2" />
            <img className="h-14" src="https://neodrafts.com/_astro/Stack@1-12.CzbcZjeo.png" alt="Partner logo 3" />
            <img className="h-14" src="https://neodrafts.com/_astro/Stack@1-4.Bf33ViW9.png" alt="Partner logo 4" />
            <img className="h-14" src="https://neodrafts.com/_astro/Stack@1-2.Dv6tSWqm.png" alt="Partner logo 5" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
