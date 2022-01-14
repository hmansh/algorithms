import React, {useState} from 'react';
import Dashboard from '../../views/Dashboard';
import Grid from '../../views/Grid';
import Blog from '../../views/Blog';
import {Route, Routes} from 'react-router-dom';
import '../../styles/App.css';

export default function View(props) {
  const {cardList, setCurrentTopic, setDrawerItems, currentTopic} = props;
  const [currentSubTopic, setCurrentSubTopic] = useState('');
  const [subTopics, setSubTopics] = useState([]);

  return (
    <div id="view-container">
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Dashboard
              setDrawerItems={setDrawerItems}
              setCurrentTopic={setCurrentTopic}
              currentTopic={currentTopic}
            />
          }
        />
        <Route
          path={currentTopic}
          element={
            <Grid
              setDrawerItems={setDrawerItems}
              cardList={cardList}
              setCurrentSubTopic={setCurrentSubTopic}
              setSubTopics={setSubTopics}
            />
          }
        />
        <Route
          path="/blog"
          element={
            <Blog
              setDrawerItems={setDrawerItems}
              currentSubTopic={currentSubTopic}
              setSubTopics={setSubTopics}
              subTopics={subTopics}
            />
          }
        />
      </Routes>
    </div>
  );
}
