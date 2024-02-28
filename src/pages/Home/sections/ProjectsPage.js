import React, { useState } from "react";
import Container from "../../../components/CustomUI/Container";
import HeadingLarge from "../../../components/CustomUI/HeadingLarge";
import { categories } from "../../../data/ProjectCategories";
import { projects } from "../../../data/Projects";
import CustomChip from "../../../components/CustomUI/CustomChip";

const ProjectsPage = () => {
  const [value, setValue] = useState("featured");

  return (
    <div className="min-h-[80vh] mb-20">
      <Container>
        <div>
          <HeadingLarge title="Projects" />

          <div>
            <div className="flex mb-2 border-b-[1px] dark:border-gray-800">
              {categories.map((category) => {
                if (category.slug === value) {
                  return (
                    <div
                      onClick={() => setValue(category.slug)}
                      className="text-white cursor-pointer px-3 py-1 bg-blackOlive"
                    >
                      <p>{category.name}</p>
                    </div>
                  );
                } else {
                  return (
                    <div
                      onClick={() => setValue(category.slug)}
                      className="cursor-pointer px-3 py-1"
                    >
                      <p>{category.name}</p>
                    </div>
                  );
                }
              })}
            </div>

            <div className="flex flex-wrap md:justify-start justify-center mt-5">
              {projects
                ?.filter((item) => {
                  if (value === "featured") return item.featured === true;
                  if (value === "all") return item;
                  return item.category === value;
                })
                .map((project) => (
                  <ProjectCard project={project} />
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsPage;

export const ProjectCard = ({ project }) => {
  return (
    <div className="w-[240px] bg-blackOlive md:w-[300px] md:mr-3 mb-3 p-3 shadow-md dark:border-[1px] border-gray-800">
      <div className="flex justify-between items-center">
        <p className="font-bold text-[20px]">{project.name}</p>
      </div>

      <div className="flex flex-col mt-2">
        <div>
          <p className="text-[11px]">Source Code:</p>
          <div className="flex mt-1">
            {project.source.map((link) => (
              <a href={link.url} target="_blank">
                <CustomChip text={link.name} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <p className="text-[11px]">Live Links:</p>
          <div className="flex mt-1">
            {project.live.map((link) => (
              <a href={link.url} target="_blank">
                <CustomChip text={link.name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="text-[16px] opacity-90 mt-4">{project.description}</p>

      <p className="opacity-90 mt-6">
        <span className="text-blue">Tech Used: </span>
        {project.techUsed.map((item) => (
          <>{item}, </>
        ))}
      </p>
    </div>
  );
};
