import React, { useState } from 'react';
import API from "../../utils/API";
import Dropdown from "../Dropdown";
import "./index.css";

function Navbar() {
    const [show, setShow] = useState(false);
    return (
        <nav className="w-full sticky top-0 z-50 bg-white">
            <div className="mx-auto px-3 flex items-center justify-between nav">
                <div className="flex items-center">
                    {window.localStorage.getItem('user') !== null ? <a href="/dashboard" className="a-logo"><img alt="mtme logo" src="https://drive.google.com/thumbnail?id=1wrKHE8yDrIQ7GlOzDzb_1PvTbqPo7is7" className="object-scale-down h-10 w-10" />
                        <p className="ml-2 lg:ml-4 text-base lg:text-2xl font-bold text-gray-800 logo"><span className="text-red" >Music</span> To My <span className="text-red" >Eyes</span></p>
                    </a> :
                        <a href="/" className="a-logo"><img alt="mtme logo" src="https://drive.google.com/thumbnail?id=1wrKHE8yDrIQ7GlOzDzb_1PvTbqPo7is7" className="object-scale-down h-10 w-10" />
                            <p className="ml-2 lg:ml-4 text-base lg:text-2xl font-bold text-gray-800 logo"><span className="text-red" >Music</span> To My <span className="text-red" >Eyes</span></p>
                        </a>}
                </div>
                <div>
                    <div onClick={() => setShow(!show)} className="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                        <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={4} y1={8} x2={20} y2={8} />
                            <line x1={4} y1={16} x2={20} y2={16} />
                        </svg>
                    </div>
                    <div id="menu" className={show ? "lg:hidden block" : "md:block lg:block hidden"}>
                        <div onClick={() => setShow(!show)} className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                        {window.localStorage.getItem('user') === null ?
                            <ul className="flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white z-20">
                                <li className="text-gray-600 hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                                    <a href="/login">Login</a>
                                </li>
                                <li className="text-gray-600 hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                                    <a href="/signup">Sign Up</a>
                                </li>
                            </ul> :
                            <ul className="flex text-3xl md:text-base items-center md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white z-20">
                                <li className="text-gray-600 hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                                    <a href="/match">Match</a>
                                </li>
                                <li className="text-gray-600 hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                                    <a href="/dashboard">Dashboard</a>
                                </li>
                                <li className="text-gray-600 hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0 show-text">
                                    <a href="/profile-settings">Account</a>
                                </li>
                                <li className="text-gray-600 hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0 show-text">
                                    <a href="/" onClick={API.logoutUser}>Logout</a>
                                </li>
                                <Dropdown></Dropdown>
                            </ul>}
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
