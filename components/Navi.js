import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navi(props) {
  const { setDarkMode, mode } = props;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down
      setIsScrolled(window.scrollY > 0);
    };

    // Attach the event listener to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`md:px-20 lg:px-40 pb-5 pt-5 dark:text-white ${
        isScrolled
          ? "bg-gray-800 bg-opacity-90 fixed top-0 w-full z-99 dark:text-white"
          : "bg-teal-300 text-black"
      }`}
    >
      <ul className="flex items-center justify-between">
        <h1 className=" flex grow font-sans text-xl">Claire Lee</h1>
        <li className="flex shrink">
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!mode)}
            className=" cursor-pointer text-2xl"
          />
        </li>
        <li className="flex shrink-0">
          <a
            className={`${
              mode ? "bg-teal-500" : "bg-cyan-500"
            } text-white px-4 py-2 border-none rounded-md ml-8 `}
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
