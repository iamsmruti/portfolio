import React from "react";
import HelloText from "../../../components/HelloText";

const HeroPage = () => {
  return (
    <div className="relative h-[calc(100vh)] flex flex-col justify-center items-center">
      <div className="text-[250px] mt-[100px]">
        <HelloText />
      </div>
      <div>
        <p className="text-3xl bg-white text-black px-10 py-5 font-slab">
          I'm Smruti Ranjan Badatya
        </p>
      </div>
    </div>
  );
};

export default HeroPage;
