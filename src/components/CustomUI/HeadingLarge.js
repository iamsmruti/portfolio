import React from "react";

const HeadingLarge = ({ title }) => {
  return (
    <div>
      <p className="md:text-[100px] sm:text-[54px] text-[54px] font-slab">{title}</p>
    </div>
  );
};

export default HeadingLarge;
