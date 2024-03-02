import React from "react";
import HelloText from "../../../components/HelloText";

const HeroPage = () => {
  return (
    <div className="relative h-[60vh] md:h-[70vh] lg:h-[calc(100vh)] flex flex-col justify-center items-center">
      <div className="lg:text-[250px] md:text-[220px] sm:text-[170px] text-[150px] mt-[100px]">
        <HelloText />
      </div>
      <div>
        <p className="md:text-3xl text-2xl bg-white border-black border-[0.5px] text-black px-10 md:py-5 py-2 font-slab">
          I'm Smruti Ranjan Badatya
        </p>
      </div>
    </div>
  );
};

export default HeroPage;
