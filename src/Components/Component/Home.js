import React from "react";
import Header from "./Header";
import img1 from "../../Images/Blood And Iron.jpeg";
import img2 from "../../Images/ferro aluminum.jpeg";
import img3 from "../../Images/Silicon Manganese.jpeg";
// import container from "../../Images/container.jpeg";
// import lab_working from "../../Images/lab_working.jpg";
import BgBox from "./BgBox";
import HomeMid from "./HomeMid";

const Home = () => {
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

      {/* <div className="mt-10  border-black flex justify-center">
        <div className="left w-[50%] pl-24   py-12 px-5">
          <h1 className="text-4xl  font-semibold text-zinc-600">
            What we offer?
          </h1>
          <p className="tracking-wide text-lg mt-5 text-zinc-600">
            At capsim, we are dedicated to being your premier partner in the
            ferro-silico manganese industry. Combining our strengths as both a
            producer/exporter and a supplier/sourcer, we offer a comprehensive
            range of high-quality ferro-silico manganese products tailored to
            meet the diverse needs of the global steelmaking industry
          </p>
        </div>
        <div className="right w-[50%]  py-12 px-5">
          <h1 className="text-4xl  font-semibold text-zinc-600">Product</h1>
          <p className="tracking-wide text-lg mt-5 text-zinc-600">
            Ferro-silico manganese is an essential ferroalloy in the steelmaking
            industry, composed of manganese, silicon, and iron. This versatile
            alloy is renowned for enhancing the quality and performance of steel
            products through its key roles in deoxidation, desulfurization, and
            alloying.
          </p>
        </div>
      </div>
      <div className="mt-10  border-black flex justify-center pb-28">
        <div className="left w-[50%] pl-24   grid place-content-center">
          <h1 className="text-4xl  font-semibold text-zinc-600">Our Mission</h1>
          <p className="tracking-wide text-lg mt-5 text-zinc-600">
            Our mission is to deliver exceptional ferro-silico manganese
            solutions that enhance the quality, performance, and sustainability
            of steel products across various industries. By integrating in-house
            production with strategic sourcing, we ensure our clients receive
            reliable, cost-effective, and superior ferroalloy products that
            drive their success.
          </p>
        </div>
        <div className="right w-[50%]  flex justify-center">
          <img
            alt=""
            className="w-48 m-10 border border-gray-400 rounded-lg"
            src={container}
          />
          <img
            alt=""
            className="w-48 m-10 border border-gray-400 rounded-lg"
            src={lab_working}
          />
        </div>
      </div> */}
      <HomeMid />
    </>
  );
};

export default Home;
