import React, { useEffect } from "react";
import Header from "./Header";
import img1 from "../../Images/Blood And Iron.jpeg";
import img2 from "../../Images/ferro aluminum.jpeg";
import img3 from "../../Images/Silicon Manganese.jpeg";
// import container from "../../Images/container.jpeg";
// import lab_working from "../../Images/lab_working.jpg";
import BgBox from "./BgBox";
import HomeMid from "./HomeMid";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Header />
      <BgBox rowNum={50} />
      <div
        className="absolute  lg:block -z-10 overflow-hidden rotate-45 blur-xl  lg:px-36"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1240/678] w-72 lg:w-[45.1875rem] overflow-hidden bg-gradient-to-tr from-blue-400/50 to-purple-200/50 opacity-30"
          style={{
            clipPath: `polygon( 64.1% 74.1%,
              75.64% 87.44%,
53.1% 42.24%,
127.725% 75.239%,
122.265% 45.143%,
54.069% 61.34%,
97.15% 43.55%,
61.404% 63.648%,
60.784% 79.996%,
69.825% 85.701%,
28.476% 21.735%,
20.075% 56.991%,
0.149% 96.701%,
17.363% 97%,
33.948% 94.464%,
10.452% 128.964%,
57.798% 34.398%`,
          }}
        ></div>
      </div>
      <div
        className="absolute  lg:block -z-10 overflow-hidden rotate-180 blur-xl  lg:px-36"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1240/678] w-72 lg:w-[45.1875rem] overflow-hidden bg-gradient-to-tr from-purple-400/50 to-purple-200/50 opacity-30"
          style={{
            clipPath: `polygon( 64.1% 74.1%,
              75.64% 87.44%,
53.1% 42.24%,
127.725% 75.239%,
122.265% 45.143%,
54.069% 61.34%,
97.15% 43.55%,
61.404% 63.648%,
60.784% 79.996%,
69.825% 85.701%,
28.476% 21.735%,
20.075% 56.991%,
0.149% 96.701%,
17.363% 97%,
33.948% 94.464%,
10.452% 128.964%,
57.798% 34.398%`,
          }}
        ></div>
      </div>

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
      <Footer />
    </>
  );
};

export default Home;
