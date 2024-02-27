import React from "react";
import Container from "../../../components/CustomUI/Container";
import profileImage from "../../../assets/IMG_0393_Original.jpg";
import { socialLinks } from '../../../data/SocialLinks'
const AboutPage = () => {
  return (
    <div className="h-[100vh]">
      <Container>
        <div className="relative flex justify-between w-[100%]">
          <img
            className="w-[450px] z-[-1] absolute top-[10%] left-[50px]"
            src={profileImage}
          />
          <p className="vertical-text h-fit py-10 z-10 bg-white text-black font-slab text-[50px]">
            KNOW ME
          </p>

          <div className="w-[50%] min-h-[550px] flex flex-col justify-between">
            <div className="pl-10 pt-10">
              <p className="font-bold font-slab text-[50px]">Namaste 🙏</p>

              <div className="border-[0.5px] border-gray-600 p-5 bg-blackOlive text-lg">
                <p>I am a Full Stack Developer from India. I build and manage websites.</p>
                <p className="mt-5">
                  And I do it with creativity and
                  passion. I also love to learn new things and share with
                  others.
                </p>
              </div>
            </div>

            <div className="pl-10 pt-10 mt-auto">
              <p className="font-bold font-slab text-[50px]">Let's Connect</p>

              <div className="bg-blackOlive p-5">
                <div className="flex">
                  {socialLinks.map((social) => (
                    <a href={social.url} target={"_blank"} rel={"noreferrer"}>
                      <div className="text-[30px] mr-5 md:mr-5 hover:scale-125">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
