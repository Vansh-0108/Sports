import React, { useState } from "react";
import {Link, NavLink} from 'react-router-dom'
import logo from '../../assets/LogoSample.png';
import NavPointer from "./NavPointer";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

    return (
      <header className = {` bg-[#16292c] flex items-baseline ${isOpen ? "justify-center h-screen" : "justify-end"} md:justify-between px-[10%] py-2 inset-x-0 w-full sticky top-0 z-[9999px] border-b border-[#e6e6e6]`}>

        <div className = {`hidden md:flex border-2 p-2 rounded-xl justify-center items-center group hover:bg-[#D3AD7F] text-[1rem] ${!isOpen ? "block" : "hidden"}`}>
            <i className = " flex text-[#e6e6e6] cursor-pointer ml-2 group-hover:text-[#16292c]  fas fa-bars mx-2" id = "menu-btn"></i>
            <h1 className="mx-2 text-[#e6e6e6] uppercase group-hover:text-[#16292c] font-bold">Catalogue</h1>
        </div>

        <nav className = {`w-[80%] hidden md:flex justify-around ${!isOpen ? "block" : "hidden"}`}>
          <NavPointer link = '/' name = 'Home' />
          <NavPointer link = '/about' name = 'About' />
          <NavPointer link = '/products' name = 'Buy Products' />
          <NavPointer link = '/contact' name = 'Contact' />
        </nav>

        <button>
            <div onClick={() => setIsOpen(!isOpen)} 
            className = {`flex justify-center text-white text-[1rem] ${isOpen ? "fas fa-arrow-left mx-4" : "fas fa-bars"}`}></div>
        </button>

        <div className={` ${isOpen ? "block" : "hidden"}`}>
            <div className="text-xl flex-grow flex flex-col items-center">
              <div className = {`flex border-2 p-2 rounded-xl justify-center items-center group text-[1rem]`}>
                  <h1 className="mx-2 text-[#e6e6e6] uppercase group-hover:text-[#16292c] font-bold">Catalogue</h1>
              </div>
              <NavLink to="/" className="block my-2 text-[#e6e6e6]">
                Home
              </NavLink>
              <NavLink to="/about" className="block my-2 text-[#e6e6e6]">
                About
              </NavLink>
              <NavLink to="/products" className="block my-2 text-[#e6e6e6]">
                Products
              </NavLink>
              <NavLink to="/contact" className="block my-2 text-[#e6e6e6]">
                Contact
              </NavLink>
            </div>
        </div>
        
      </header>
    );
}

export default Header;