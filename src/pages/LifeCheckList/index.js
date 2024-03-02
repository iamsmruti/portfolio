import React, { useEffect, useState } from "react";
import Container from "../../components/CustomUI/Container";
import HeadingLarge from "../../components/CustomUI/HeadingLarge";
import ProgressBar from "../../components/CustomUI/ProgressBar";
import { checklist } from "../../data/CheckList";

const LifeCheckList = () => {
  const [value, setValue] = useState("all");
  const [percent, setPercent] = useState(0);
  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setTotal(Number(checklist.length));
    const completed = checklist.filter((item) => item.done);
    setCompleted(Number(completed.length));
  }, []);

  useEffect(() => {
    const decimal = completed / total
    const temp = decimal * 100
    setPercent(temp);
  }, [total, completed]);

  const categories = [
    { name: "All", slug: "all" },
    { name: "Self", slug: "self" },
    { name: "Learning", slug: "learning" },
    { name: "Career", slug: "career" },
    { name: "Moh", slug: "moh" },
    { name: "Travel", slug: "travel" },
  ];

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div>
      <Container>
        <p className="font-sand font-thin text-white text-2xl">
          Hey there! Welcome to my wishlist – a little snapshot of the
          adventures, milestones, and dreams that make up my journey. Come along
          as I tick off each box and dive into life's wild ride, one step at a
          time!
        </p>

        <div className="mt-10">
          <HeadingLarge title="Progress" />
          <div className="my-5">
            <ProgressBar percent={percent} />
            <p className={`ml-[${percent}%]`}>
              {completed}/{total}
            </p>
          </div>

          <div className="flex mb-5 w-[100%] overflow-scroll border-b-[1px] dark:border-gray-800">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-10">
            {checklist.filter((item) => {
              if(value === 'all') return item
              return item.category === value
            }).sort((a, b) => {
              if(a.name.toUpperCase() > b.name.toLowerCase()) return true
            }).map((item) => {
              if (item.done) {
                return (
                  <div className="p-5 hover:bg-opacity-85 hover:cursor-pointer bg-blue text-black">
                    <div className="flex">
                      <div className="mr-3">
                        <input
                          checked={true}
                          className="w-6 h-6 accent-pink-300 outline-none"
                          type="checkbox"
                        />
                      </div>
                      <p>{item.name}</p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="p-5 bg-blackOlive hover:bg-opacity-85 hover:cursor-pointer">
                    <div className="flex">
                      <div className="mr-3">
                        <input
                          onClick={() => handleClick(item.id)}
                          checked={false}
                          className="w-6 h-6 accent-pink-300 outline-none"
                          type="checkbox"
                        />
                      </div>
                      <p>{item.name}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LifeCheckList;
