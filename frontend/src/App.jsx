import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home.jsx";
import CreateBook from "./pages/CreateBook.jsx";    
import ShowBook from "./pages/ShowBook.jsx";        
import EditBook from "./pages/EditBook.jsx";        
import DeleteBook from "./pages/DeleteBook.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;


