"use client";

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-16 px-24">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Subscription */}
        <div className="bg-[#B9FF66] p-8 rounded-3xl mb-16 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-black text-2xl font-bold mb-2">Subscribe to our newsletter</h3>
            <p className="text-gray-700">Stay updated with our latest news, insights, and offers.</p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-l-md border-2 border-black focus:outline-none" 
              />
              <button className="bg-black text-white px-6 py-3 rounded-r-md hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-bold mb-6">Wizardz</h2>
            <p className="text-gray-300 mb-6">
              Crafting digital experiences that captivate, engage, and convert. Your vision, our expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#B9FF66] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#B9FF66] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#B9FF66] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#B9FF66] transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#B9FF66] transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#B9FF66] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#B9FF66] transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#B9FF66] transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#B9FF66] transition-colors">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#B9FF66] transition-colors">
                  Mobile App Development
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#B9FF66] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-gray-300 hover:text-[#B9FF66] transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#B9FF66] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className="text-gray-300 hover:text-[#B9FF66] transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                123 Digital Avenue<br />
                Tech City, CA 94103<br />
                United States
              </li>
              <li className="text-gray-300">
                info@wizardz.com
              </li>
              <li className="text-gray-300">
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Wizardz. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-[#B9FF66] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#B9FF66] transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#B9FF66] transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
