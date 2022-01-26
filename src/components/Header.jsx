import React from 'react';
import '../App.css';

export default function Header() {
  return (
    <nav className='navigation'>
      <div className="container">
        <button className="btn">Back</button>
        <button className="btn twitter"></button>
      </div>
      <div className="container">
        <button className="btn blogs">Blog</button>
        <button className="btn goals">101 Things</button>
      </div>
    </nav>
  );
}
