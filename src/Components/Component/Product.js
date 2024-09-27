import React, { useEffect } from "react";
import BgBox from "./BgBox";
import img1 from "../../Images/Silicon Manganese.jpeg";
import img2 from "../../Images/ferrosilicomanganese.jpg";
import DelayedComponent from "./DelayedComponent";
const Product = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="">
        <BgBox rowNum={5} />
        <DelayedComponent state="animate-left-to-right">
          <h1 className="text-4xl w-full  text-zinc-600 pt-32 font-semibold px-4 lg:px-0 lg:pl-40">
            Product
          </h1>
        </DelayedComponent>
        <DelayedComponent state="animate-bottom-to-top">
          <h2 className="text-3xl  text-zinc-600 pt-5 font-semibold px-4 lg:px-0 lg:pl-40 text-gradient-right-to-left">
            Ferro-Silico Manganese
          </h2>
        </DelayedComponent>
      </div>
      <div className=" w-full lg:mb-20 mb-5 ">
        <div className="intro py-7 lg:flex justify-between items-start">
          <div className="tracking-wide text-lg lg:text-justify leading-8  lg:pl-40 lg:px-0 px-4 lg:w-[57%]">
            <p>
              Ferro-silico manganese is an essential ferroalloy in the
              steelmaking industry, composed of manganese, silicon, and iron.
              This versatile alloy is renowned for enhancing the quality and
              performance of steel products through its key roles in
              deoxidation, desulfurization, and alloying.
            </p>
            <div className="mt-5 text-start">
              <h1 className="text-2xl font-semibold text-zinc-600">
                Application
              </h1>
              <p className="mt-3">Ferro-silico manganese is widely used in :</p>
              <h2>
                <span className="font-semibold">• Construction Steel:</span>{" "}
                Enhances structural integrity and performance.
              </h2>
              <h2>
                •<span className="font-semibold"> Automotive Steel:</span>{" "}
                Improves safety and durability in vehicle manufacturing.
              </h2>
              <h2>
                •<span className="font-semibold"> Heavy Machinery:</span>{" "}
                Provides strength and resilience for demanding applications.
              </h2>
            </div>
          </div>
          <div className=" lg:w-[43%] flex flex-col lg:flex-row items-center justify-center lg:px-0 px-4 ">
            <DelayedComponent state="animate-left-to-right">
              <img
                alt=""
                src={img1}
                className="lg:w-72 rounded-lg lg:mx-5 lg:-mt-96 hover:scale-110 transition duration-500"
              />
            </DelayedComponent>
            <DelayedComponent state="animate-right-to-left">
              <img
                alt=""
                src={img2}
                className="lg:w-72 lg:mt-28 cover rounded-lg my-5 hover:scale-110 transition duration-500"
              />
            </DelayedComponent>
          </div>
        </div>
        <div className="text-lg tracking-wide lg:text-justify lg:px-20">
          <h2 className="mt-16 font-semibold text-4xl  text-center text-gradient-right-to-left text-zinc-700">
            Grades Offered
          </h2>
          <p className="my-3 text-center px-4 lg:px-0">
            <span className="font-semibold">capsim</span> provides a variety of
            ferro-silico manganese grades to meet specific industrial
            requirements:
          </p>
          <DelayedComponent state="animate-left-to-right">
            <div className=" p-3 gap-4 grid lg:grid-cols-3">
              <h2 className="text-start border rounded-lg bg-blue-100 bg-opacity-20 p-2 border-gray-400 ">
                <span className="font-semibold ">
                  1. High Carbon Ferro-Silico Manganese
                </span>
                : Ideal for standard steel applications, enhancing strength and
                deoxidation properties.
              </h2>
              <h2 className="text-start border rounded-lg bg-blue-100 bg-opacity-20 p-2 border-gray-400  ">
                <span className="font-semibold ">
                  2. Medium Carbon Ferro-Silico Manganese
                </span>
                : Offers a balanced carbon content for improved alloying
                capabilities while maintaining mechanical strength.
              </h2>
              <h2 className="text-start border rounded-lg bg-blue-100 bg-opacity-20 p-2 border-gray-400  ">
                <span className="font-semibold ">
                  3. Low Carbon Ferro-Silico Manganese
                </span>
                : Perfect for specialty steel production, minimising carbon
                levels for enhanced ductility and formability.
              </h2>
            </div>
          </DelayedComponent>
        </div>
        <div className="text-lg tracking-wide text-justify lg:px-20">
          <h2 className="mt-16 font-semibold text-4xl  text-center text-gradient-right-to-left text-zinc-700">
            Key Benefits
          </h2>
          <DelayedComponent state="animate-left-to-right">
            <div className=" border-black p-3 gap-4 grid lg:grid-cols-2 mt-5">
              <h2 className="text-start border rounded-lg bg-blue-100 bg-opacity-20 p-2 border-gray-400 ">
                <span className="font-semibold ">Quality Enhancement: </span>
                Improves the strength and durability of steel, resulting in
                superior end products.
              </h2>
              <h2 className="text-start border rounded-lg bg-blue-100 bg-opacity-20 p-2 border-gray-400  ">
                <span className="font-semibold ">Versatile Applications: </span>
                Suitable for a wide range of steel grades, including
                construction, automotive, and industrial applications.
              </h2>
              <h2 className="text-start border rounded-lg bg-blue-100 bg-opacity-20 p-2 border-gray-400  ">
                <span className="font-semibold ">Cost Efficiency:</span>
                Cost Efficiency: Optimises production processes by reducing
                impurities, leading to costeffective steel manufacturing.
              </h2>
              <h2 className="text-start border rounded-lg bg-blue-100 bg-opacity-20 p-2 border-gray-400  ">
                <span className="font-semibold ">Sustainable Production:</span>
                Contributes to cleaner steelmaking practices by promoting
                environmentally responsible methods.
              </h2>
            </div>
          </DelayedComponent>
        </div>
      </div>
    </>
  );
};

export default Product;
