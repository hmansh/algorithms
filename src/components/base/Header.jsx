/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

const paths = {
  goals: 'goals',
  blogs: 'blogs',
  projects: 'projects',
  home: '/',
};

export default function Header() {
  const [drawer, setDrawer] = React.useState(false);
  const history = useNavigate();
  const goToBlogs = () => {
    history(paths.blogs);
  };
  const goToGoals = () => {
    history(paths.goals);
  };
  const goToHome = () => {
    history(paths.home);
  };
  const goToProjects = () => {
    history(paths.projects);
  };
  return (
    <nav className='header'>
      {drawer && <div className="drawer">
        <div className="drawer-item">
          <button className="close-btn"
            onClick={() => setDrawer((prev) => !prev)}></button>
        </div>
        <div className="drawer-item">
          <Link to='/blogs' onClick={() => setDrawer(false)}>
            <button className="btn sm bold">Blogs</button>
          </Link>
          <Link to='/goals' onClick={() => setDrawer(false)}>
            <button className="btn sm bold">Things</button>
          </Link>
          <Link to='/projects' onClick={() => setDrawer(false)}>
            <button className="btn sm bold">Projects</button>
          </Link>
        </div>
      </div>}
      <nav className="navbar">
        <div className="social-links">
          {<button className="btn back" onClick={goToHome}></button>}
          <button className="btn twitter"></button>
        </div>
        <div className="toggle-btn btn"
          onClick={() => setDrawer((prev) => !prev)}>
        </div>
        <div className="navbar-links">
          <ul>
            <li className="links">
              <a className='sm bold btn' href="#" onClick={goToBlogs}>Blogs</a>
            </li>
            <li className="links">
              <a className='sm bold btn' href="#" onClick={goToGoals}>Things</a>
            </li>
            <li className="links">
              <a className='sm bold btn' href="#" onClick={goToProjects}>Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
}
