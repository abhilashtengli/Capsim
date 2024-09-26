import React, { useEffect } from "react";
import img1 from "../../Images/Blood And Iron.jpeg";
import img2 from "../../Images/ferro aluminum.jpeg";
import img3 from "../../Images/Silicon Manganese.jpeg";
// import container from "../../Images/container.jpeg";
// import lab_working from "../../Images/lab_working.jpg";
import BgBox from "./BgBox";
import HomeMid from "./HomeMid";

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
          <h1 className="text-5xl text-zinc-700 text-gradient-right-to-left">
            Welcome to <span className="font-semibold text-5xl">Capsim</span>
          </h1>
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
          <div className="flex justify-center ">
            <img
              alt=""
              src={img1}
              className="w-48  m-7 border border-gray-400 rounded-lg"
            />
            <img
              alt=""
              src={img2}
              className="w-48 cover m-7 border border-gray-400 rounded-lg "
            />
          </div>
          <div className="flex justify-center">
            {/* <img
              alt=""
              src={img4}
              className="w-48 h-52 cover m-7 border border-gray-400 rounded-lg "
            /> */}
            <img
              alt=""
              src={img3}
              className="w-48 h-52 cover m-7 border border-gray-200 rounded-lg "
            />
          </div>
        </div>
      </div>

      <HomeMid />
    </>
  );
};

export default Home;
