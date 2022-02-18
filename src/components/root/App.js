import React from 'react';
import Header from '../base/Header';
import Blogs from '../screens/Blogs';
import Goals from '../screens/Goals';
import Home from '../screens/Home';
import Projects from '../screens/Projects';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}
