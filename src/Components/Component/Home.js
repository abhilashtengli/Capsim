import React, { useEffect } from "react";
import img1 from "../../Images/Blood And Iron.jpeg";
import img2 from "../../Images/ferro aluminum.jpeg";
import img3 from "../../Images/Silicon Manganese.jpeg";
import { motion } from "framer-motion";
import BgBox from "./BgBox";
import HomeMid from "./HomeMid";
import DelayedComponent from "./DelayedComponent";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className=" w-full flex justify-center  pt-24">
        <BgBox rowNum={8} />
        <div className="left   w-[50%] grid place-content-center pl-20">
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
          <p className="text-5xl mt-24 text-zinc-700 text-gradient-right-to-left">
            'Global <span className="font-semibold">Reach</span>, Local{" "}
            <span className="font-semibold">Expertise</span>'
          </p>
        </div>
        <div className="right  w-[50%]">
          <DelayedComponent state="animate-bottom-to-top">
            <motion.div
              className="flex justify-center "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
              }}
            >
              <img
                alt=""
                src={img1}
                className="w-48  m-7 border hover:scale-110 transition duration-500 border-gray-400 rounded-lg"
              />
              <img
                alt=""
                src={img2}
                className="w-48 cover m-7 border hover:scale-110 transition duration-500 border-gray-400 rounded-lg "
              />
            </motion.div>
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
