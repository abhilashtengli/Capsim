import React from "react";
import capsim_img from "../../Images/capsim_logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="  border-black bg-blue-200 md:pl-10 lg:pl-0 md:grid grid-cols-2 md:place-content-center lg:grid lg:grid-cols-3 lg:place-content-center bg-opacity-30 mt-10 lg:mt-0 pt-5  lg:pt-10 pb-6 ">
        <div className=" border-black gap-3 lg:grid pl-5 place-content-center">
          <img className=" w-24 lg:w-20 ml-1" alt="" src={capsim_img} />
          <section className=" flex lg:justify-center gap-3 items-start lg:mt-0 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-5 h-5"
            >
              <path
                fill="#4682b4"
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </svg>
            <p className="w-60 text-base font-semibold text-zinc-600">
              28-12-13/2 2nd floor, Suryabagh, Visakhapatnam, Andhra Pradesh Pin
              code - 530020
            </p>
          </section>
          <section className="flex  gap-3 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5"
            >
              <path
                fill="#4682b4"
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              />
            </svg>
            <p className="text-base font-semibold text-zinc-600 -mt-0.5">
              +91 9110778178
            </p>
          </section>
          <section className="flex  gap-3 items-start mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5"
            >
              <path
                fill="#4682b4"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>
            <p className="text-base font-semibold text-zinc-600 -mt-1">
              info@capsim.in
            </p>
          </section>
        </div>
        <div className="hidden  border-black gap-2 lg:-mt-5 lg:flex flex-col items-center justify-center">
          <h1 className="text-lg text-zinc-600 font-semibold">QUICK LINKS</h1>
          <ul className="text-zinc-600 text-base font-semibold -ml-9">
            <Link to="/">
              <li className="my-1 hover:text-black">Home</li>
            </Link>
            <Link to="/about">
              <li className="my-1 hover:text-black">About Us</li>
            </Link>
            <Link to="/product">
              <li className="my-1 hover:text-black">Product</li>
            </Link>
            <Link to="/contact">
              <li className="my-1 hover:text-black">Contact</li>
            </Link>
          </ul>
        </div>
        <div className=" border-black lg:mt-0 mt-5 flex flex-col gap-4 justify-start items-center">
          <h1 className="text-lg text-zinc-600 font-semibold tracking-wider lg:tracking-normal">
            SOCIAL LINKS
          </h1>
          <ul className="flex gap-16 lg:gap-7 mt-5 lg:mt-0">
            <a
              href="http://www.linkedin.com/in/chiraag-lodha-46abb132b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-8 h-8"
                >
                  <path
                    fill="#4682b4"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </li>
            </a>
            <a
              href="https://x.com/capsim505"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-8 h-8"
                >
                  <path
                    fill="#4682b4"
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </li>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61566286208207"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-8 h-8"
                >
                  <path
                    fill="#4682b4"
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                  />
                </svg>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
