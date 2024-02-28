import React, { useState } from "react";
import Container from "../../../components/CustomUI/Container";
import HeadingLarge from "../../../components/CustomUI/HeadingLarge";
import { skills } from "../../../data/Skills";
import { categories } from "../../../data/SkillCategories";

const SkillsPage = () => {
  const [value, setValue] = useState('all')
  return (
    <div className="min-h-[100vh] mb-20">
      <Container>
        <div>
          <HeadingLarge title="Skills" />

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

            <div className="grid grid-cols-1 md:grid-cols-2">
              {skills
                ?.filter((item) => {
                  if (value === 'all') return item;
                  else if (value === 'programming') return item.type === "pr";
                  else if (value === 'dev-ops') return item.type === "do";
                  else return item.type === "cs";
                })
                .map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SkillsPage;

export const SkillCard = ({ skill }) => {
  return (
    <div className="shadow-md m-2 mx-1 dark:border-[1px] dark:border-gray-900">
      <div className="m-1 p-2 flex flex-col">
        <div className="flex justify-between items-center" direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <p style={{ fontWeight: 500, fontSize: '20px' }}>{skill.title}</p>
        </div>
        <p style={{ fontSize: '14px', color: 'gray' }}>{skill.description}</p>
      </div>
    </div>
  )
}