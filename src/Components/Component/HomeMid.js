import React from "react";
import container from "../../Images/container.jpeg";
import lab_working from "../../Images/lab_working.jpg";
const HomeMid = () => {
  return (
    <div>
      <div
        className="absolute  lg:block -z-10 overflow-hidden rotate-90 mt-20 ml-96 blur-xl  lg:px-36"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1240/678] w-72 lg:w-[45.1875rem] overflow-hidden bg-gradient-to-tr from-blue-300/50 to-purple-200/50 opacity-30"
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
      <div className="mt-10  border-black flex justify-center">
        <div className="left w-[50%] pl-24   py-12 px-5">
          <h1 className="text-4xl  font-semibold text-zinc-600">
            What we offer?
          </h1>
          <p className="tracking-wide text-lg mt-5 text-zinc-600">
            <span className="font-semibold"> At capsim,</span> we are dedicated
            to being your premier partner in the
            <span className="font-semibold"> ferro-silico manganese </span>{" "}
            industry. Combining our strengths as both a
            <span className="font-semibold">producer/exporter </span> and a{" "}
            <span className="font-semibold">supplier/sourcer,</span> we offer a
            comprehensive range of high-quality ferro-silico manganese products
            tailored to meet the diverse needs of the{" "}
            <span className="font-semibold">global steelmaking industry </span>
          </p>
        </div>
        <div className="right w-[50%]  py-12 px-5">
          <h1 className="text-4xl  font-semibold text-zinc-600">Product</h1>
          <p className="tracking-wide text-lg mt-5 text-zinc-600">
            <span className="font-semibold">Ferro-silico manganese </span> is an
            essential <span className="font-semibold">ferroalloy</span> in the
            steelmaking industry, composed of manganese, silicon, and iron. This
            versatile alloy is renowned for enhancing the quality and
            performance of steel products through its key roles in deoxidation,
            desulfurization, and alloying.
          </p>
        </div>
      </div>
      <div className="mt-10  border-black flex justify-center pb-28">
        <div className="left w-[50%] pl-24   grid place-content-center">
          <h1 className="text-4xl  font-semibold text-zinc-600">Our Mission</h1>
          <p className="tracking-wide text-lg mt-5 text-zinc-600">
            Our mission is to{" "}
            <span className="font-semibold"> deliver exceptional </span>{" "}
            ferro-silico manganese solutions that enhance the quality,
            performance, and sustainability of steel products across various
            industries. By integrating in-house production with strategic
            sourcing, we ensure our clients receive reliable, cost-effective,
            and superior ferroalloy products that drive their success.
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
      </div>
    </div>
  );
};

export default HomeMid;
