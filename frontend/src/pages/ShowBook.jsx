import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BackButton from '../components/BackButton.jsx';
import Spinner from '../components/Spinner.jsx';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data.book);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

  }, [id]);

  return (
    <div className='p-4 ml-10 mr-10'>
      <div className='flex'>
      <BackButton />
      <h1 className='text-2xl font-semibold my-4'>Show Book</h1>
      </div>
      <hr className="h-0.5 bg-blue-200 mb-5"/>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-row w-fit p-4'>
          <table className='w-full border-separate border-spacing-2 pl-10 pr-10'>
            <tbody>
              <tr>
                <td className='rounded-md text-left font-semibold min-w-44'>Id</td>
                <td className='rounded-md text-left'>{book._id}</td>
              </tr>
              <tr>
                <td className='rounded-md text-left font-semibold'>Title</td>
                <td className='rounded-md text-left'>{book.title}</td>
              </tr>
              <tr>
                <td className='rounded-md text-left font-semibold'>Author</td>
                <td className='rounded-md text-left'>{book.author}</td>
              </tr>
              <tr>
                <td className='rounded-md text-left font-semibold'>Published Year</td>
                <td className='rounded-md text-left'>{book.publishedYear}</td>
              </tr>
              <tr>
                <td className='rounded-md text-left font-semibold'>Created Time</td>
                <td className='rounded-md text-left'>{new Date(book.createdAt).toString()}</td>
              </tr>
              <tr>
                <td className='rounded-md text-left font-semibold'>Updated Time</td>
                <td className='rounded-md text-left'>{new Date(book.updatedAt).toString()}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <img src={book.imageURL} alt="book-cover" className='flex w-96 justify-center'/>
          </div>
        </div>
      )}
    </div>
  )
};

export default ShowBook;
