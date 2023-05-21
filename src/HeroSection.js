import React from "react";

function HeroSection() {
  return (
    <div className="flex lg:ml-20 justify-center max-w-xl md:my-35 mt-11 pt-5 h-screen">
      <div className="mt-19 pt-20">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
          Support Local Communities
        </h1>
        <p className="mt-3 section-paragraph text-lg">
          Revitalize your community, Organize and manage events with location
          based event management, easy to organize charities and fundraisers and
          display your local artwork to the world!!
        </p>
      </div>

      <img
        src="https://www.businessleader.co.uk/wp-content/uploads/2021/12/iStock-671263770-1024x642.jpg"
        alt="ticket"
        className="w-1/2 mt-12 md:absolute md:mt-0 right-5 -z-1 border-10"
      />
    </div>
  );
}

export default HeroSection;
