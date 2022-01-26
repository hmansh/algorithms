import React from 'react';
import '../../App.css';

export default function Header() {
  return (
    <nav className='navigation'>
      <div className="container">
        <button className="btn">Back</button>
        <button className="btn">Twitter</button>
      </div>
      <div className="container">
        <button className="btn">Blogs</button>
        <button className="btn">101 Things</button>
      </div>
    </nav>
  );
}
