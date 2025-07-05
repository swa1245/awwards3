"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import * as framerMotion from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";

// Create motion components
const Motion = framerMotion.motion;
const { useScroll, useTransform } = framerMotion;

type Props = {};

const page = (props: Props) => {
  const tilref = useRef<HTMLHeadingElement>(null);
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const elemRefs = useRef<HTMLDivElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionRef: React.RefObject<HTMLElement | null>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // For Framer Motion scroll animations
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  
  useEffect(() => {
    // Enable smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll event listener to show/hide scroll-to-top button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Add CSS for animations that were previously handled by Framer Motion
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      .hover-effect:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease, background-color 0.3s ease;
      }
      .hover-effect:active {
        transform: scale(0.95);
      }
      button.hover-effect:hover {
        background-color: #B9FF66;
      }
      button.bg-black.hover-effect:hover {
        background-color: #333;
      }
      .star-rotate {
        animation: rotate 3s linear infinite;
      }
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .hero-image {
        animation: fadeInRight 0.8s ease-out 0.5s both;
      }
      @keyframes fadeInRight {
        from { opacity: 0; transform: translateX(100px); }
        to { opacity: 1; transform: translateX(0); }
      }
      .hero-image:hover {
        transform: scale(1.02);
        transition: transform 0.3s ease;
      }
      .fade-in-section {
        opacity: 0;
        transition: opacity 0.8s ease;
      }
      .fade-in-section.visible {
        opacity: 1;
      }
      .service-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .service-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 25px 0 black;
      }
      .learn-more-link:hover {
        transform: translateX(5px);
        transition: transform 0.3s ease;
      }
      .arrow-icon {
        animation: moveX 1.5s infinite ease-in-out;
      }
      @keyframes moveX {
        0% { transform: translateX(0); }
        50% { transform: translateX(5px); }
        100% { transform: translateX(0); }
      }
      .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        z-index: 1000;
        transform: translateY(20px);
      }
      .scroll-to-top.visible {
        opacity: 1;
        transform: translateY(0);
      }
      .scroll-to-top:hover {
        background-color: rgba(0, 0, 0, 0.9);
        transform: translateY(-5px);
      }
    `;
    document.head.appendChild(style);
    
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const fadeSection = document.querySelector('.fade-in-section');
    if (fadeSection) {
      observer.observe(fadeSection);
    }
    // Register ScrollTrigger plugin
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    // Initial animations
    const tl = gsap.timeline();
    
    // Header animations
    tl.from(gsap.utils.toArray(".gsap"), {
      y: -30,
      opacity: 0,
      delay: 0.3,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out"
    });
    
    // Main content animations
    tl.from(gsap.utils.toArray(".gs"), {
      x: -100,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
      ease: "back.out(1.7)"
    }, "-=0.3");
    
    // Button animation
    tl.from(gsap.utils.toArray(".g"), {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    }, "-=0.2");
    
    // Image reveal animation
    tl.from(".centerpart2 img", {
      opacity: 0,
      x: 100,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");
    
    // Bottom logos animation
    tl.from(".section1bottom img", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power1.out"
    }, "-=0.3");
    
    // Section 2 scroll animations
    if (section2Ref.current) {
      gsap.from(".services h3", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none"
        }
      });
      
      gsap.from(".services p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none"
        }
      });
    }
    
    // Service cards staggered animation
    elemRefs.current.forEach((elem, index) => {
      if (elem) {
        gsap.from(elem, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            end: "top 70%",
            toggleActions: "play none none none"
          }
        });
      }
    });
    
    setIsLoaded(true);
    
    // Cleanup function
    return () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        // Reset scroll behavior
        document.documentElement.style.scrollBehavior = '';
        // Remove scroll event listener
        window.removeEventListener('scroll', handleScroll);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div className="main-container">
      <section ref={section1Ref} id="home" className="section1 min-h-screen w-full relative bg-amber-50">
        <Navbar 
          scrollToSection={scrollToSection} 
          section1Ref={section1Ref} 
          section2Ref={section2Ref} 
        />
        <HeroSection tilref={tilref} />
      </section>
      
      <ServicesSection 
        section2Ref={section2Ref}
        elemRefs={elemRefs}
      />

      {/* Scroll to top button */}
      <div 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={() => scrollToSection(section1Ref)}
      >
        <FaArrowUp />
      </div>
    </div>
  );
};

export default page;
