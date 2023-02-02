import React from "react";

import { navLinks } from "../constants";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="nav flex py-6 px-10 justify-between items-center bg-primary h-17">
      <div className="logo">
        <img className="w-44 px-5" src={logo} alt="logo" />
      </div>
      <div className="navlinks">
        <ul className="list-none sm:flex hidden justify-start items-start flex-1 pl-10 font-montserrat">
          {navLinks.map((nav) => (
            <li key={nav.id} className="text-white px-2 text-lg fontMont">
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center px-10">
        <p className="text-white pr-4">
          <AiOutlineShoppingCart size={"1.75rem"} />
        </p>
        <h1 className="text-white flex px-2 items-center border-2 rounded-3xl p-1">
          <p className="pr-2">
            <AiOutlineUser size={"1.75rem"} />
          </p>
          Account
          <p className="pl-2">
            <IoIosArrowDown size={"1.25rem"} />
          </p>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
