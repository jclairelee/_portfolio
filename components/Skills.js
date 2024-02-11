import React from "react";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import csharp from "../public/logos/c-sharp.png";
import dotnet from "../public/logos/net.png";
import mongoDB from "../public/logos/MongoDB.png";
import js from "../public/logos/javascript.png";
import sass from "../public/logos/sass.png";
import mysql from "../public/logos/mysql.png";
import node from "../public/logos/node.png";
import react from "../public/logos/react.png";
import html from "../public/logos/html.png";
import ts from "../public/logos/ts.png";

export default function Skills() {
  return (
    <div>
      <h3 className="text-3xl py-1 dark:text-white ">Tech Stack</h3>
      {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Since the beginning of my journey as a freelance designer and developer,
        I've done remote work for
        <span className="text-teal-500"> agencies </span>
        consulted for <span className="text-teal-500">startups </span>
        and collaborated with talanted people to create digital products for
        both business and consumer use.
      </p> */}
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        I offer from a wide range of services, including brand design,
        programming and teaching.
      </p>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <Image src={design} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2  ">Front end</h3>
          {/* <h4 className="py-4 text-teal-600">React</h4> */}
          <p className="py-2">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>

          <div className="flex gap-5 justify-center mt-4">
            <Image src={ts} alt="typescript logo" width={35} height={35} />
            <Image src={js} alt="javascript logo" width={35} height={35} />
            <Image src={react} alt="reactjs logo" width={35} height={35} />
            <Image src={html} alt="html logo" width={35} height={35} />
            <Image src={sass} alt="sass logo" width={35} height={35} />
          </div>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <Image src={code} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Back end</h3>
          <p className="py-2">
            Do you have an idea for your next great website? Let's make it a
            reality.
          </p>
          <div className="flex gap-5 justify-center mt-4">
            <Image src={csharp} alt="csharp logo" width={35} height={35} />
            <Image src={dotnet} alt="dotnet logo" width={35} height={35} />
            <Image src={mongoDB} alt="mongoDb logo" width={35} height={35} />
            <Image src={mysql} alt="mysql logo" width={35} height={35} />
            <Image src={node} alt="node logo" width={35} height={35} />
          </div>

          {/* <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Illustrator</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Indesign</p> */}
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <Image src={consulting} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
          <p className="py-2">
            Are you interested in feedback for your current project? I can give
            you tips and tricks to level it up.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Illustrator</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Canva</p>
        </div>
      </div>
    </div>
  );
}
