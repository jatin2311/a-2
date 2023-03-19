import React from "react";
import Banner from "../assets/banner.png";

const HomeScreen = () => {
  return (
    <>
      <div className="bg-[#2f2d51] pb-20">
        <div className="container mx-auto flex flex-col lg:flex-row p-4 justify-between">
          <div className="text-white lg:w-1/2 px-4 md:px-16  py-10">
            <p className="text-white font-bold">OVER 3000 COURSE AVAILABLE</p>
            <h2 className="font-semibold text-4xl md:text-6xl pt-10">
              Upgrade your learning Skills & Upgrade your life
            </h2>
            <p className="py-10 text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              ullam libero magni reiciendis quam ipsa blanditiis, facilis velit
              eaque illo?
            </p>
            <div className="flex  gap-10 borderw">
              <button className="bg-[#f14c5d] px-10 py-4 text-xl rounded-md hover:bg-[#4541c0ef] transition-all delay-150 ease-in-out duration-200">
                Find courses
              </button>
              <button className=" bg-white text-[#f14c5d] px-8 py-4 text-xl rounded-md hover:bg-[#f14c5d] hover:text-white transition-all delay-150 ease-in-out duration-200">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex ">
            <img
              src={Banner}
              alt=""
              className="w-auto md:w-[500px] h-auto md:h-[350px] px-4 lg:px-0 self-center"
            />
          </div>
        </div>
      </div>

      <div className="relative bottom-12 bg-[#2e4264]  lg:mx-44 rounded-md flex flex-col lg:flex-row text-white gap-10  justify-between self-center px-20 py-8 text-[20px] text-center">
        <div className="flex-col ">
          <p className="">2000+</p>
          <p className="">Students</p>
        </div>
        <div className="flex-col">
          <p className="">1200</p>
          <p className="">Courses</p>
        </div>
        <div className="flex-col">
          <p className="">2256</p>
          <p className="">Finished seasons</p>
        </div>
        <div className="flex-col">
          <p className="">100%</p>
          <p className="">Satisfaction</p>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
