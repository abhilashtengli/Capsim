import React from "react";
import Header from "./Header";
import BgBox from "./BgBox";
import img1 from "../../Images/Blood And Iron.jpeg";
import img2 from "../../Images/truck container.jpeg";
import img3 from "../../Images/ferro aluminum.jpeg";
import BgColor from "./bgColor";
const AboutUs = () => {
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

      <div>
        <BgBox rowNum={5} />
        <h1 className="text-4xl w-full  text-zinc-600   pt-32 font-semibold pl-40">
          About
        </h1>
      </div>
      <div className=" w-full ">
        <div className="intro py-7 flex justify-between">
          <p className="tracking-wide text-lg text-justify leading-8  pl-40  w-[60%]">
            At Capsim, we pride ourselves on being a trusted and leading partner
            in the{" "}
            <span className="font-semibold">
              ferro silico manganese industry
            </span>
            . As both a{" "}
            <span className="font-semibold"> producer/exporter </span> and
            <span className="font-semibold"> supplier/sourcer </span>, we bring
            a unique combination of expertise to offer a comprehensive range of
            high quality ferro silico manganese products. Our solutions are
            specifically tailored to meet the diverse demands of the{" "}
            <span className="font-semibold"> global steelmaking industry</span>.
            Our mission is simple yet impactful to provide exceptional ferro
            silico manganese solutions that elevate the quality, performance,
            and sustainability of steel products across various sectors. Through
            a strategic blend of in house production and global sourcing, we
            ensure our clients receive reliable, cost effective, and superior
            ferroalloy products that support their success.
          </p>
          <div className=" w-[40%] flex items-center justify-center ">
            <img alt="" src={img1} className="w-56 rounded-lg mx-5" />
            <div className=" flex flex-col justify-between py-4">
              <img alt="" src={img2} className="w-44 cover rounded-lg my-5" />
              <img alt="" src={img3} className="w-44 cover rounded-lg my-5" />
            </div>
          </div>
        </div>

        <div className=" w-full border-black mb-3 text-lg tracking-wide text-justify p-20">
          <div className="card1 grid place-content-center">
            <h1 className="text-4xl text-gradient-right-to-left   text-center font-semibold text-zinc-600">
              What we Do?
            </h1>
            <p className="mt-7 text-lg text-center">
              <span className="font-semibold text-xl">capsim </span> operates on
              a dual front to provide unparalleled value to our customers:
            </p>
            <div className="flex gap-4 mt-4">
              <div className="border  w-[50%] bg-blue-100 bg-opacity-20 p-5 border-gray-400 rounded-lg">
                <p className=" font-bold">1. Production & Exportation:</p>
                <p className=" ml-5 leading-7 mt-3">
                  <span className="font-semibold">
                    Manufacturing Excellence:{" "}
                  </span>{" "}
                  We produce a wide array of ferro-silico manganese grades using
                  state-of-the-art technology and stringent quality control
                  measures. Our in house production ensures consistent quality
                  and reliability.
                </p>
                <p className=" ml-5 leading-7 mt-3">
                  <span className="font-semibold">Export Capabilities: </span>
                  With our strategic location in Andhra Pradesh, India, we
                  efficiently export our high-quality ferro-silico manganese to
                  clients worldwide, ensuring timely delivery and competitive
                  pricing.
                </p>
              </div>
              <div className="border  w-[50%] bg-blue-100 bg-opacity-20 p-5 border-gray-400  rounded-lg">
                <p className="font-bold">2. Sourcing & Supply:</p>
                <p className=" ml-5 leading-7 mt-3">
                  <span className="font-semibold">
                    Extensive Supplier Network:{" "}
                  </span>{" "}
                  In addition to our own production, we source ferrosilico
                  manganese from trusted global manufacturers. This allows us to
                  offer a diverse range of grades and specifications to meet the
                  unique requirements of our clients.
                </p>
                <p className=" ml-5 leading-7 mt-3">
                  <span className="font-semibold">Customised Solutions: </span>{" "}
                  Our sourcing expertise enables us to provide tailored alloying
                  solutions, ensuring that our customers receive the exact
                  specifications needed for their specific steelmaking
                  processes.
                </p>
              </div>
            </div>
          </div>
          <BgColor />

          <div className="card2 grid place-content-center mt-16">
            <h1 className="text-4xl  text-gradient-right-to-left  text-center font-semibold text-zinc-600">
              Why Choose capsim?{" "}
            </h1>
            <div className="border grid grid-cols-3 gap-4 mt-5 text-start">
              <div className="box1 border rounded-lg bg-blue-100 bg-opacity-20 p-5 border-gray-400 ">
                <p className=" leading-7 ">
                  <span className="font-semibold"> Unmatched Quality: </span>{" "}
                  Whether produced in-house or sourced from our trusted
                  partners, every batch of ferro-silico manganese meets the
                  highest industry standards, ensuring superior performance in
                  your applications.
                </p>
              </div>
              <div className="box2 border rounded-lg bg-blue-100 bg-opacity-20 p-5 border-gray-400 ">
                <p className=" leading-7 ">
                  <span className="font-semibold">
                    {" "}
                    Comprehensive Offerings:{" "}
                  </span>{" "}
                  Our hybrid approach allows us to offer a broader range of
                  products, providing flexibility and customisation to meet
                  diverse steelmaking needs.
                </p>
              </div>
              <div className="box3 border rounded-lg bg-blue-100 bg-opacity-20 p-5 border-gray-400 ">
                <p className=" leading-7 ">
                  <span className="font-semibold"> Global Reach:</span> With a
                  robust export infrastructure and a worldwide supplier network,
                  we serve clients across the globe with efficiency and
                  reliability.
                </p>
              </div>
              <div className="box4 border rounded-lg bg-blue-100 bg-opacity-20 p-5 border-gray-400 ">
                <p className="  leading-7 ">
                  <span className="font-semibold">
                    {" "}
                    Sustainable Practices:{" "}
                  </span>{" "}
                  We are committed to environmentally responsible production and
                  sourcing methods, minimising our carbon footprint and
                  supporting sustainable steelmaking practices
                </p>
              </div>
              <div className="box5 border rounded-lg bg-blue-100 bg-opacity-20 p-5 border-gray-400 ">
                <p className=" leading-7">
                  <span className="font-semibold">
                    {" "}
                    Customer-Centric Service:{" "}
                  </span>{" "}
                  Your success is our priority. We work closely with you to
                  understand your specific requirements, offering personalised
                  solutions and responsive support to ensure your satisfaction.
                </p>
              </div>
            </div>
          </div>
          <BgColor />

          <div className="card3 grid place-content-center mt-16">
            <h1 className="text-4xl text-gradient-right-to-left   text-center font-semibold text-zinc-600">
              Our Vision
            </h1>
            <p className="leading-7 border rounded-lg bg-blue-100 bg-opacity-20 p-5 border-gray-400 mt-5">
              To be the global leader in ferro-silico manganese, recognised for
              our integrated approach that combines superior production
              capabilities with strategic sourcing. We aim to set new benchmarks
              in quality, sustainability, and customer service, empowering steel
              manufacturers worldwide to achieve excellence.
            </p>
          </div>
          <BgColor />
          <div className="card3 grid place-content-center mt-16">
            <h1 className="text-4xl text-gradient-right-to-left   text-center font-semibold text-zinc-600">
              Our Values
            </h1>

            <div className="border text-start grid grid-cols-3 gap-4 mt-5">
              <div className="box1 border rounded-lg bg-blue-100 bg-opacity-20 p-5 border-gray-400 ">
                <p className=" leading-7">
                  <span className="font-semibold">Quality Assurance: </span>
                  Commitment to maintaining the highest standards in every
                  aspect of our business.
                </p>
              </div>
              <div className="box1 border rounded-lg bg-blue-100 bg-opacity-20 p-5 border-gray-400 ">
                <p className=" leading-7 ">
                  <span className="font-semibold"> Innovation: </span>
                  Continuously improving our processes and products to meet
                  evolving industry demands.
                </p>
              </div>
              <div className="box1 border rounded-lg bg-blue-100 bg-opacity-20 p-5 border-gray-400 ">
                <p className=" leading-7 ">
                  <span className="font-semibold">Integrity: </span>
                  Conducting our business with honesty, transparency, and
                  ethical practices.
                </p>
              </div>
              <div className="box1 border rounded-lg bg-blue-100 bg-opacity-20 p-5 border-gray-400 ">
                <p className=" leading-7 ">
                  <span className="font-semibold">Sustainability: </span>
                  Prioritising environmentally friendly practices in production
                  and sourcing.
                </p>
              </div>
              <div className="box1 border rounded-lg bg-blue-100 bg-opacity-20 p-5 border-gray-400 ">
                <p className=" leading-7 ">
                  <span className="font-semibold">Customer Focus: </span>
                  Building long-term relationships through exceptional service
                  and tailored solutions
                </p>
              </div>
            </div>
          </div>
          <BgColor />

          <div className="card3 grid place-content-center mt-16">
            <h1 className="text-4xl text-gradient-right-to-left   text-center font-semibold text-zinc-600">
              Join Us on Our Journey
            </h1>
            <p className="leading-7 border rounded-lg bg-blue-100 bg-opacity-20 p-5 border-gray-400 mt-5">
              Whether you're seeking high-quality ferro-silico manganese
              directly from our production lines or looking for specialised
              sourcing solutions, capsim is your trusted partner. Explore our
              diverse product offerings, learn more about our integrated
              approach, and discover how we can support your business in
              achieving superior steel quality and performance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
