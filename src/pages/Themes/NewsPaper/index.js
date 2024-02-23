import React from "react";
import Header from "./components/Layout/Header";
import Container from "./components/Layout/Container";

import OnboardingElitmus from "../../../assets/onboarding.jpg";
import Phuket from "../../../assets/phuket.png";
import eLitmus from "../../../assets/elitmus.jpg";

const NewsPaper = () => {
  return (
    <div className="bg-newsBG text-newsBlack">
      <Header />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-8 lg:gap-5 mt-5 font-serif">
          <div className="col-span-2 lg:mb-0 mb-10">
            <p className="text-center font-serif text-xl font-semibold">
              Smruti Ranjan plans his first international flight
            </p>
            <p className="text-sm my-2 font-semibold">Mar 28, 2024</p>
            <img className="mt-2" src={Phuket} />
            <p className="mt-2 text-sm text-justify leading-[20px]">
              In a momentous milestone that blends the excitement of exploration
              with the pride of accomplishment, Smruti Ranjan, a promising young
              full stack developer, takes to the skies for his maiden
              international flight. At the tender age of 22, Smruti Ranjan's
              journey extends far beyond the boundaries of his hometown, as he
              embarks on an adventure to the picturesque destination of Phuket,
              Thailand.
            </p>
          </div>

          <div className="col-span-4 lg:mb-0 mb-10">
            <h1 className="font-serif text-justify font-semibold leading-[40px] text-3xl">
              Tech Prodigy SRB Embarks on Software Engineering Journey
            </h1>
            <p className="text-sm my-2 font-semibold">Jan 02, 2024</p>
            <div className="mt-2">
              <img className="" src={OnboardingElitmus} />

              <div className="grid grid-cols-2 mt-2 text-sm text-justify leading-[20px] gap-5">
                <p className="">
                  In a remarkable stride towards technological prowess, Smruti
                  Ranjan Badatya has commenced his journey in the realm of
                  software engineering as a full stack developer at eLitmus
                  Evaluation Pvt. Ltd. This transition marks a significant
                  milestone in Badatya's career, showcasing his burgeoning
                  expertise and dedication in the ever-evolving landscape of
                  technology.
                </p>
                <p>
                  Joining the esteemed ranks of eLitmus Evaluation Pvt. Ltd., a
                  trailblazer in the field of talent assessment and recruitment
                  solutions, Badatya is poised to contribute his expertise
                  towards pioneering projects and driving technological
                  advancements. As a full stack developer, he is entrusted with
                  the responsibility of conceptualizing, designing, and
                  implementing robust software solutions that cater to the
                  diverse needs of the company's clientele.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2 lg:mb-0 mb-10">
            <p className="text-center font-serif text-xl font-semibold">
              New Year ? Another New Place, Again!
            </p>
            <p className="text-sm my-2 font-semibold">Jan 01, 2024</p>
            <img className="mt-2" src={eLitmus} />
            <p className="mt-2 text-sm text-justify leading-[20px]">
              In this rushful world, Smruti Ranjan again finds a way to be in a
              new place in this new year as well. This time its Bengaluru, the
              city of tech. But this time it's special because he is no longer a
              student, but a professional Software Developer. Fortunate enough
              his hardwork paid off, he is in eLitmus Evaluation Pvt. Ltd. as a
              Full Stack Developer.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsPaper;
