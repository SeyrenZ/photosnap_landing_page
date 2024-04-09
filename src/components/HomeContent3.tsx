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
      <div className="w-full max-w-[1440px] bg-white mx-auto h-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 relative">
        <div className="absolute z-10 w-full h-[6px] bottom-0 bg-white lg:block hidden" />
        {stories.map((story, index) => (
          <Link
            href="#"
            key={index}
            className="relative z-0 w-full sm:h-[500px] h-[375px] lg:pb-[6px] pb-0 flex items-end justify-start lg:hover:translate-y-[-5%] transition ease-in-out duration-300 bg-gradient-to-r from-[#FFC593] via-[#BC7198] to-[#5A77FF] hover-link"
          >
            <Image
              src={story.image}
              width={362}
              height={500}
              alt=""
              className="absolute w-full h-full object-center object-cover"
            />
            <div className="w-full h-[360px] p-10 bg-gradient-to-t from-black to-transparent flex flex-col items-start justify-end gap-y-5 relative z-10">
              <div className="flex flex-col">
                <div className="text-white text-lg font-semibold">
                  {story.title}
                </div>
                <div className="text-white text-xs">by {story.author}</div>
              </div>
              <div className="w-full h-[1px] bg-[#979797]" />
              <div className="mt-2 w-auto text-xs text-white font-semibold tracking-widest flex items-center justify-between gap-x-4">
                <span className="link link-underline link-underline-white">
                  READ STORIES
                </span>
                <ArrowWhiteProp />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeContent3;
