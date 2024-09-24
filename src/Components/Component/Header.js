import React from "react";
import cspsim_logo from "../../Images/capsim_logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="border-b border-blue-200 w-full py-5 px-20 flex justify-between bg-blue-100 fixed bg-opacity-30">
        <div className="left w-[40%]">
          <Link to="/">
            <img alt="" src={cspsim_logo} className="w-32" />
          </Link>
        </div>
        <div className="right   w-[60%] grid place-content-center">
          <ul className=" flex justify-center text-lg">
            <li className="mx-16 text-lg font-semibold text-blue-500 border bg-white rounded-lg bg-opacity-50 px-3">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-16 text-lg font-semibold text-blue-500 border bg-white rounded-lg bg-opacity-50 px-3">
              <Link to="/about">About</Link>
            </li>
            <li className="mx-16 text-lg font-semibold text-blue-500 border bg-white rounded-lg bg-opacity-50 px-3">
              <Link to="/product">Product</Link>
            </li>
            <li className="mx-16 text-lg font-semibold text-blue-500 border bg-white rounded-lg bg-opacity-50 px-3">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
