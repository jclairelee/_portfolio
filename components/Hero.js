import React from "react";
import {
  AiFillLinkedin,
  AiOutlineMedium,
  AiOutlineGithub,
} from "react-icons/ai";
import { a } from "../public/coder.png";

export default function Hero() {
  return (
    <div className="text-center p-10 py-10">
      <div className="mx-auto bg-gradient-to-b from-teal-100 rounded-full w-80 h-80 z-999 relative overflow-hidden mt-20 md:h-96 md:w-96">
        {/* <Image src={a} layout="fill" objectFit="cover" /> */}
      </div>

      <h2 className="text-5xl py-2 text-indigo-500 font-medium dark:text-teal-400 md:text-6xl">
        Claire Lee
      </h2>
      <h3 className="text-2xl py-2 text-gray-600 dark:text-white md:text-3xl">
        Web Developer
      </h3>
      <p className="text-md py-5 leading-8 text-gray-600 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        A student and a freelancer{","} providing programming and design
        services{"."} Explore my recent activities on social media below{"!"}
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <AiOutlineMedium />
        <AiFillLinkedin />
        <AiOutlineGithub />
      </div>
    </div>
  );
}
