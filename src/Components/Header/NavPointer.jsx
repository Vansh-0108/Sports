import React from "react";
import {NavLink} from 'react-router-dom'

function NavPointer(props) {
    return (
          <NavLink 
            className = { ({isActive}) => `text-[1rem] capitalize mx-4 my-0 ${isActive ? "text-[#d3ad7f]" : "text-[#f5f5f5]"} hover:text-[color:#d3ad7f] hover:border-b-[color:var(--main-color)] hover:pb-2 hover:border-b-[0.1rem] hover:border-solid`}
            to = {props.link} >
          {props.name}
          </NavLink>
        // <h1 className="text-white">Hello</h1>
    );
}

export default NavPointer;