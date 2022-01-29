import React from 'react';
import '../App.css';

export default function Header() {
  const [drawer, setDrawer] = React.useState(false);

  return (
    <nav className='header'>
      {drawer && <div className="drawer">
        <div className="drawer-item">
          <button className="close-btn"
            onClick={() => setDrawer((prev) => !prev)}></button>
        </div>
        <div className="drawer-item">
          <button className="btn sm bold">Blogs</button>
          <button className="btn sm bold">Things</button>
        </div>
      </div>}
      <nav className="navbar">
        <div className="social-links">
          <button className="btn back"></button>
          <button className="btn twitter"></button>
        </div>
        <div className="toggle-btn"
          onClick={() => setDrawer((prev) => !prev)}>
        </div>
        <div className="navbar-links">
          <ul>
            <li className="links">
              <a href="/" className='sm bold'>Blogs</a>
            </li>
            <li className="links">
              <a href="/" className='sm bold'>Things</a>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
}
