import React from "react";

const Footer = () => {
    return (
        <footer className="bg-blue-900 shadow-sm fixed bottom-0 left-0 right-0">
            <div className="container mx-auto flex items-center justify-between p-4 flex-col">
                <div className="flex items-center">
                    <p className="text-base font-normal text-white">
                        &copy; {new Date().getFullYear()} ShelfWise-BookStore. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
