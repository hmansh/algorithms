import React, {useState, useEffect} from 'react';
import './styles/App.css';
import Box from '@mui/material/Box';
import View from './components/View/View';
import {
  DrawerHeader,
  Main,
} from './components/CustomComponents/CustomComponents';
import HeaderDrawer from './components/HeaderDrawer/HeaderDrawer';
import {BrowserRouter} from 'react-router-dom';
import {algorithmsTopics, dataStructureTopics} from './utils/staticData';

export default function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [currentTopic, setCurrentTopic] = React.useState('data-structures');
  const [currentSubTopic, setCurrentSubTopic] = React.useState('');
  const [blogUid, setBlogUid] = React.useState(0);
  const [drawerItems, setDrawerItems] = useState([]);

  const handleDrawerOperation = () => {
    setDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    setDrawerItems([
      {
        topic: 'Data Structures',
        slug: 'data-structures',
      },
      {
        topic: 'Algorithms',
        slug: 'algorithms',
      },
      {
        topic: 'Codeforce',
        slug: 'codeforces',
      },
      {
        topic: 'Questions',
        slug: 'questions',
      },
    ]);
  }, []);

  const drawerData = {
    'data-structures': {
      name: 'Data Structures',
      data: dataStructureTopics,
    },
    'algorithms': {
      name: 'Algorithms',
      data: algorithmsTopics,
    },
    'codeforces': {
      name: 'Codeforces',
      data: [],
    },
    'questions': {
      name: 'Questions',
      data: [],
    },
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Box sx={{display: 'flex'}}>
          <HeaderDrawer
            drawerItems={drawerItems}
            drawerOpen={drawerOpen}
            setCurrentTopic={setCurrentTopic}
            handleDrawer={handleDrawerOperation}
          />
          <Main
            open={drawerOpen}
            style={{
              backgroundImage: 'radial-gradient(#323232 1px, transparent 0)',
              backgroundSize: '25px 25px',
            }}
          >
            <DrawerHeader />
            <div className="view">
              <View
                currentTopic={currentTopic}
                setCurrentTopic={setCurrentTopic}
                cardList={drawerData[currentTopic].data}
                setDrawerItems={setDrawerItems}
                currentSubTopic={currentSubTopic}
                setCurrentSubTopic={setCurrentSubTopic}
                blogUid={blogUid}
                setBlogUid={setBlogUid}
                drawerOpen={drawerOpen}
                handleDrawer={handleDrawerOperation}
              />
            </div>
          </Main>
        </Box>
      </div>
    </BrowserRouter>
  );
}
