import React from "react";

import BookLogo from "../assets/bookicon.png"

const Header = () => {
    return (
        <header className="bg-blue-900 shadow-sm">
            <div className="container ml-10 flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img className="w-8 mr-5" src={BookLogo} alt="web-logo" />
                    <p className="text-lg font-semibold text-white">ShelfWise-BookStore</p>
                </div>
            </div>
        </header>
    )
}

export default Header;
