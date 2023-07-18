
import './NavbarStyle.css'
import { Menuitem } from "./Menuitem";
import { useState } from "react";
const Navbar = () => {
    const[clicked,setClicked]=useState(false);
   const  handleClick=()=>{
    setClicked(!clicked)
    }
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Trippy</h1>


            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked ?"fas fa-times":"fas fa-bars"}></i>
            </div>
            <ul className={clicked?"nav-menu active":"nav-menu"}>
                {Menuitem.map((item, i) => {
                    return (
                        <li key={i}>
                            <a className={item.cName}href={item.url}>
                                <i className={item.icon}></i>
                              {item.title}
                            </a>
                        </li>
                    )
                })}
                <button className="button">Sign Up</button>

            </ul>
        </nav>
    );
};
export default Navbar;