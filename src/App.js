/* eslint-disable max-len */
import React from 'react';
import Header from './components/Header';
// import Home from './components/Home';
import Goals from './components/Goals';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <div className="content">
        <Goals/>
      </div>
    </div>
  );
}
