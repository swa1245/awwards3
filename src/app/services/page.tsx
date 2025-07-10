"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../components/Navbar";

const ServicesPage = () => {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const elemRefs = useRef<HTMLDivElement[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionRef: React.RefObject<HTMLElement | null>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    // Add scroll event listener to show/hide scroll-to-top button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
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
    
    // Cleanup function
    return () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="main-container">
      <section ref={section1Ref} id="services-hero" className="section1 min-h-[50vh] w-full relative bg-amber-50">
        <Navbar 
          scrollToSection={scrollToSection} 
          section1Ref={section1Ref} 
          section2Ref={section2Ref} 
        />
        <div className="px-24 py-14 pt-20">
          <h1 className="text-6xl gs font-semibold mb-8">Our Services</h1>
          <p className="text-2xl gs font-medium w-[70%] text-gray-700 mb-12">
            We provide comprehensive digital solutions tailored to your business needs.
            Our expert team delivers exceptional results across various digital domains.
          </p>
        </div>
      </section>
      
      <section ref={section2Ref} className="bg-amber-50 py-16 px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Service 1 */}
          <div
            ref={(el) => { if (el && !elemRefs.current.includes(el)) elemRefs.current.push(el); }}
            className="service-card border-2 p-10 rounded-3xl"
            style={{ boxShadow: "0 15px 0 black" }}
          >
            <div className="bg-[#B9FF66] w-fit py-2 px-4 rounded-md mb-6">
              <h3 className="text-2xl font-semibold">Search Engine Optimization</h3>
            </div>
            <p className="text-lg mb-8 text-gray-700">
              Boost your online visibility and drive organic traffic with our data-driven SEO strategies.
              We optimize your website structure, content, and backlink profile to improve search rankings.
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li className="mb-2">Keyword Research & Analysis</li>
              <li className="mb-2">On-Page & Technical SEO</li>
              <li className="mb-2">Content Optimization</li>
              <li className="mb-2">Link Building Strategies</li>
              <li>Performance Tracking & Reporting</li>
            </ul>
            <div className="mt-8">
              <div className="relative w-full h-64">
                <Image
                  src="https://neodrafts.com/_astro/card-pic1.LmmlwL7__1RuDY6.webp"
                  alt="SEO service"
                  className="rounded-xl object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          
          {/* Service 2 */}
          <div
            ref={(el) => { if (el && !elemRefs.current.includes(el)) elemRefs.current.push(el); }}
            className="service-card border-2 p-10 rounded-3xl"
            style={{ boxShadow: "0 15px 0 black" }}
          >
            <div className="bg-[#B9FF66] w-fit py-2 px-4 rounded-md mb-6">
              <h3 className="text-2xl font-semibold">Web Development</h3>
            </div>
            <p className="text-lg mb-8 text-gray-700">
              Create stunning, responsive websites that engage visitors and drive conversions.
              Our development team builds custom solutions using the latest technologies.
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li className="mb-2">Custom Website Development</li>
              <li className="mb-2">E-commerce Solutions</li>
              <li className="mb-2">Progressive Web Apps</li>
              <li className="mb-2">CMS Implementation</li>
              <li>Website Maintenance & Support</li>
            </ul>
            <div className="mt-8">
              <div className="relative w-full h-64">
                <Image
                  src="https://neodrafts.com/_astro/card-pic1.LmmlwL7__1RuDY6.webp"
                  alt="Web Development service"
                  className="rounded-xl object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          
          {/* Service 3 */}
          <div
            ref={(el) => { if (el && !elemRefs.current.includes(el)) elemRefs.current.push(el); }}
            className="service-card border-2 p-10 rounded-3xl"
            style={{ boxShadow: "0 15px 0 black" }}
          >
            <div className="bg-[#B9FF66] w-fit py-2 px-4 rounded-md mb-6">
              <h3 className="text-2xl font-semibold">Digital Marketing</h3>
            </div>
            <p className="text-lg mb-8 text-gray-700">
              Reach your target audience and achieve your business goals with comprehensive digital marketing strategies.
              We create data-driven campaigns that deliver measurable results.
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li className="mb-2">Social Media Marketing</li>
              <li className="mb-2">Email Marketing Campaigns</li>
              <li className="mb-2">PPC & Display Advertising</li>
              <li className="mb-2">Content Marketing</li>
              <li>Analytics & Performance Reporting</li>
            </ul>
            <div className="mt-8">
              <div className="relative w-full h-64">
                <Image
                  src="https://neodrafts.com/_astro/card-pic1.LmmlwL7__1RuDY6.webp"
                  alt="Digital Marketing service"
                  className="rounded-xl object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          
          {/* Service 4 */}
          <div
            ref={(el) => { if (el && !elemRefs.current.includes(el)) elemRefs.current.push(el); }}
            className="service-card border-2 p-10 rounded-3xl"
            style={{ boxShadow: "0 15px 0 black" }}
          >
            <div className="bg-[#B9FF66] w-fit py-2 px-4 rounded-md mb-6">
              <h3 className="text-2xl font-semibold">UI/UX Design</h3>
            </div>
            <p className="text-lg mb-8 text-gray-700">
              Create intuitive and engaging user experiences that convert visitors into customers.
              Our design team focuses on both aesthetics and functionality.
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li className="mb-2">User Research & Personas</li>
              <li className="mb-2">Wireframing & Prototyping</li>
              <li className="mb-2">Visual Design & Branding</li>
              <li className="mb-2">Usability Testing</li>
              <li>Conversion Rate Optimization</li>
            </ul>
            <div className="mt-8">
              <div className="relative w-full h-64">
                <Image
                  src="https://neodrafts.com/_astro/card-pic1.LmmlwL7__1RuDY6.webp"
                  alt="UI/UX Design service"
                  className="rounded-xl object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-black text-white py-20 px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Ready to transform your digital presence?</h2>
          <p className="text-xl mb-10">
            Let&apos;s discuss how our services can help you achieve your business goals.
          </p>
          <button className="bg-[#B9FF66] text-black py-4 px-8 text-xl font-semibold rounded-md hover-effect">
            Book a free consultation
          </button>
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

export default ServicesPage;
