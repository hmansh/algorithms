/* eslint-disable max-len */
import React from 'react';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Goals from './components/Goals';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/goals" element={<Goals/>} />
          <Route path="/blogs" element={<Blogs/>} />
        </Routes>
      </div>
    </div>
  );
}
