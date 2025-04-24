import React from "react";

const Navegation = () => {
    return (
        <nav className="bg-black text-white shadow-md border-b-4 border-transparent hover:border-blue-500">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                    Pixel On Line
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="text-white hover:text-gray-300 hover:font-semibold hover:text-neon-500 transition-all duration-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/login" className="text-white hover:text-gray-300 hover:font-semibold hover:text-neon-500 transition-all duration-300">
                            Login
                        </a>
                    </li>
                    <li>
                        <a href="/register" className="text-white hover:text-gray-300 hover:font-semibold hover:text-neon-500 transition-all duration-300">
                            Register
                        </a>
                    </li>
                    <li>
                        <a href="/product" className="text-white hover:text-gray-300 hover:font-semibold hover:text-neon-500 transition-all duration-300">
                            Products
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navegation;