import React from "react";
import {Link} from 'react-router-dom'
import logo from '../../assets/LogoSample.png';
import NavPointer from "./NavPointer";

function Header() {
    return (
      <header className = "bg-[#16292c] flex items-baseline justify-between px-[10%] py-2 inset-x-0 w-full sticky top-0 z-[9999px] border-b border-[#e6e6e6]">

        <div className = "flex border-2 p-2 rounded-xl justify-center items-center group hover:bg-[#D3AD7F] text-[1rem]">
            <i className = " flex text-[#e6e6e6] cursor-pointer ml-2 group-hover:text-[#16292c]  fas fa-bars mx-2" id = "menu-btn"></i>
            <h1 className="mx-2 text-[#e6e6e6] uppercase group-hover:text-[#16292c] font-bold">Catalogue</h1>
        </div>

        <nav className = "w-[80%] flex justify-around">
          <NavPointer link = '/' name = 'Home' />
          <NavPointer link = '/about' name = 'About' />
          <NavPointer link = '/projects' name = 'Buy Products' />
          {/* <NavPointer link = '/experience' name = 'Experience' />
          <NavPointer link = '/resume' name = 'Resume' />
          <NavPointer link = '/hobbies' name = 'Hobbies' /> */}
          <NavPointer link = '/contact' name = 'Contact' />
        </nav>

        
        
      </header>
    );
}

export default Header;