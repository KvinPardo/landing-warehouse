import React from "react";
import { featuresData } from "../data";

// icons
import { BsArrowRight } from "react-icons/bs";

const Features = () => {
  // destructure featuresdata
  const { title, subtitle, list } = featuresData;

  return (
    <section className="my-[70px] xl:my-[150px]">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center">
          <h2
            className="h2 mb-6 xl:mb-12"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {title}
          </h2>
          <p
            className="lead max-w-[58p4px] mx-auto mb-16 xl:mb-24"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {subtitle}
          </p>
        </div>
        {/* featured list */}
        <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2">
          {list.map((feature, index) => {
            // destructure
            const { image, bgImage, title, description, linkText, delay } =
              feature;
            // feature item
            return (
              <div
                className="w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={delay}
                data-aos-offset="100"
              >
                {/* bg image */}
                <div className="hidden xl:flex absolute top-0 right-0 -z-10">
                  <img
                    src={`/img/features/${bgImage}.png`}
                    alt={`/img/features/${title}`}
                  />
                </div>
                {/* icon image */}
                <div 
                  data-aos="zoom-in-right"
                  data-aos-delay={delay}
                  
                  className="max-w-[120px] xl:mr-7 xl:max-w-[232px]">
                  <img
                    src={`/img/features/${image}.png`}
                    alt={`/img/features/${title}`}
                  />
                </div>
                {/* text */}
                <div className="max-w-[220px]">
                  <h3 className="h3 mb-4">{title}</h3>
                  <p className="font-light italic mb-4">{description}</p>
                  {/* link & arrow */}
                  <div className="flex items-center gap-x-2 group">
                    <a href="" className="text-primary font-bold ">
                      {linkText}
                    </a>
                    <BsArrowRight className="text-xl text-accent-primary group-hover:ml-[5px] transition-all " />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
