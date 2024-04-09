import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        StoriesBackground: "url('/moon-of-appalacia.jpg')",
        createShare: "url('/create-and-share.jpg')",
        beautifulStories: "url('/beautiful-stories.jpg')",
        designedForEveryone: "url('/designed-for-everyone.jpg')",
        theMountains: "url('/mountains.jpg')",
        sunsetCity: "url('/cityscapes.jpg')",
        daysVoyage: "url('/18-days-voyage.jpg')",
        architecturals: "url('/architecturals.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
