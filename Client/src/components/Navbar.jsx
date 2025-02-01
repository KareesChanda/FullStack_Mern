import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
           <div>
                 <nav className="bg-gray-800 text-white px-3 py-3 shadow-lg">
                    <div className="max-w-7xl mx-auto px-2" >
                        <div className="flex justify-between items-center h-18 ">
                            
                            < Link to="/">
                            <div className="flex-shrink-0 text-2xl font-bold">
                                <a href="/" className="hover:transition duration-700 ease-in-out"> Ekaleh Estates </a>
                            </div>
                            </Link>

                            <div className="flex items-center">
                                <form className="flex p-3 items-center">
                                    <input type="text" placeholder="Search..."
                                    className="bg-transparent focus:outline-none">
                                    </input>
                                    <FaSearch className="text-slate-600" />
                                </form>

                            </div>

                            <div >
                                <ul className="flex gap-4">
                                    <Link to="/">
                                    <li className="hidden sm:inline text-slate-300 hover:underline"> Home</li>
                                    </Link>

                                    <Link to="/About">
                                    <li className="hidden sm:inline text-slate-300 hover:underline"> About</li>
                                    </Link>

                                    <Link to="/sign-in">
                                    <li className=" sm:inline text-slate-300 hover:underline"> SignIn</li>
                                    </Link>
                                </ul> 
                            </div>
                            
                        </div>
                        
                    </div>
                 </nav>

           </div>       
    )
}

export default Navbar;
