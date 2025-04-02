import React from "react";
import { Link } from "react-router-dom";
import BookLogo from "../assets/bookicon.png";

const Header = () => {
    return (
        <header className="bg-blue-900 shadow-sm pr-20">
            <div className="flex items-center justify-between p-4 w-full">
                {/* Logo on the Left */}
                <div className="flex items-center">
                    <img className="w-8 mr-3" src={BookLogo} alt="web-logo" />
                    <p className="text-lg font-semibold text-white">ShelfWise-BookStore</p>
                </div>

                {/* Navigation on the Right */}
                <nav className="flex space-x-6">
                    <Link to="/books/home" className="text-white hover:underline">Home</Link>
                    <Link to="/" className="text-white hover:underline">Books</Link>
                    <Link to="/books/about" className="text-white hover:underline">About</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
