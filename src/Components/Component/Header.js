import React from "react";
import cspsim_logo from "../../Images/capsim_logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="border-b border-blue-200 w-full py-5 px-20 flex justify-between bg-blue-100 fixed bg-opacity-50">
        <div className="left w-[40%]">
          <Link to="/">
            <img alt="" src={cspsim_logo} className="w-32" />
          </Link>
        </div>
        <div className="right   w-[60%] grid place-content-center">
          <ul className=" flex justify-center text-lg">
            <Link to="/">
              {" "}
              <li className="mx-16 text-lg font-semibold hover:bg-orange-400 hover:bg-opacity-45 hover:border-blue-300 transition duration-400 hover:text-blue-900 text-blue-500 border border-gray-300 bg-white rounded-lg bg-opacity-50 px-3">
                Home
              </li>{" "}
            </Link>
            <Link to="/about">
              {" "}
              <li className="mx-16 text-lg font-semibold hover:text-blue-900 text-blue-500 border border-gray-300 bg-white rounded-lg bg-opacity-50 px-3">
                About
              </li>{" "}
            </Link>
            <Link to="/product">
              <li className="mx-16 text-lg font-semibold hover:text-blue-900 text-blue-500 border border-gray-300 bg-white rounded-lg bg-opacity-50 px-3">
                Product
              </li>{" "}
            </Link>
            <Link to="/contact">
              {" "}
              <li className="mx-16 text-lg font-semibold hover:text-blue-900 text-blue-500 border border-gray-300 bg-white rounded-lg bg-opacity-50 px-3">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
