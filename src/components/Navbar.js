
import './NavbarStyle.css'
import { Menuitem } from "./Menuitem";
import { useState } from "react";
import { Link } from 'react-router-dom';
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
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>
                              {item.title}
                            </Link>
                        </li>
                    )
                })}
                <button className="button">Sign Up</button>

            </ul>
        </nav>
    );
};
export default Navbar;