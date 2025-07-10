"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaCheck } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../components/Navbar";

const RequestQuotePage = () => {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const formRefs = useRef<HTMLDivElement[]>([]);
  const faqRefs = useRef<HTMLDivElement[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionRef: React.RefObject<HTMLElement | null>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
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
    
    // Form elements staggered animation
    formRefs.current.forEach((elem, index) => {
      if (elem) {
        gsap.from(elem, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power2.out"
        });
      }
    });
    
    // FAQ elements staggered animation
    faqRefs.current.forEach((elem, index) => {
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
      <section ref={section1Ref} id="quote-hero" className="section1 min-h-[60vh] w-full relative bg-amber-50">
        <Navbar 
          scrollToSection={scrollToSection} 
          section1Ref={section1Ref} 
          section2Ref={section2Ref} 
        />
        <div className="px-24 py-14 pt-32">
          <h1 className="text-[5vw] gs font-semibold mb-8 leading-none">Request a <span className="text-[#B9FF66]">Quote</span></h1>
          <p className="text-2xl gs font-medium w-[70%] text-gray-700 mb-12">
            Tell us about your project, and we&apos;ll provide you with a customized quote
            tailored to your specific needs and goals.
          </p>
          <div className="flex space-x-6 mt-10 gs">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#B9FF66] flex items-center justify-center mr-4">
                <span className="font-bold text-xl">1</span>
              </div>
              <p className="font-medium">Submit Request</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mr-4">
                <span className="font-bold text-xl">2</span>
              </div>
              <p className="font-medium">Get Quote</p>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mr-4">
                <span className="font-bold text-xl">3</span>
              </div>
              <p className="font-medium">Start Project</p>
            </div>
          </div>
        </div>
      </section>
      
      <section ref={section2Ref} className="bg-amber-50 py-20 px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              {!formSubmitted ? (
                <div 
                  className="border-2 rounded-3xl p-10 bg-white"
                  style={{ boxShadow: "0 15px 0 black" }}
                >
                  <h2 className="text-3xl font-semibold mb-2">Tell us about your project</h2>
                  <p className="text-gray-600 mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours</p>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {/* Personal Information */}
                      <div 
                        ref={(el) => { if (el && !formRefs.current.includes(el)) formRefs.current.push(el); }}
                        className="form-group"
                      >
                        <label className="block mb-2 font-medium">First Name *</label>
                        <input 
                          type="text" 
                          required
                          className="w-full border-2 border-black rounded-md p-3 focus:border-[#B9FF66] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div 
                        ref={(el) => { if (el && !formRefs.current.includes(el)) formRefs.current.push(el); }}
                        className="form-group"
                      >
                        <label className="block mb-2 font-medium">Last Name *</label>
                        <input 
                          type="text" 
                          required
                          className="w-full border-2 border-black rounded-md p-3 focus:border-[#B9FF66] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div 
                        ref={(el) => { if (el && !formRefs.current.includes(el)) formRefs.current.push(el); }}
                        className="form-group"
                      >
                        <label className="block mb-2 font-medium">Email Address *</label>
                        <input 
                          type="email" 
                          required
                          className="w-full border-2 border-black rounded-md p-3 focus:border-[#B9FF66] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div 
                        ref={(el) => { if (el && !formRefs.current.includes(el)) formRefs.current.push(el); }}
                        className="form-group"
                      >
                        <label className="block mb-2 font-medium">Phone Number</label>
                        <input 
                          type="tel" 
                          className="w-full border-2 border-black rounded-md p-3 focus:border-[#B9FF66] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      
                      {/* Company Information */}
                      <div 
                        ref={(el) => { if (el && !formRefs.current.includes(el)) formRefs.current.push(el); }}
                        className="form-group"
                      >
                        <label className="block mb-2 font-medium">Company Name</label>
                        <input 
                          type="text" 
                          className="w-full border-2 border-black rounded-md p-3 focus:border-[#B9FF66] focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div 
                        ref={(el) => { if (el && !formRefs.current.includes(el)) formRefs.current.push(el); }}
                        className="form-group"
                      >
                        <label className="block mb-2 font-medium">Website (if any)</label>
                        <input 
                          type="url" 
                          className="w-full border-2 border-black rounded-md p-3 focus:border-[#B9FF66] focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    {/* Project Details */}
                    <div 
                      ref={(el) => { if (el && !formRefs.current.includes(el)) formRefs.current.push(el); }}
                      className="form-group mb-8"
                    >
                      <label className="block mb-2 font-medium">Services You&apos;re Interested In *</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {['Web Development', 'UI/UX Design', 'SEO', 'Digital Marketing', 'E-commerce', 'Mobile App Development'].map((service, index) => (
                          <div key={index} className="flex items-center">
                            <input 
                              type="checkbox" 
                              id={`service-${index}`} 
                              className="mr-2 w-5 h-5"
                            />
                            <label htmlFor={`service-${index}`}>{service}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div 
                      ref={(el) => { if (el && !formRefs.current.includes(el)) formRefs.current.push(el); }}
                      className="form-group mb-8"
                    >
                      <label className="block mb-2 font-medium">Estimated Budget</label>
                      <select className="w-full border-2 border-black rounded-md p-3 focus:border-[#B9FF66] focus:outline-none transition-all duration-300">
                        <option value="">Select a budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="over-50k">Over $50,000</option>
                      </select>
                    </div>
                    
                    <div 
                      ref={(el) => { if (el && !formRefs.current.includes(el)) formRefs.current.push(el); }}
                      className="form-group mb-8"
                    >
                      <label className="block mb-2 font-medium">Project Timeline</label>
                      <select className="w-full border-2 border-black rounded-md p-3 focus:border-[#B9FF66] focus:outline-none transition-all duration-300">
                        <option value="">Select a timeline</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    
                    <div 
                      ref={(el) => { if (el && !formRefs.current.includes(el)) formRefs.current.push(el); }}
                      className="form-group mb-10"
                    >
                      <label className="block mb-2 font-medium">Project Description *</label>
                      <textarea 
                        required
                        rows={6}
                        placeholder="Tell us about your project goals, requirements, and any specific challenges you're facing..."
                        className="w-full border-2 border-black rounded-md p-3 focus:border-[#B9FF66] focus:outline-none transition-all duration-300"
                      ></textarea>
                    </div>
                    
                    <div 
                      ref={(el) => { if (el && !formRefs.current.includes(el)) formRefs.current.push(el); }}
                      className="form-group"
                    >
                      <button 
                        type="submit"
                        className="bg-black text-white py-4 px-10 text-xl font-semibold rounded-md hover:bg-[#B9FF66] hover:text-black transition-all duration-300 border-2 border-black"
                      >
                        Submit Request
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div 
                  className="border-2 rounded-3xl p-10 text-center bg-white"
                  style={{ boxShadow: "0 15px 0 black" }}
                >
                  <div className="w-20 h-20 bg-[#B9FF66] rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheck className="text-3xl" />
                  </div>
                  <h2 className="text-3xl font-semibold mb-4">Thank You!</h2>
                  <p className="text-xl mb-8">
                    Your quote request has been submitted successfully. Our team will review your project details and get back to you within 24-48 hours.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="bg-black text-white py-3 px-8 font-semibold rounded-md hover:bg-[#B9FF66] hover:text-black transition-all duration-300 border-2 border-black"
                  >
                    Submit Another Request
                  </button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div>
              <div 
                className="border-2 rounded-3xl p-8 mb-8 bg-white"
                style={{ boxShadow: "0 15px 0 black" }}
                ref={(el) => { if (el && !formRefs.current.includes(el)) formRefs.current.push(el); }}
              >
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="mb-4">
                  <p className="font-medium">Email:</p>
                  <p className="text-gray-700">info@wizardz.com</p>
                </div>
                <div className="mb-4">
                  <p className="font-medium">Phone:</p>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="font-medium">Address:</p>
                  <p className="text-gray-700">
                    123 Digital Avenue<br />
                    Tech City, CA 94103<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div 
                className="border-2 rounded-3xl p-8 bg-white"
                style={{ boxShadow: "0 15px 0 black" }}
                ref={(el) => { if (el && !formRefs.current.includes(el)) formRefs.current.push(el); }}
              >
                <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-[#B9FF66] rounded-full p-1 mr-3 mt-1">
                      <span className="block w-4 h-4 text-center font-bold">1</span>
                    </div>
                    <p>We&apos;ll review your project requirements</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#B9FF66] rounded-full p-1 mr-3 mt-1">
                      <span className="block w-4 h-4 text-center font-bold">2</span>
                    </div>
                    <p>Our team will prepare a detailed quote</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#B9FF66] rounded-full p-1 mr-3 mt-1">
                      <span className="block w-4 h-4 text-center font-bold">3</span>
                    </div>
                    <p>We&apos;ll schedule a consultation call</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#B9FF66] rounded-full p-1 mr-3 mt-1">
                      <span className="block w-4 h-4 text-center font-bold">4</span>
                    </div>
                    <p>Project planning and kickoff</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                question: "How long does it take to get a quote?",
                answer: "We typically prepare and deliver quotes within 24-48 hours after receiving your project details."
              },
              {
                question: "What information do you need for an accurate quote?",
                answer: "The more details you provide about your project goals, timeline, specific features, and budget expectations, the more accurate our quote will be."
              },
              {
                question: "Do you charge for providing a quote?",
                answer: "No, our quotes are completely free with no obligation. We believe in transparent pricing and helping you understand the investment required for your project."
              },
              {
                question: "What happens after I receive a quote?",
                answer: "We'll schedule a consultation call to discuss the quote, answer any questions, and refine the project scope if needed. If you decide to proceed, we'll create a detailed project plan."
              },
              {
                question: "Can you work with my existing design or brand guidelines?",
                answer: "Absolutely! We can work with your existing assets and brand guidelines to ensure consistency across all your digital platforms."
              },
              {
                question: "What if my project requirements change after receiving a quote?",
                answer: "We understand that project scopes can evolve. We'll work with you to adjust the quote and timeline accordingly if your requirements change."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="border-2 rounded-3xl p-8 bg-amber-50"
                style={{ boxShadow: "0 10px 0 black" }}
                ref={(el) => { if (el && !formRefs.current.includes(el)) formRefs.current.push(el); }}
              >
                <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
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

export default RequestQuotePage;
