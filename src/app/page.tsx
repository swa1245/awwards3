"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowAltCircleRight, FaArrowUp } from "react-icons/fa";
import * as framerMotion from "framer-motion";

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
        <nav className="flex items-center justify-between px-10 py-8">
          <h1 className="text-5xl font-bold flex gap-4 gsap">
            {" "}
            <div className="star-rotate">
              <FaStar className="-rotate-45" />
            </div> WizardZ
          </h1>
          <div className="part2 flex items-center justify-center gap-20">
            <h4 className="text-lg font-serif gsap cursor-pointer" onClick={() => scrollToSection(section1Ref)}>Home</h4>
            <h4 className="text-lg font-serif gsap cursor-pointer" onClick={() => scrollToSection(section2Ref)}>Services</h4>
            <h4 className="text-lg font-serif gsap cursor-pointer">Use Cases</h4>
            <h4 className="text-lg font-serif gsap cursor-pointer">Blog</h4>
            <button className="px-3 py-2 font-mono cursor-pointer gsap bg-white rounded-md border-1 border-b-gray-950 hover-effect">
              Request a quote
            </button>
          </div>
        </nav>
        <div className="center px-10 py-8  h-[80vh] flex w-full">
          <div className="centerpart1  h-[100%] w-[44%]">
            <h1
              ref={tilref}
              className="text-[5vw] gs font-semibold leading-none capitalize  "
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
              alt=""
            />
          </div>
        </div>
        <div className="section1bottom flex items-center justify-between py-8 px-20">
          <img
            className="h-14"
            src="https://neodrafts.com/_astro/Stack@1-4.Bf33ViW9.png"
            alt=""
          />
          <img
            className="h-14"
            src="https://neodrafts.com/_astro/Stack@1-2.Dv6tSWqm.png"
            alt=""
          />
          <img
            className="h-14"
            src="https://neodrafts.com/_astro/Stack@1-12.CzbcZjeo.png"
            alt=""
          />
          <img
            className="h-14"
            src="https://neodrafts.com/_astro/Stack@1-4.Bf33ViW9.png"
            alt=""
          />
          <img
            className="h-14"
            src="https://neodrafts.com/_astro/Stack@1-2.Dv6tSWqm.png"
            alt=""
          />
          <img
            className="h-14"
            src="https://neodrafts.com/_astro/Stack@1-12.CzbcZjeo.png"
            alt=""
          />
        </div>
      </section>
      <section 
        ref={section2Ref}
        id="services"
        className="selectio2 bg-amber-50 fade-in-section">
        <div className="services  px-24 py-14  pt-32 flex gap-10 items-center justify-start">
          <h3 className="bg-[#B9FF66] font-semibold text-3xl px-2 tracking-wider py-1 rounded-md">
            Services
          </h3>
          <p className="text-xl font-mono w-[75%] text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            unde dolorum excepturi, facilis pariatur sapiente minima quam
            ratione, fuga mollitia error veritatis impedit officiis molestias
            autem nostrum tempora placeat voluptates.
          </p>
        </div>
        <div className="conatiner h-[86%] w-full py-12 px-32 flex justify-between gap-10 flex-wrap">
          <div
            ref={(el) => { if (el && !elemRefs.current.includes(el)) elemRefs.current.push(el); }}
            className="elem flex items-center justify-between p-10 h-96 w-[45%] border-2 rounded-4xl shrink-0 service-card"
            style={{
              boxShadow: "0 15px 0 black",
            }}
          >
            <div className="elemp1 flex flex-col justify-between w-[40%] gap-40">
              <h2 className="bg-[#B9FF66] py-2 px-2 pl-4  text-2xl rounded-md font-semibold">
                Sarch engine optimzation
              </h2>
              <h4 className="flex items-center gap-4 text-xl font-mono learn-more-link">
                <div className="arrow-icon">
                  <FaArrowAltCircleRight className="-rotate-45 text-3xl" />
                </div>
                Learn more
              </h4>
            </div>
            <div className="elemp2 w-[60%]  ml-56">
              <img
                src="https://neodrafts.com/_astro/card-pic1.LmmlwL7__1RuDY6.webp"
                alt=""
              />
            </div>
          </div>
          <div
            ref={(el) => { if (el && !elemRefs.current.includes(el)) elemRefs.current.push(el); }}
            className="elem flex items-center justify-between p-10 h-96 w-[45%] border-2 rounded-4xl shrink-0 service-card"
            style={{
              boxShadow: "0 15px 0 black",
            }}
          >
            <div className="elemp1 flex flex-col justify-between w-[40%] gap-40">
              <h2 className="bg-[#B9FF66] py-2 px-2 pl-4  text-2xl rounded-md font-semibold">
                Sarch engine optimzation
              </h2>
              <h4 className="flex items-center gap-4 text-xl font-mono learn-more-link">
                <div className="arrow-icon">
                  <FaArrowAltCircleRight className="-rotate-45 text-3xl" />
                </div>
                Learn more
              </h4>
            </div>
            <div className="elemp2 w-[60%]  ml-56">
              <img
                src="https://neodrafts.com/_astro/card-pic1.LmmlwL7__1RuDY6.webp"
                alt=""
              />
            </div>
          </div>
          <div
            ref={(el) => { if (el && !elemRefs.current.includes(el)) elemRefs.current.push(el); }}
            className="elem flex items-center justify-between p-10 h-96 w-[45%] border-2 rounded-4xl shrink-0 service-card"
            style={{
              boxShadow: "0 15px 0 black",
            }}
          >
            <div className="elemp1 flex flex-col justify-between w-[40%] gap-40">
              <h2 className="bg-[#B9FF66] py-2 px-2 pl-4  text-2xl rounded-md font-semibold">
                Sarch engine optimzation
              </h2>
              <h4 className="flex items-center gap-4 text-xl font-mono learn-more-link">
                <div className="arrow-icon">
                  <FaArrowAltCircleRight className="-rotate-45 text-3xl" />
                </div>
                Learn more
              </h4>
            </div>
            <div className="elemp2 w-[60%]  ml-56">
              <img
                src="https://neodrafts.com/_astro/card-pic1.LmmlwL7__1RuDY6.webp"
                alt=""
              />
            </div>
          </div>
          <div
            ref={(el) => { if (el && !elemRefs.current.includes(el)) elemRefs.current.push(el); }}
            className="elem flex items-center justify-between p-10 h-96 w-[45%] border-2 rounded-4xl shrink-0 service-card"
            style={{
              boxShadow: "0 15px 0 black",
            }}
          >
            <div className="elemp1 flex flex-col justify-between w-[40%] gap-40">
              <h2 className="bg-[#B9FF66] py-2 px-2 pl-4  text-2xl rounded-md font-semibold">
                Sarch engine optimzation
              </h2>
              <h4 className="flex items-center gap-4 text-xl font-mono learn-more-link">
                <div className="arrow-icon">
                  <FaArrowAltCircleRight className="-rotate-45 text-3xl" />
                </div>
                Learn more
              </h4>
            </div>
            <div className="elemp2 w-[60%]  ml-56">
              <img
                src="https://neodrafts.com/_astro/card-pic1.LmmlwL7__1RuDY6.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
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
