import React, { useState } from "react";
import cspsim_logo from "../../Images/capsim_logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden border-b z-20 border-blue-200 w-full py-5 px-20 lg:flex justify-between bg-blue-100 fixed bg-opacity-80">
        <div className="left lg:w-[40%]">
          <Link to="/home">
            <img alt="" src={cspsim_logo} className="w-32" />
          </Link>
        </div>
        <div className=" w-[60%] md:grid place-content-center">
          <ul className=" flex justify-center text-lg">
            <Link to="/home">
              {" "}
              <li className="mx-14 text-lg font-semibold hover:border-blue-400 transition duration-400 hover:text-blue-900 text-blue-500 border border-gray-300 bg-white rounded-lg bg-opacity-50 px-3">
                Home
              </li>{" "}
            </Link>
            <Link to="/about">
              {" "}
              <li className="mx-14 text-lg font-semibold hover:border-blue-400 hover:text-blue-900 text-blue-500 border border-gray-300 bg-white rounded-lg bg-opacity-50 px-3">
                About
              </li>{" "}
            </Link>
            <Link to="/product">
              <li className="mx-14 text-lg font-semibold hover:border-blue-400 hover:text-blue-900 text-blue-500 border border-gray-300 bg-white rounded-lg bg-opacity-50 px-3">
                Product
              </li>{" "}
            </Link>
            <Link to="/contact">
              {" "}
              <li className="mx-14 text-lg font-semibold hover:border-blue-400 hover:text-blue-900 text-blue-500 border border-gray-300 bg-white rounded-lg bg-opacity-50 px-3">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="lg:hidden border-b z-40 flex justify-between items-center border-blue-200 w-full py-5 px-5  bg-blue-100 fixed bg-opacity-80">
        <div className="left ">
          <Link to="/home" onClick={() => setMenuOpen(false)}>
            <img
              alt=""
              src={cspsim_logo}
              className="w-28 md:ml-5 ml-2 border-black"
            />
          </Link>
        </div>
        <div>
          <FontAwesomeIcon
            className=" w-5 h-8 text-blue-500 mr-3"
            icon={menuOpen ? faXmark : faBars}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {menuOpen && (
        <div
          className={`h-screen w-screen fixed  flex flex-col justify-between items-center z-30  border-red-500  lg:hidden right-0 left-0  bg-white  transition duration-500 ease-in-out transform translate-x-0`}
        >
          <ul className="h-screen w-screen border-black font-bold space-y-6 text-center text-zinc-600 text-2xl  grid place-content-center">
            <motion.li
              className="px-8 py-2 text-blue-500"
              initial={{
                y: 10,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0,
              }}
            >
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </motion.li>
            <motion.li
              className="px-4 py-2 text-blue-500"
              initial={{
                y: 10,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.2,
              }}
            >
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </motion.li>
            <motion.li
              className="px-4 py-2 text-blue-500"
              initial={{
                y: 10,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.4,
              }}
            >
              <Link to="/product" onClick={() => setMenuOpen(false)}>
                Product
              </Link>
            </motion.li>
            <motion.li
              className="px-4 py-2 text-blue-500"
              initial={{
                y: 10,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 1,
              }}
            >
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </motion.li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
