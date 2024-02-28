import React, { useState, useEffect } from "react";
import Image from "next/image";
import menu from "../public/menu.svg";
import close from "../public/close.svg";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

export default function Nav() {
  const [menuState, setMenuState] = useState("menu");
  const [menuClicked, setMenuClicked] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 7670 });

  useEffect(() => {
    // Do something with the screen size information
    console.log("Is Mobile:", isMobile);

    // Your logic for handling screen size changes

    return () => {
      // Clean up on component unmount
      // Remove any event listeners or subscriptions
    };
  }, [isMobile]);
  const onToggleMenu = () => {
    setMenuState((prev) => (prev === "menu" ? "close" : "menu"));
    setMenuClicked((prev) => !prev);
    console.log(menuState);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.55,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.65,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const menuItems = [
    { label: "About", url: "/" },
    { label: "Skills", url: "/" },
    { label: "Portfolio", url: "/" },
    { label: "Games", url: "/" },
    { label: "Contact", url: "/" },
  ];
  return (
    <nav className="flex items-center justify-between lg:fixed mx-auto md:px-20 lg:px-40 w-screen pt-3.5 pb-3.5">
      <div className="pr-20"></div>
      {isMobile && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate={menuClicked ? "animate" : "initial"}
          exit="exit"
        >
          <div
            className={`md:static absolute md:min-h-fit min-h-[60vh] top-20 md:w-auto w-full flex items-center px-5 bg-pink-400 ${
              menuState === "close" ? "left-0" : "left-[-100%]"
            }`}
          >
            <ul
              className={`flex md:flex-row flex-col md:items-center md:gap-[4vw] justify-center items-center ${
                menuState === "close"
                  ? "gap-11 text-white text-4xl font-comfortaa group relative"
                  : "text-black"
              }`}
            >
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={
                    "transform transition-transform ease-in-out hover:translate-y-[-1rem]"
                  }
                >
                  <a href={item.url} className="hover:text-teal-400">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      <div
        className={` ${
          menuState === "close" ? "invisible" : ""
        } flex items-center pl-20`}
      >
        <button className="bg-[#080f1c] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
          Resume
        </button>
      </div>
      <div className="flex items-center gap-6" onClick={onToggleMenu}>
        <Image
          src={menuState === "menu" ? menu : close}
          style={{
            objectFit: "cover",
            filter: "drop-shadow(5px 5px 0 pink) hue-rotate(180deg)",
            objectPosition: "50% 50%",
          }}
          alt="Menu Image"
          width={50}
          height={50}
          className="text-3xl cursor-pointer md:hidden gb-white-900"
        />
      </div>
    </nav>
  );
}
