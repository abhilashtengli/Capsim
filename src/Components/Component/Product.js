import React, { useEffect } from "react";
import BgBox from "./BgBox";
import img1 from "../../Images/Silicon Manganese.jpeg";
import img2 from "../../Images/ferrosilicomanganese.jpg";
const Product = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div>
        <BgBox rowNum={5} />
        <h1 className="text-4xl w-full  text-zinc-600 pt-32 font-semibold pl-40">
          Product
        </h1>
        <h2 className="text-3xl text-zinc-600 pt-5 font-semibold pl-40 text-gradient-right-to-left">
          Ferro-Silico Manganese
        </h2>
      </div>
      <div className=" w-full mb-20">
        <div className="intro py-7 flex justify-between items-start">
          <div className="tracking-wide text-lg text-justify leading-8  pl-40  w-[57%]">
            <p>
              Ferro-silico manganese is an essential ferroalloy in the
              steelmaking industry, composed of manganese, silicon, and iron.
              This versatile alloy is renowned for enhancing the quality and
              performance of steel products through its key roles in
              deoxidation, desulfurization, and alloying.
            </p>
            <div className="mt-5 text-start ">
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
          <div className=" w-[43%] flex items-center justify-center ">
            <img alt="" src={img1} className="w-72 rounded-lg mx-5 -mt-96" />
            <img
              alt=""
              src={img2}
              className="w-72 mt-28 cover rounded-lg my-5"
            />
          </div>
        </div>
        <div className="text-lg tracking-wide text-justify px-20">
          <h2 className="mt-16 font-semibold text-4xl  text-center text-gradient-right-to-left text-zinc-700">
            Grades Offered
          </h2>
          <p className="my-3 text-center">
            <span className="font-semibold">capsim</span> provides a variety of
            ferro-silico manganese grades to meet specific industrial
            requirements:
          </p>
          <div className=" border-black p-3 gap-4 grid grid-cols-3">
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
              : Perfect for specialty steel production, minimising carbon levels
              for enhanced ductility and formability.
            </h2>
          </div>
        </div>
        <div className="text-lg tracking-wide text-justify px-20">
          <h2 className="mt-16 font-semibold text-4xl  text-center text-gradient-right-to-left text-zinc-700">
            Key Benefits
          </h2>

          <div className=" border-black p-3 gap-4 grid grid-cols-2 mt-5">
            <h2 className="text-start border rounded-lg bg-blue-100 bg-opacity-20 p-2 border-gray-400 ">
              <span className="font-semibold ">Quality Enhancement: </span>
              Improves the strength and durability of steel, resulting in
              superior end products.
            </h2>
            <h2 className="text-start border rounded-lg bg-blue-100 bg-opacity-20 p-2 border-gray-400  ">
              <span className="font-semibold ">Versatile Applications: </span>
              Suitable for a wide range of steel grades, including construction,
              automotive, and industrial applications.
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
        </div>
      </div>
    </>
  );
};

export default Product;
