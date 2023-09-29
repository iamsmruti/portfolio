import Heading from "@/components/Heading";
import React, { useState } from "react";

import { active, notActive } from "../../../assets/Styles";

import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsMedium,
} from "react-icons/bs";

import { SiLeetcode } from "react-icons/si";

const AboutSection = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="min-h-[80vh] sm:ml-3">
        <Heading title={"ABOUT"} />

        <div className="max-w-[700px]">
          <div className="flex mb-2 border-b-[1px] dark:border-gray-800">
            {value === 0 ? (
              <div
                onClick={() => setValue(0)}
                className="text-white"
                style={active}
              >
                <p>Bio</p>
              </div>
            ) : (
              <div onClick={() => setValue(0)} style={notActive}>
                <p>Bio</p>
              </div>
            )}
            {value === 1 ? (
              <div
                onClick={() => setValue(1)}
                className="text-white"
                style={active}
              >
                <p>Education</p>
              </div>
            ) : (
              <div onClick={() => setValue(1)} style={notActive}>
                <p>Education</p>
              </div>
            )}
          </div>

          {value === 0 && (
            <div className="mt-3">
              <div>
                <p className="text-[16px] opacity-80">
                  My Name is Smruti Ranjan Badatya. I am a Full Stack Web
                  Developer from India.
                </p>

                <p className="text-[16px] opacity-80 mt-4">
                  I build and manage websites and I do it with creativity and
                  passion. I also love to learn new things and to share what
                  I've learned with others.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
                  <div>
                    <p className="opacity-80">
                      <span className="text-secondary">Age: </span>. . . 21
                    </p>
                    <p className="opacity-80 mt-1">
                      <span className="text-secondary">Freelance: </span>. . .
                      Available
                    </p>
                    <p className="opacity-80 mt-1">
                      <span className="text-secondary">Phone: </span>. . . +91
                      789 471 8923
                    </p>
                  </div>

                  <div>
                    <p className="opacity-80">
                      <span className="text-secondary">Nationality: </span>. . .
                      Indian
                    </p>
                    <p className="opacity-80 mt-1">
                      <span className="text-secondary">Address: </span>. . .
                      Kratu HOR, Burla, Sambalpur
                    </p>
                  </div>

                  <div className="md:col-span-2">
                    <p className="opacity-80 mt-1">
                      <span className="text-secondary">Email: </span>. . .
                      smrutiranjanbadatya2@gmail.com
                    </p>
                  </div>

                  <div className="md:col-span-2">
                    <div className="flex mt-10">
                      <a
                        href="https://github.com/iamsmruti"
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        <BsGithub className="text-[30px] mr-4 md:mr-5" />
                      </a>

                      <a
                        href="https://twitter.com/__iamsmruti"
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        <BsTwitter className="text-[30px] mr-4 md:mr-5" />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/iamsmruti/"
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        <BsLinkedin className="text-[30px] mr-4 md:mr-5" />
                      </a>

                      <a
                        href="https://www.instagram.com/__iamsmruti/"
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        <BsInstagram className="text-[30px] mr-4 md:mr-5" />
                      </a>

                      <a
                        href="https://medium.com/@smrutify"
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        <BsMedium className="text-[30px] mr-4 md:mr-5" />
                      </a>

                      <a
                        href="https://leetcode.com/iammsmruti"
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        <SiLeetcode className="text-[30px] mr-4 md:mr-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {value === 1 && (
            <div>
              <p className="text-[16px] opacity-80">
                I am currently pursuing my Bachelor&apos;s in Veer Surendra Sai
                University of Technology, Burla, Sambalpur, Odisha.
              </p>
              <div sx={{ mt: 6 }} container>
                <div className="mt-4">
                  <p className="opacity-80">
                    <span className="text-secondary">Major: </span>. . .
                    Computer Science & Engg.
                  </p>
                  <p className="opacity-80 mt-1">
                    <span className="text-secondary">Semester: </span>. . . 7th
                  </p>
                  <p className="opacity-80 mt-1">
                    <span className="text-secondary">CGPA: </span>. . . 9.63
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutSection;
