import React from "react";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Mongo from "../assets/mongo.png";
import Python from "../assets/python.png";
import TTN from "../assets/TTN-logo.svg";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f]   ">
      {/* Container  */}
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full  text-gray-300">
        <div>
          <p className=" text-4xl font-bold border-b-4 border-pink-600  ">
            Skills
          </p>
          <p className="py-4 ">
            // These are the technologies I've worked with.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4  gap-4 text-center py-8 ">
          <div className=" shadow-md shadow-[#040c16] hover:scale-110  duration-500   ">
            <img className=" w-20 mx-auto" src={HTML} alt="HTML icon"></img>
            <p className="my-4 ">HTML</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110  duration-500   ">
            <img
              className=" w-20 mx-auto"
              src={TTN}
              alt="The Things Network icon"
            ></img>
            <p className="my-4 ">The Things Network</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110  duration-500   ">
            <img
              className=" w-20 mx-auto"
              src={JavaScript}
              alt="JAVASCRIPT icon"
            ></img>
            <p className="my-4 ">JAVASCRIPT</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110  duration-500   ">
            <img
              className=" w-20 mx-auto"
              src={ReactImg}
              alt="REACT icon"
            ></img>
            <p className="my-4 ">REACT</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110  duration-500   ">
            <img className=" w-20 mx-auto" src={GitHub} alt="GITHUB icon"></img>
            <p className="my-4 ">GITHUB</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110  duration-500   ">
            <img className=" w-20 mx-auto" src={Node} alt="NODE JS icon"></img>
            <p className="my-4 ">NODE JS</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110  duration-500   ">
            <img className=" w-20 mx-auto" src={Mongo} alt="MONGO icon"></img>
            <p className="my-4 ">MONGO DB</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110  duration-500   ">
            <img className=" w-20 mx-auto" src={Python} alt="PYTHON icon"></img>
            <p className="my-4 ">PYTHON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
