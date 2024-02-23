import React from "react";
import Logo from "../Logo";
import DateTimer from "../DateTimer";
import Container from "./Container";

const Header = () => {
  return (
    <div>
      <Logo />

      <Container>
        <div className="bg-newsBlack h-[10px] w-[100%]" />
        <div className="bg-newsBlack h-[5px] my-[3px] w-[100%]" />
        <div className="bg-newsBlack h-[2px] my-1 w-[100%]" />
        <DateTimer />
        <div className="bg-newsBlack h-[2px] my-1 w-[100%]" />
      </Container>
    </div>
  );
};

export default Header;
