import React from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ml-8 mr-8">
      {books.map((item) => {
        return (
          <div
            key={item._id}
            className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl hover:bg-slate-50"
          >
            <h2 className="absolute top-1 right-2 px-4 py-1 bg-blue-200 rounded-lg">
              {item.publishedYear}
            </h2>
            <h4 className="my-2 text-gray-500">{item._id}</h4>
            <div className="flex justify-start items-center gap-x-2">
              <PiBookOpenTextLight className="text-blue-500 text-2xl" />
              <h2 className="my-1">{item.title}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
              <BiUserCircle className="text-blue-500 text-2xl" />
              <h2 className="my-1">{item.author}</h2>
            </div>
            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
              <Link to={`/books/details/${item._id}`}>
                <BsInfoCircle className="text-2xl text-green-500 hover:text-black" />
              </Link>
              <Link to={`/books/edit/${item._id}`}>
                <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-black" />
              </Link>
              <Link to={`/books/delete/${item._id}`}>
                <MdOutlineDelete className="text-2xl text-red-500 hover:text-black" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BooksCard;
