import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowWhiteProp } from "./svgs";

const HomeContent3 = () => {
  type Story = {
    title: string;
    author: string;
    image: string;
  };

  const stories: Story[] = [
    {
      title: "The Mountains",
      author: "John Appleseed",
      image: "/mountains.jpg",
    },
    {
      title: "Sunset Cityscapes",
      author: "Benjamin Cruz",
      image: "/cityscapes.jpg",
    },
    {
      title: "18 Days Voyage",
      author: "Alexei Borodin",
      image: "/18-days-voyage.jpg",
    },
    {
      title: "Architecturals",
      author: "Samantha Brooke",
      image: "/architecturals.jpg",
    },
  ];

  return (
    <div className="w-full h-auto">
      <div className="w-full max-w-[1440px] mx-auto h-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {stories.map((story, index) => (
          <div
            key={index}
            className="w-full sm:h-[500px] h-[375px] relative flex items-end justify-start"
          >
            <Image
              src={story.image}
              width={362}
              height={500}
              alt=""
              className="w-full h-full absolute object-center object-cover z-10"
            />
            <div className="w-full h-[360px] p-10 bg-gradient-to-t from-black to-transparent flex flex-col items-start justify-end gap-y-5 relative z-20">
              <div className="flex flex-col">
                <div className="text-white text-lg font-semibold">
                  {story.title}
                </div>
                <div className="text-white text-xs">by {story.author}</div>
              </div>
              <div className="w-full h-[1px] bg-[#979797]" />
              <Link
                href="#"
                className="w-full text-xs text-white font-semibold tracking-widest hover:underline flex items-center justify-between gap-x-5"
              >
                READ STORIES
                <ArrowWhiteProp />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContent3;
