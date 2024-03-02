import React from "react";
import Container from "../../../components/CustomUI/Container";
import profileImage from "../../../assets/IMG_0393_Original.jpg";
import { socialLinks } from '../../../data/SocialLinks'
const AboutPage = () => {
  return (
    <div className="lg:h-[100vh] md:h-[60vh] h-auto">
      <Container>
        <div className="relative grid md:grid-cols-2 sm:grid-cols-1 w-[100%]">
          <div className="relative">
          <img
            className="lg:w-[450px] md:w-[85%] w-[80%] z-[-1] absolute top-[10%] left-[50px]"
            src={profileImage}
          />
          <p className="vertical-text ml-4 sm:ml-2 md:ml-0 border-black border-[0.5px] h-fit py-10 z-10 bg-white text-black font-slab lg:text-[50px] md:text-[42px] text-[35px] sm:text-[40px]">
            KNOW MORE
          </p>
          </div>

          <div className="md:min-h-[550px] sm:mt-[250px] mt-[50px] md:mt-0 flex flex-col justify-between">
            <div className="md:pl-10 pt-10">
              <p className="font-bold font-slab lg:text-[50px] md:text-[45px] text-[50px]">Namaste 🙏</p>

              <div className="border-[0.5px] border-gray-600 p-5 bg-blackOlive text-lg">
                <p>I am a Full Stack Developer from India. I build and manage websites.</p>
                <p className="mt-5">
                  And I do it with creativity and
                  passion. I also love to learn new things and share with
                  others.
                </p>
              </div>
            </div>

            <div className="md:pl-10 mt-[50px] md:mt-10 lg:pt-10 md:pt-5 ">
              <p className="font-bold font-slab lg:text-[50px] md:text-[45px] text-[50px]">Let's Connect</p>

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
