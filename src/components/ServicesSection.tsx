import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";

interface ServicesSectionProps {
  section2Ref: React.RefObject<HTMLElement | null>;
  elemRefs: React.MutableRefObject<HTMLDivElement[]>;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ section2Ref, elemRefs }) => {
  return (
    <section 
      ref={section2Ref}
      id="services"
      className="selectio2 bg-amber-50 fade-in-section">
      <div className="services px-24 py-14 pt-32 flex gap-10 items-center justify-start">
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
            <h2 className="bg-[#B9FF66] py-2 px-2 pl-4 text-2xl rounded-md font-semibold">
              Search engine optimization
            </h2>
            <h4 className="flex items-center gap-4 text-xl font-mono learn-more-link">
              <div className="arrow-icon">
                <FaArrowAltCircleRight className="-rotate-45 text-3xl" />
              </div>
              Learn more
            </h4>
          </div>
          <div className="elemp2 w-[60%] ml-56">
            <div className="relative w-full h-full">
              <Image
                src="https://neodrafts.com/_astro/card-pic1.LmmlwL7__1RuDY6.webp"
                alt="SEO service"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
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
            <h2 className="bg-[#B9FF66] py-2 px-2 pl-4 text-2xl rounded-md font-semibold">
              Web Development
            </h2>
            <h4 className="flex items-center gap-4 text-xl font-mono learn-more-link">
              <div className="arrow-icon">
                <FaArrowAltCircleRight className="-rotate-45 text-3xl" />
              </div>
              Learn more
            </h4>
          </div>
          <div className="elemp2 w-[60%] ml-56">
            <div className="relative w-full h-full">
              <Image
                src="https://neodrafts.com/_astro/card-pic1.LmmlwL7__1RuDY6.webp"
                alt="Web Development service"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
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
            <h2 className="bg-[#B9FF66] py-2 px-2 pl-4 text-2xl rounded-md font-semibold">
              Digital Marketing
            </h2>
            <h4 className="flex items-center gap-4 text-xl font-mono learn-more-link">
              <div className="arrow-icon">
                <FaArrowAltCircleRight className="-rotate-45 text-3xl" />
              </div>
              Learn more
            </h4>
          </div>
          <div className="elemp2 w-[60%] ml-56">
            <div className="relative w-full h-full">
              <Image
                src="https://neodrafts.com/_astro/card-pic1.LmmlwL7__1RuDY6.webp"
                alt="Digital Marketing service"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
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
            <h2 className="bg-[#B9FF66] py-2 px-2 pl-4 text-2xl rounded-md font-semibold">
              UI/UX Design
            </h2>
            <h4 className="flex items-center gap-4 text-xl font-mono learn-more-link">
              <div className="arrow-icon">
                <FaArrowAltCircleRight className="-rotate-45 text-3xl" />
              </div>
              Learn more
            </h4>
          </div>
          <div className="elemp2 w-[60%] ml-56">
            <div className="relative w-full h-full">
              <Image
                src="https://neodrafts.com/_astro/card-pic1.LmmlwL7__1RuDY6.webp"
                alt="UI/UX Design service"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
