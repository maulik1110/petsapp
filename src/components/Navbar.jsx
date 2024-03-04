import React, { useState } from "react";
import Logo from "../assets/logojpg.jpg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="px-8 py-1 bg-white text-xl font-bold w-full flex justify-between items-center">
      <div className="image">
        <img className="h-14" src={Logo} alt="" />
      </div>

      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className="menu none absolute top-[0.75rem] right-[0.75rem] flex-col space-x-0 justify-between h-[2rem] w-[2.25rem]"
      >
        <span className="h-[0.3rem] w-full bg-black text-white"></span>
        <span className="h-[0.3rem] w-full bg-black text-white"></span>
        <span className="h-[0.3rem] w-full bg-black text-white"></span>
      </div>

      <div className="navlinks ">
        <ul className={menuOpen ? "open" : ""}>
          {/* <ul className={'flex gap-8 mwn'} > */}

          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={"/faq"}>FAQ's</NavLink>
          </li>
          <li>
            <NavLink to={"/pets"}>Pets</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
