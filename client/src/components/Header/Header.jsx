import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [logoutModal, setLogoutModal] = useState(false);

    const sidebarHandler = () => {
        console.log("Sidebar is Open");
    }

    return (
        <div id="header" className="h-14 bg-[#eee]">
            <div className="flex justify-between max-w-[1600px] mx-auto h-full px-2 2xl:px-0">
                <div className="flex items-center h-full">
                    <div className="h-full">
                        <Link to={"/"} className="h-full flex items-center">
                            <img src="Logo" alt="logo" className="h-10 w-10" />
                        </Link>
                    </div>
                    <div className="hidden lg:flex h-full">
                        <Link to={"/"} className="px-1 lg:px-2 hover:border-b-[5px] hover:border-b-blue-700 pt-[16px] transition duration-150 ease-out hover:ease-in">
                            <p className="font-poppins opacity-75 hover:opacity-100">STORE</p>
                        </Link>
                        <Link to={"/"} className="px-1 lg:px-2 hover:border-b-[5px] hover:border-b-blue-700 pt-[16px] transition duration-150 ease-out hover:ease-in">
                            <p className="font-poppins opacity-75 hover:opacity-100">FAQ</p>
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:flex h-full items-center">
                    {logoutModal === true ? (
                        <Link to={"/"}
                            onClick={() => setLogoutModal(false)}
                            className="px-1 lg:px-2 h-full hover:border-b-[5px] hover:border-b-blue-700  transition duration-150 ease-out hover:ease-in">
                            <div className="flex items-center pt-[16px] opacity-75 hover:opacity-100">
                                <p className="font-poppins pr-1">SIGN OUT</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>
                            </div>
                        </Link>
                    ) : (
                        <Link to={"/"}
                            onClick={() => setLogoutModal(true)}
                            className="px-1 lg:px-2 h-full hover:border-b-[5px] hover:border-b-blue-700  transition duration-150 ease-out hover:ease-in">
                            <div className="flex items-center pt-[16px] opacity-75 hover:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <p className="font-poppins pl-2">LOGIN</p>
                            </div>
                        </Link>
                    )}
                </div>
                <div className="flex lg:hidden">
                    <button onClick={sidebarHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header