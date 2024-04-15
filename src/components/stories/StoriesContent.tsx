import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowWhiteProp } from "../svgs";

const StoriesContent = () => {
  type Story = {
    title: string;
    author: string;
    image: string;
    date: string;
  };

  const stories: Story[] = [
    {
      title: "The Mountains",
      author: "John Appleseed",
      image: "/mountains.jpg",
      date: "April 16th 2020",
    },
    {
      title: "Sunset Cityscapes",
      author: "Benjamin Cruz",
      image: "/cityscapes.jpg",
      date: "April 14th 2020",
    },
    {
      title: "18 Days Voyage",
      author: "Alexei Borodin",
      image: "/18-days-voyage.jpg",
      date: "April 11th 2020",
    },
    {
      title: "Architecturals",
      author: "Samantha Brooke",
      image: "/architecturals.jpg",
      date: "April 9th 2020",
    },
    {
      title: "World Tour 2019",
      author: "Timothy Wagner",
      image: "/world-tour.jpg",
      date: "April 7th 2020",
    },
    {
      title: "Unforeseen Corners",
      author: "William Malcolm",
      image: "/unforeseen-corners.jpg",
      date: "April 3rd 2020",
    },
    {
      title: "King on Africa: Part II",
      author: "Tim Hillenburg",
      image: "/king-on-africa.jpg",
      date: "March 29th 2020",
    },
    {
      title: "The Trip to Nowhere",
      author: "Felicia Rourke",
      image: "/trip-to-nowhere.jpg",
      date: "March 21st 2020",
    },
    {
      title: "Rage of The Sea",
      author: "Mohammed Abdul",
      image: "/rage-of-the-sea.jpg",
      date: "March 19th 2020",
    },
    {
      title: "Running Free",
      author: "Michelle",
      image: "/running-free.jpg",
      date: "March 16th 2020",
    },
    {
      title: "Behind the Waves",
      author: "Lamarr Wilson",
      image: "/behind-the-waves.jpg",
      date: "March 11th 2020",
    },
    {
      title: "Calm Waters",
      author: "Samantha Brooke",
      image: "/calm-waters.jpg",
      date: "March 9th 2020",
    },
    {
      title: "The Milky Way",
      author: "Benjamin Cruz",
      image: "/milky-way.jpg",
      date: "March 5th 2020",
    },
    {
      title: "Night at The Dark Forest",
      author: "Mohammed Abdul",
      image: "/dark-forest.jpg",
      date: "March 4th 2020",
    },
    {
      title: "Somwarpet's Beauty",
      author: "Michelle",
      image: "/somwarpet.jpg",
      date: "March 1th 2020",
    },
    {
      title: "Land of Dreams",
      author: "William Malcolm",
      image: "/land-of-dreams.jpg",
      date: "February 25st 2020",
    },
  ];

  return (
    <div className="w-full h-auto  relative">
      <div className=" absolute z-10 w-full h-[10px] bottom-[-2px] bg-black" />
      <div className="w-full max-w-[1440px] bg-white mx-auto h-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
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
                <div className="text-xs text-white">{story.date}</div>
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

export default StoriesContent;
