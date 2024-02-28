import React from "react";
import Container from "../../../components/CustomUI/Container";
import { experience } from "../../../data/Experience";
import { BsLinkedin } from "react-icons/bs";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { ImCalendar } from "react-icons/im";
import HeadingLarge from "../../../components/CustomUI/HeadingLarge";

const ExperiencePage = () => {
  return (
    <div className="min-h-[100vh] py-10">
      <Container>
        <HeadingLarge title={"Experiences"} />
        <div className="flex flex-wrap md:justify-start justify-center mt-5">
          {experience?.map((work, index) => (
            <ExperienceCard work={work} key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ExperiencePage;

export const ExperienceCard = ({ work }) => {
  return (
    <div className="w-[240px] bg-blackOlive md:w-[300px] md:mr-3 mb-3 p-3 shadow-md dark:border-[1px] border-gray-800">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm">{work.subPosition}</p>
          <p className="font-bold text-[20px]">{work.position}</p>
        </div>

        <div className="flex">
          <a href={work.linkedIn} target={"_blank"} rel={"noreferrer"}>
            <BsLinkedin className="text-[26px] hover:scale-125" />
          </a>
        </div>
      </div>

      <p className="text-[15px] text-blue flex items-center">
      <HiBuildingOffice2 className="mr-3 rounded-none" /> {work.company}
      </p>

      <p className="text-[11px] opacity-50 flex items-center">
      <ImCalendar className="ml-0.5 mr-3 rounded-none" /> {work.startDate} - {work.endDate}
      </p>

      <p className="text-[16px] opacity-90 mt-4">{work.shortDescription}</p>
      <p className="opacity-90 mt-4">
        <span className="text-blue">Tech Used: </span>
        {work.techUsed.map((item) => (
          <>{item}, </>
        ))}
      </p>
    </div>
  );
};
