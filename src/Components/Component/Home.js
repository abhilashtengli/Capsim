import React, { useEffect } from "react";
import img1 from "../../Images/Blood And Iron.jpeg";
import img2 from "../../Images/ferro aluminum.jpeg";
import img3 from "../../Images/Silicon Manganese.jpeg";
import { motion } from "framer-motion";
import BgBox from "./BgBox";
import HomeMid from "./HomeMid";
import DelayedComponent from "./DelayedComponent";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="  border-black md:flex justify-center  pt-24">
        <BgBox rowNum={8} />
        <div className="left   md:w-[50%] md:grid place-content-center text-center md:text-start md:pl-10 lg:text-start lg:pl-20">
          <DelayedComponent state="animate-left-to-right">
            <motion.h1
              className="text-5xl text-zinc-700 text-gradient-right-to-left"
              initial={{
                opacity: 0,
                x: -1,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.7 }}
            >
              Welcome to <span className="font-semibold text-5xl">Capsim</span>
            </motion.h1>
          </DelayedComponent>
          <p className="text-2xl mt-5 text-zinc-700 leading-10">
            Your trusted partner in <br></br>
            <span className="text-3xl font-semibold">
              Ferro-Silico Manganese <br></br>
            </span>{" "}
            products for the steelmaking industry.
          </p>
          <p className="text-5xl mt-10 lg:mt-24 text-zinc-700 text-gradient-right-to-left ">
            'Global <span className="font-semibold">Reach</span>, Local{" "}
            <span className="font-semibold">Expertise</span>'
          </p>
          <Link to="/contact">
            <motion.button
              className="px-4 py-1 lg:hidden bg-blue-200 bg-opacity-30  mt-10 mb-2 relative rounded-full  text-sm hover:shadow-2xl hover:shadow-blue-500/[0.3] transition duration-200 border button-gradient-border"
              whileTap={{
                scale: "0.9",
              }}
              whileHover={{
                scale: "0.95",
              }}
            >
              <div className="absolute inset-x-0 h-[2px] w-2/3 mx-auto -bottom-[2.5px] shadow-2xl  bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
              <span className="font-semibold text-xl text-zinc-700 mx-3">
                Contact
              </span>
            </motion.button>
          </Link>
        </div>
        <div className="right  lg::w-[50%] md:mt-2">
          <DelayedComponent state="animate-bottom-to-top">
            <div className="flex justify-center ">
              <img
                alt=""
                src={img1}
                className="w-32 object-cover lg:w-48  m-7 border hover:scale-110 transition duration-500 border-gray-400 rounded-lg"
              />
              <img
                alt=""
                src={img2}
                className="w-32  object-cover lg:w-48 cover m-7 border hover:scale-110 transition duration-500 border-gray-400 rounded-lg "
              />
            </div>
            <div className="flex justify-center">
              <img
                alt=""
                src={img3}
                className="w-48 h-52 cover m-7 border hover:scale-110 transition duration-500 border-gray-200 rounded-lg "
              />
            </div>
          </DelayedComponent>
        </div>
      </div>

      <HomeMid />
    </>
  );
};

export default Home;
