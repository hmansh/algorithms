import React from 'react';
import Dashboard from '../../views/Dashboard';
import Grid from '../../views/Grid';
import Blog from '../../views/Blog';
import {
  Route,
  Routes,
} from 'react-router-dom';
import '../../styles/App.css';

export default function View(props) {
  const {cardList, setCurrentTopic, setDrawerItems} = props;

  return (
    <div id="view-container">
      <Routes>
        <Route path="/home"
          element={<Dashboard
            setDrawerItems={setDrawerItems}
            setTopic={setCurrentTopic}/>} />
        <Route path="/topics"
          element={<Grid
            setDrawerItems={setDrawerItems}
            cardList={cardList}/>} />
        <Route path="/blog"
          element={<Blog
            setDrawerItems={setDrawerItems} />} />
      </Routes>
    </div>
  );
}
