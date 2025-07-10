import React from 'react';
import { FaStar } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  scrollToSection: (sectionRef: React.RefObject<HTMLElement | null>) => void;
  section1Ref: React.RefObject<HTMLElement | null>;
  section2Ref: React.RefObject<HTMLElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, section1Ref, section2Ref }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  return (
    <nav className="flex items-center justify-between px-10 py-8">
      <Link href="/">
        <h1 className="text-5xl font-bold flex gap-4 gsap cursor-pointer">
          <div className="star-rotate">
            <FaStar className="-rotate-45" />
          </div> WizardZ
        </h1>
      </Link>
      <div className="part2 flex items-center justify-center gap-20">
        {isHomePage ? (
          <h4 className="text-lg font-serif gsap cursor-pointer" onClick={() => scrollToSection(section1Ref)}>Home</h4>
        ) : (
          <Link href="/">
            <h4 className="text-lg font-serif gsap cursor-pointer">Home</h4>
          </Link>
        )}
        
        {isHomePage ? (
          <h4 className="text-lg font-serif gsap cursor-pointer" onClick={() => scrollToSection(section2Ref)}>Services</h4>
        ) : (
          <Link href="/services">
            <h4 className="text-lg font-serif gsap cursor-pointer">Services</h4>
          </Link>
        )}
        
        <Link href="/use-cases">
          <h4 className="text-lg font-serif gsap cursor-pointer">Use Cases</h4>
        </Link>
        
        <Link href="/blog">
          <h4 className="text-lg font-serif gsap cursor-pointer">Blog</h4>
        </Link>
        
        <Link href="/request-quote">
          <button className="px-3 py-2 font-mono cursor-pointer gsap bg-white rounded-md border-1 border-b-gray-950 hover-effect">
            Request a quote
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
