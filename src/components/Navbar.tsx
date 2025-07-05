import React from 'react';
import { FaStar } from "react-icons/fa";

interface NavbarProps {
  scrollToSection: (sectionRef: React.RefObject<HTMLElement | null>) => void;
  section1Ref: React.RefObject<HTMLElement | null>;
  section2Ref: React.RefObject<HTMLElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, section1Ref, section2Ref }) => {
  return (
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
  );
};

export default Navbar;
