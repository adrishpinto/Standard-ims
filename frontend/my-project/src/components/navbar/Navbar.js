import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import ThemeSwitcher from "../ThemeSwitcher";

const li_style = "hover:text-gray-600 cursor-pointer dark:text-slate-300 dark:hover:opacity-70"
const active = "text-blue-700  cursor-pointer dark:text-white dark:hover:opacity-70"
const dark = ""

function Navbar(props ) {
    return (  
        <nav>
            <ul className=" h-20 w-full border dark:border-gray-700 font-semibold dark:bg-black bg-slate-100 flex flex-row text-4xl justify-center items-center space-x-24">
                <div className="absolute top-7 left-10"><ThemeSwitcher/></div>
                <Link to={"/products"}>
                    <li className={` ${props.name == "products"? `${active}` : `${li_style}`}`}>Product</li>
                </Link>
                <Link to="/categories">
                    <li className={` ${props.name == "categories"? `${active}` : `${li_style}`}`} >Categories</li>
                </Link>
                <Link to={"/orders"}>
                    <li className={` ${props.name == "orders"? `${active}` : `${li_style}`}`} >Orders</li>
                </Link>
                <Link to={"/userlist"}>
                    <li className={` ${props.name == "userlist"? `${active}` : `${li_style}`}`} >Users</li>
                </Link>
                <Link to={"/login"}>
                    <li  className="dark:text-white dark:hover:opacity-70  absolute right-16 text-2xl hover:cursor-pointer hover:text-blue-700 flex items-center top-5">
                         <i className="dark:text-white"><IoIosLogOut size={40} /></i>
                        <span>Logout</span>
                    </li>
                </Link>
            </ul>
            
        </nav>
    );
}

export default Navbar;