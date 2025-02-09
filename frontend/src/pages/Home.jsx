import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

import Spinner from "../components/Spinner.jsx";
import BookTable from "../components/home/BookTable.jsx";
import BooksCard from "../components/home/BooksCard.jsx";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-end items-center gap-x-4 pl-10 pr-10">
      <button className="hover:bg-blue-900 hover:text-white px-4 py-1 rounded-lg border-2 border-blue-900" onClick={ () => setShowType('table')}>Table</button>
        <button className="hover:bg-blue-900 hover:text-white px-4 py-1 rounded-lg border-2 border-blue-900" onClick={ () => setShowType('card')}>Card</button>
      </div>

      <div className="flex justify-between items-center pl-10 pr-10">
        <h1 className="text-2xl font-semibold my-8">Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-3xl" />
        </Link>
      </div>
        <hr className="h-0.5 bg-blue-200 ml-10 mr-10 mb-5"/>
      {loading ? (
        <Spinner />
      ) : (
        showType === "table" ? ( <BookTable books={books}/> ) : ( <BooksCard books={books}/>)
      )}
      <div className="h-10"></div>
    </div>
  );
};

export default Home;
