"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../components/Navbar";

const UseCasesPage = () => {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const caseRefs = useRef<HTMLDivElement[]>([]);
  const testimonialRefs = useRef<HTMLDivElement[]>([]);
  const statRefs = useRef<HTMLDivElement[]>([]);
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
    
    // Case study cards staggered animation
    caseRefs.current.forEach((elem, index) => {
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
    
    // Testimonial cards staggered animation
    testimonialRefs.current.forEach((elem, index) => {
      if (elem) {
        gsap.from(elem, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            end: "top 65%",
            toggleActions: "play none none none"
          }
        });
      }
    });
    
    // Stats counter animation
    statRefs.current.forEach((elem, index) => {
      if (elem) {
        gsap.from(elem, {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            end: "top 65%",
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
      <section ref={section1Ref} id="use-cases-hero" className="section1 min-h-[60vh] w-full relative bg-amber-50">
        <Navbar 
          scrollToSection={scrollToSection} 
          section1Ref={section1Ref} 
          section2Ref={section2Ref} 
        />
        <div className="px-24 py-14 pt-32">
          <h1 className="text-[5vw] gs font-semibold mb-8 leading-none">Success <span className="text-[#B9FF66]">Stories</span></h1>
          <p className="text-2xl gs font-medium w-[70%] text-gray-700 mb-12">
            Discover how we&apos;ve helped businesses across various industries achieve their digital goals
            with our innovative solutions and strategic approach.
          </p>
        </div>
      </section>
      
      <section ref={section2Ref} className="bg-amber-50 py-16 px-24">
        {/* Case Study 1 */}
        <div 
          ref={(el) => { if (el && !caseRefs.current.includes(el)) caseRefs.current.push(el); }}
          className="mb-24 border-2 rounded-3xl overflow-hidden"
          style={{ boxShadow: "0 15px 0 black" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12">
              <div className="bg-[#B9FF66] w-fit py-2 px-4 rounded-md mb-6">
                <h3 className="text-xl font-semibold">E-commerce</h3>
              </div>
              <h2 className="text-3xl font-semibold mb-6">FashionHub Online Store</h2>
              <p className="text-lg mb-6 text-gray-700">
                FashionHub needed a complete digital transformation to compete in the 
                fast-growing online fashion market. We delivered a comprehensive solution
                that increased their conversion rate by 156%.
              </p>
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">Results:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">156% increase in conversion rate</li>
                  <li className="mb-2">89% improvement in page load speed</li>
                  <li className="mb-2">200% increase in organic traffic</li>
                  <li>45% reduction in cart abandonment</li>
                </ul>
              </div>
              <button className="bg-black text-white py-3 px-6 rounded-md hover-effect">
                View Case Study
              </button>
            </div>
            <div className="bg-gray-100">
              <div className="relative w-full h-full">
                <Image 
                  src="https://img.freepik.com/free-photo/online-fashion-shopping-with-laptop_23-2150400628.jpg" 
                  alt="FashionHub Case Study" 
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Case Study 2 */}
        <div 
          ref={(el) => { if (el && !caseRefs.current.includes(el)) caseRefs.current.push(el); }}
          className="mb-24 border-2 rounded-3xl overflow-hidden"
          style={{ boxShadow: "0 15px 0 black" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-100 order-last md:order-first">
              <div className="relative w-full h-full">
                <Image 
                  src="https://img.freepik.com/free-photo/business-people-discussing-charts-graphs-showing-results-successful-teamwork_1150-5151.jpg" 
                  alt="TechSolutions Case Study" 
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="p-12">
              <div className="bg-[#B9FF66] w-fit py-2 px-4 rounded-md mb-6">
                <h3 className="text-xl font-semibold">SaaS</h3>
              </div>
              <h2 className="text-3xl font-semibold mb-6">TechSolutions Platform</h2>
              <p className="text-lg mb-6 text-gray-700">
                TechSolutions needed to revamp their user experience and optimize their 
                conversion funnel. Our team redesigned their platform and implemented
                strategic marketing campaigns.
              </p>
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">Results:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">78% increase in user engagement</li>
                  <li className="mb-2">120% growth in trial sign-ups</li>
                  <li className="mb-2">45% improvement in user retention</li>
                  <li>65% increase in premium plan conversions</li>
                </ul>
              </div>
              <button className="bg-black text-white py-3 px-6 rounded-md hover-effect">
                View Case Study
              </button>
            </div>
          </div>
        </div>
        
        {/* Case Study 3 */}
        <div 
          ref={(el) => { if (el && !caseRefs.current.includes(el)) caseRefs.current.push(el); }}
          className="mb-24 border-2 rounded-3xl overflow-hidden"
          style={{ boxShadow: "0 15px 0 black" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12">
              <div className="bg-[#B9FF66] w-fit py-2 px-4 rounded-md mb-6">
                <h3 className="text-xl font-semibold">Healthcare</h3>
              </div>
              <h2 className="text-3xl font-semibold mb-6">MediCare App</h2>
              <p className="text-lg mb-6 text-gray-700">
                MediCare wanted to create a patient-centered mobile application to streamline
                appointment booking and medical record access. We delivered a secure,
                intuitive solution that transformed their patient experience.
              </p>
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">Results:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li className="mb-2">92% patient satisfaction rate</li>
                  <li className="mb-2">67% reduction in appointment no-shows</li>
                  <li className="mb-2">85% of patients actively using the app</li>
                  <li>40% decrease in administrative workload</li>
                </ul>
              </div>
              <button className="bg-black text-white py-3 px-6 rounded-md hover-effect">
                View Case Study
              </button>
            </div>
            <div className="bg-gray-100">
              <div className="relative w-full h-full">
                <Image 
                  src="https://img.freepik.com/free-photo/medical-workers-analyzing-patient-data-tablet_23-2149355000.jpg" 
                  alt="MediCare Case Study" 
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-white py-16 px-24">
        <h2 className="text-4xl font-semibold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              position: "Marketing Director, FashionHub",
              image: "https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg",
              quote: "Working with this team transformed our online presence. The results exceeded our expectations and the ROI has been phenomenal."
            },
            {
              name: "Michael Chen",
              position: "CEO, TechSolutions",
              image: "https://img.freepik.com/free-photo/confident-businessman-posing-outside_23-2148999706.jpg",
              quote: "Their strategic approach and technical expertise helped us create a platform that our users love. Conversions are up and churn is down."
            },
            {
              name: "Emily Rodriguez",
              position: "CTO, MediCare",
              image: "https://img.freepik.com/free-photo/young-beautiful-woman-smart-casual-wear-holding-digital-tablet-looking-camera-smiling_23-2148316493.jpg",
              quote: "The app they developed for us has revolutionized how we interact with patients. The attention to detail and focus on user experience was impressive."
            }
          ].map((testimonial, index) => (
            <div 
              key={index}
              ref={(el) => { if (el && !testimonialRefs.current.includes(el)) testimonialRefs.current.push(el); }}
              className="border-2 rounded-3xl p-8 service-card"
              style={{ boxShadow: "0 10px 0 black" }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <div className="relative w-full h-full">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-amber-50 py-16 px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Our Impact By Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "85%", label: "Avg. Conversion Increase" },
              { number: "12M+", label: "Revenue Generated" }
            ].map((stat, index) => (
              <div 
                key={index} 
                ref={(el) => { if (el && !statRefs.current.includes(el)) statRefs.current.push(el); }}
                className="p-6"
              >
                <div className="text-5xl font-bold mb-2 text-[#B9FF66]">{stat.number}</div>
                <div className="text-xl font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-black text-white py-20 px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Ready to be our next success story?</h2>
          <p className="text-xl mb-10">
            Let&apos;s discuss how we can help your business achieve similar results.
          </p>
          <button className="bg-[#B9FF66] text-black py-4 px-8 text-xl font-semibold rounded-md hover-effect">
            Start your project
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

export default UseCasesPage;
