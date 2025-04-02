import React from "react";
import echoesImage from "../assets/echoes.png";
import lastember from "../assets/lastember.png";
import whisper from "../assets/whisper.png";

function HomeScreen() {
  return (
    <div>
      <main className="p-5 bg-gray-50 min-h-screen">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            Welcome to ShelfWise Bookstore
          </h1>
          <p className="text-gray-700 text-lg">
            Your one-stop shop for all your reading needs!
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Featured Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img src={echoesImage} alt="echos image" className="w-72" />
              <h3 className="font-medium text-lg mb-2">Book Title 1</h3>
              <p className="text-gray-600 mb-1">Author: Author Name</p>
              <p className="text-gray-600 font-semibold">Price: $10.99</p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img src={lastember} alt="echos image" className="w-72" />
              <h3 className="font-medium text-lg mb-2">Book Title 2</h3>
              <p className="text-gray-600 mb-1">Author: Author Name</p>
              <p className="text-gray-600 font-semibold">Price: $12.99</p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img src={whisper} alt="echos image" className="w-72" />
              <h3 className="font-medium text-lg mb-2">Book Title 3</h3>
              <p className="text-gray-600 mb-1">Author: Author Name</p>
              <p className="text-gray-600 font-semibold">Price: $15.99</p>
            </div>
          </div>
        </section>
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            About Us
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            At ShelfWise Bookstore, we believe in the power of books to inspire,
            educate, and entertain. Browse our collection and find your next
            great read today!
          </p>
        </section>
      </main>
    </div>
  );
}

export default HomeScreen;
