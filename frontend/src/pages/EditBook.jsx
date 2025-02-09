import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import BackButton from '../components/BackButton.jsx';
import Spinner from '../components/Spinner.jsx';

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        setTitle(response.data.book.title);
        setAuthor(response.data.book.author);
        setPublishedYear(response.data.book.publishedYear);  
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert('An error happened. Please check console');
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author, 
      publishedYear
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error occured. Please check the console.');
        console.log(error);
      });
  };

  return (
    <div className='p-4 ml-10 mr-10'>
      <div className='flex'>
      <BackButton />
      <h1 className='text-2xl font-semibold my-4'>Edit Book</h1>
      </div>

      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input 
            type="text" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Published Year</label>
          <input 
            type="text" 
            value={publishedYear} 
            onChange={(e) => setPublishedYear(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBook
