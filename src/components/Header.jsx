import React, { useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import Logo from "../assets/logo.jpeg";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navHandler, setNavHandler] = useState("translate-x-56 ");
  //   const [animation, setAnimation] = useState('transiti')

  return (
    <section className="flex lg:container lg:mx-auto p-4 lg:p-8 justify-between  overflow-hidden">
      <div className="flex  ">
        <div className="flex px-4  gap-2">
          <img src={Logo} alt="" />
          <p className="font-semibold  text-black/80 self-center text-2xl">
            LOGO
          </p>
        </div>
        <div className=" self-center gap-2 px-10 hidden lg:flex">
          <BsFillGridFill size={22} />
          <p className="text-xl ">Category</p>
        </div>
        <div className="hidden lg:flex">
          <input type="text" className="rounded-md bg-black/10" />
          <FiSearch
            size={20}
            className="relative right-7 top-3 cursor-pointer hover:text-red-700 transition duration-300 ease-in hover:scale-150"
          />
        </div>
      </div>
      <div className="self-center hidden lg:flex">
        <ul className="flex gap-10 px-10 text-[20px] font-semibold ">
          <li className="">Home</li>
          <li className="">About</li>
          <li className="">Courses</li>
          <li className="">Blog</li>
          <li className="">Contact</li>
        </ul>
      </div>
      {/* <div className="cursor-pointer lg:hidden "> */}
      {/* <FaBars size={25} className="" /> */}
      <div
        className="lg:hidden pr-4 z-10 "
        onClick={() => {
          if (navHandler == "translate-x-0") {
            setNavHandler("translate-x-52");
          } else {
            setNavHandler("translate-x-0");
          }
        }}
      >
        {toggleMenu ? (
          <MdClose onClick={() => setToggleMenu(false)} size={30} />
        ) : (
          <FaBars
            onClick={() => setToggleMenu(true)}
            size={25}
            className="transition duration-700 delay-200 ease-in-out"
          />
        )}
        <div
          className={` absolute top-24 right-0 px-4 h-screen  bg-stone-500/40 transition duration-700 delay-200 ease-in-out  ${navHandler}`}
        >
          <div className="flex flex-col  gap-4 transition duration-700 delay-200 ease-in-out">
            <div
              to="/"
              className="text-xl font-base pt-4  w-36 py-1  "
              onClick={() => setToggleMenu(false)}
            >
              Home
            </div>
            <div
              className="text-xl font-base w-36 py-1 "
              onClick={() => setToggleMenu(false)}
            >
              About
            </div>
            <div
              className="text-xl font-base w-36 py-1 "
              onClick={() => setToggleMenu(false)}
            >
              Course
            </div>
            <div
              className="text-xl font-base w-36 py-1 "
              onClick={() => setToggleMenu(false)}
            >
              Contact
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Header;
