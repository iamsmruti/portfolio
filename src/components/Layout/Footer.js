import React from "react";
import Container from "../CustomUI/Container";

const Footer = () => {
  return (
    <div className="border-t-[0.5px] border-gray-500">
      <Container>
        <div>
          <p className="py-5 text-right">Designed & Developed with 💜 by <span className="text-blue">Smruti</span></p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
