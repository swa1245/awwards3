"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaCalendarAlt, FaUser, FaClock, FaSearch } from "react-icons/fa";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../components/Navbar";

const BlogPage = () => {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const blogRefs = useRef<HTMLDivElement[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const postsPerPage = 6;
  
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
    
    // Blog post cards staggered animation
    blogRefs.current.forEach((elem, index) => {
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

  // Blog post data
  const blogPosts = [
    {
      category: "SEO",
      title: "10 SEO Strategies That Actually Work in 2025",
      author: "Emma Johnson",
      date: "June 28, 2025",
      readTime: "8 min read",
      image: "https://img.freepik.com/free-photo/seo-search-engine-optimization-concept_53876-138069.jpg",
      excerpt: "Discover the most effective SEO strategies that are driving results in 2025. Learn how to adapt to the latest algorithm changes and boost your rankings.",
      tags: ["SEO", "Digital Marketing", "Google"]
    },
    {
      category: "Web Development",
      title: "Building Accessible Websites: A Complete Guide",
      author: "Michael Chen",
      date: "June 20, 2025",
      readTime: "12 min read",
      image: "https://img.freepik.com/free-photo/website-accessibility-concept-with-laptop_23-2149443891.jpg",
      excerpt: "Learn how to create websites that are accessible to all users, including those with disabilities. Improve user experience while meeting compliance standards.",
      tags: ["Accessibility", "Web Development", "UX"]
    },
    {
      category: "Digital Marketing",
      title: "Social Media Trends to Watch in 2025",
      author: "Sarah Williams",
      date: "June 15, 2025",
      readTime: "6 min read",
      image: "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063130.jpg",
      excerpt: "Stay ahead of the curve with these emerging social media trends that are reshaping how brands connect with their audiences in 2025.",
      tags: ["Social Media", "Marketing", "Trends"]
    },
    {
      category: "UI/UX",
      title: "Psychology of Colors in Web Design",
      author: "David Rodriguez",
      date: "June 10, 2025",
      readTime: "10 min read",
      image: "https://img.freepik.com/free-photo/color-palette-guide-close-up_23-2148542376.jpg",
      excerpt: "Understand how color choices influence user behavior and learn how to create effective color schemes that align with your brand and conversion goals.",
      tags: ["UI/UX", "Design", "Psychology"]
    },
    {
      category: "E-commerce",
      title: "Optimizing Your Checkout Process for Higher Conversions",
      author: "Lisa Thompson",
      date: "June 5, 2025",
      readTime: "9 min read",
      image: "https://img.freepik.com/free-photo/online-payment-security-concept-with-laptop_23-2149557818.jpg",
      excerpt: "Reduce cart abandonment and increase sales with these proven strategies for streamlining and optimizing your e-commerce checkout process.",
      tags: ["E-commerce", "Conversion", "UX"]
    },
    {
      category: "Analytics",
      title: "Making Data-Driven Decisions for Your Business",
      author: "Robert Kim",
      date: "May 30, 2025",
      readTime: "11 min read",
      image: "https://img.freepik.com/free-photo/business-planning-concept-with-charts-graphs_23-2149150018.jpg",
      excerpt: "Learn how to collect, analyze, and interpret data to make informed business decisions that drive growth and improve ROI.",
      tags: ["Analytics", "Business", "Data"]
    },
    {
      category: "SEO",
      title: "Voice Search Optimization: Preparing for the Future",
      author: "James Wilson",
      date: "May 25, 2025",
      readTime: "7 min read",
      image: "https://img.freepik.com/free-photo/voice-assistant-concept-illustration_23-2150379488.jpg",
      excerpt: "With voice search becoming increasingly popular, learn how to optimize your content for voice queries and stay ahead of this growing trend.",
      tags: ["SEO", "Voice Search", "Digital Marketing"]
    },
    {
      category: "Web Development",
      title: "The Rise of WebAssembly: What Developers Need to Know",
      author: "Alex Turner",
      date: "May 20, 2025",
      readTime: "14 min read",
      image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
      excerpt: "Explore how WebAssembly is changing web development and enabling high-performance applications that were previously impossible in browsers.",
      tags: ["WebAssembly", "Web Development", "Performance"]
    },
    {
      category: "Digital Marketing",
      title: "Creating Video Content That Converts in 2025",
      author: "Olivia Martinez",
      date: "May 15, 2025",
      readTime: "8 min read",
      image: "https://img.freepik.com/free-photo/online-video-marketing-concept-with-smartphone_23-2149437100.jpg",
      excerpt: "Video continues to dominate content marketing. Learn the latest techniques for creating engaging videos that drive conversions and brand awareness.",
      tags: ["Video Marketing", "Content Strategy", "Conversion"]
    },
    {
      category: "UI/UX",
      title: "Designing for Dark Mode: Best Practices and Considerations",
      author: "Sophia Lee",
      date: "May 10, 2025",
      readTime: "9 min read",
      image: "https://img.freepik.com/free-photo/dark-mode-concept-with-smartphone_23-2149437105.jpg",
      excerpt: "Dark mode is more than just a trend. Learn how to effectively implement dark mode in your designs while maintaining accessibility and brand consistency.",
      tags: ["UI/UX", "Dark Mode", "Design Trends"]
    },
    {
      category: "E-commerce",
      title: "Leveraging AR for Enhanced Shopping Experiences",
      author: "Daniel Brown",
      date: "May 5, 2025",
      readTime: "10 min read",
      image: "https://img.freepik.com/free-photo/augmented-reality-shopping-concept-with-smartphone_23-2149437112.jpg",
      excerpt: "Augmented reality is transforming e-commerce by allowing customers to visualize products before purchasing. Discover how to implement AR in your store.",
      tags: ["E-commerce", "Augmented Reality", "Customer Experience"]
    },
    {
      category: "Analytics",
      title: "Privacy-First Analytics: Balancing Insights and User Privacy",
      author: "Natalie Wong",
      date: "April 30, 2025",
      readTime: "12 min read",
      image: "https://img.freepik.com/free-photo/data-privacy-concept-with-lock-circuit-board_23-2149437124.jpg",
      excerpt: "With increasing privacy regulations, learn how to gather valuable analytics data while respecting user privacy and complying with global standards.",
      tags: ["Analytics", "Privacy", "GDPR"]
    },
    {
      category: "Web Development",
      title: "Micro Frontends: Breaking Down Your Web Application",
      author: "Thomas Garcia",
      date: "April 25, 2025",
      readTime: "13 min read",
      image: "https://img.freepik.com/free-photo/web-development-concept-with-programmer_23-2149437131.jpg",
      excerpt: "Explore the micro frontend architecture pattern and learn how it can help teams build and deploy complex web applications more efficiently.",
      tags: ["Web Development", "Architecture", "Micro Frontends"]
    },
    {
      category: "Digital Marketing",
      title: "Influencer Marketing: Building Authentic Partnerships",
      author: "Rachel Green",
      date: "April 20, 2025",
      readTime: "7 min read",
      image: "https://img.freepik.com/free-photo/influencer-marketing-concept-with-people-using-phones_23-2149437141.jpg",
      excerpt: "Discover strategies for identifying and partnering with influencers who align with your brand values and can authentically promote your products.",
      tags: ["Influencer Marketing", "Brand Partnerships", "Social Media"]
    }
  ];

  // Filter posts by category and search query
  const filteredPosts = blogPosts
    .filter(post => activeCategory === "All" || post.category === activeCategory)
    .filter(post => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    });
    
  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: section2Ref.current?.offsetTop || 0,
      behavior: 'smooth'
    });
  };
  
  // Reset pagination when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  return (
    <div className="main-container">
      {/* Hero Section */}
      <section 
        ref={section1Ref} 
        id="blog-hero" 
        className="section1 min-h-[60vh] w-full relative bg-amber-50"
      >
        <Navbar 
          scrollToSection={scrollToSection} 
          section1Ref={section1Ref} 
          section2Ref={section2Ref} 
        />
        <div className="px-24 py-14 pt-32">
          <h1 className="text-[5vw] gs font-semibold mb-8 leading-none">Insights & <span className="text-[#B9FF66]">Ideas</span></h1>
          <p className="text-2xl gs font-medium w-[70%] mb-12 text-gray-700">
            Expert advice, industry trends, and actionable insights to help your business thrive in the digital landscape.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full py-4 px-6 pr-12 border-2 border-black rounded-md text-black focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                <FaSearch size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section ref={section2Ref} className="bg-amber-50 py-16 px-24">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-6 rounded-md border-2 transition-all ${
                activeCategory === category 
                  ? "bg-[#B9FF66] border-black font-semibold" 
                  : "bg-white border-gray-300 hover:border-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Featured Blog Post */}
        <div 
          ref={(el) => { if (el && !blogRefs.current.includes(el)) blogRefs.current.push(el); }}
          className="md:col-span-3 border-2 rounded-3xl overflow-hidden service-card mb-20"
          style={{ boxShadow: "0 15px 0 black" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12">
              <div className="bg-[#B9FF66] w-fit py-2 px-4 rounded-md mb-6">
                <h3 className="text-xl font-semibold">Featured</h3>
              </div>
              <h2 className="text-4xl font-semibold mb-4 leading-tight">The Future of AI in Digital Marketing: Transforming Customer Experiences</h2>
              <div className="flex items-center text-gray-600 mb-6">
                <div className="flex items-center mr-6">
                  <FaUser className="mr-2" />
                  <span>John Smith</span>
                </div>
                <div className="flex items-center mr-6">
                  <FaCalendarAlt className="mr-2" />
                  <span>July 5, 2025</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  <span>15 min read</span>
                </div>
              </div>
              <p className="text-lg mb-6 text-gray-700">
                Artificial Intelligence is revolutionizing how businesses approach digital marketing.
                From personalized customer experiences to predictive analytics, AI tools are becoming
                essential for staying competitive in today&apos;s market. Discover how leading brands are
                leveraging AI to transform their marketing strategies and achieve unprecedented results.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Artificial Intelligence</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Marketing</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Technology</span>
              </div>
              <button className="bg-black text-white py-3 px-8 border-2 rounded-md hover-effect">
                Read Full Article
              </button>
            </div>
            <div className="bg-gray-100">
              <Image 
                src="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg" 
                alt="AI in Digital Marketing" 
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {currentPosts.map((post, index) => (
            <div 
              key={index}
              ref={(el) => { if (el && !blogRefs.current.includes(el)) blogRefs.current.push(el); }}
              className="border-2 rounded-3xl overflow-hidden service-card transform transition-all hover:-translate-y-2"
            >
              <div className="h-56 bg-gray-100 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  className="object-cover transition-transform group-hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <div className="bg-[#B9FF66] w-fit py-1 px-3 rounded-md mb-4">
                  <h3 className="text-sm font-semibold">{post.category}</h3>
                </div>
                <h2 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h2>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <div className="flex items-center mr-4">
                    <FaUser className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <FaClock className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <p className="text-gray-700 mb-6 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 px-2 py-1 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
                <button className="text-black font-semibold flex items-center hover-effect learn-more-link">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2">
            {/* Previous page button */}
            <button 
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center border-2 rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            {/* Page numbers */}
            {Array.from({ length: Math.min(5, totalPages) }).map((_, idx) => {
              // Logic to determine which page numbers to show
              let pageNum;
              if (totalPages <= 5) {
                pageNum = idx + 1;
              } else if (currentPage <= 3) {
                pageNum = idx + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + idx;
              } else {
                pageNum = currentPage - 2 + idx;
              }
              
              return (
                <button 
                  key={idx}
                  onClick={() => paginate(pageNum)}
                  className={`w-10 h-10 flex items-center justify-center border-2 rounded-md ${currentPage === pageNum ? 'bg-[#B9FF66] font-semibold' : 'hover:bg-gray-100'}`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            {/* Ellipsis if needed */}
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <span className="mx-2">...</span>
            )}
            
            {/* Last page button if needed */}
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <button 
                onClick={() => paginate(totalPages)}
                className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-gray-100"
              >
                {totalPages}
              </button>
            )}
            
            {/* Next page button */}
            <button 
              onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
              disabled={currentPage === totalPages || totalPages === 0}
              className={`w-10 h-10 flex items-center justify-center border-2 rounded-md ${currentPage === totalPages || totalPages === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="bg-black text-white py-20 px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Subscribe to our newsletter</h2>
          <p className="text-gray-700 mb-6">Don&apos;t miss out on our most popular topics. Whether you&apos;re looking for in-depth guides, industry insights, or the latest trends, we&apos;ve got you covered.</p>
          <p className="text-xl mb-10">Get the latest industry insights and updates delivered straight to your inbox. Join over 10,000 subscribers who trust our content.</p>
          <div className="flex max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow py-4 px-6 rounded-l-md text-black"
            />
            <button className="bg-[#B9FF66] text-black py-4 px-8 font-semibold rounded-r-md hover-effect">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 text-gray-300">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
      
      {/* Recent Posts Section */}
      <section className="bg-amber-50 py-16 px-24">
        <h2 className="text-3xl font-semibold mb-12">Popular Topics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Digital Marketing", count: 24, image: "https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94834.jpg" },
            { title: "Web Development", count: 18, image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg" },
            { title: "UI/UX Design", count: 15, image: "https://img.freepik.com/free-photo/person-working-web-design_23-2149285200.jpg" },
            { title: "SEO & Analytics", count: 12, image: "https://img.freepik.com/free-photo/analytics-plan-strategy-insight-concept_53876-124357.jpg" }
          ].map((topic, index) => (
            <div 
              key={index} 
              className="rounded-3xl overflow-hidden relative h-48 group cursor-pointer border-2"
            >
              <Image 
                src={topic.image} 
                alt={topic.title} 
                className="object-cover transition-transform group-hover:scale-110"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 text-white">
                <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                <p>{topic.count} articles</p>
              </div>
            </div>
          ))}
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

export default BlogPage;