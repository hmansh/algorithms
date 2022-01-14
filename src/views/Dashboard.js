import React, {useEffect} from 'react';
import {dashboardCardsData, dataStructureTopics} from '../utils/staticData';
import Toolbar from '@mui/material/Toolbar';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardCard from '../components/DashboardCard/DashboardCard.js';
import Grid from '@mui/material/Grid';
import '../styles/App.css';
import Typography from '@mui/material/Typography';
import ContentCard from '../components/Card/Card.js';
import {Link} from 'react-router-dom';

export default function Dashboard(props) {
  const {setCurrentTopic, setDrawerItems, currentTopic} = props;

  const handleClick = (topic) => {
    console.log(topic);
    setCurrentTopic(topic);
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

  return (
    <div id="content-container">
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        columns={{xs: 1, sm: 2}}
        gutterBottom
      >
        {dashboardCardsData.map((item) => (
          <Grid item xs={1} sm={1} sx={{height: '27vh'}} key={item.slug}
            onClick={() => handleClick(item.slug)}
          >
            <Link
              to={currentTopic}
              style={{textDecoration: 'none'}}
            >
              <DashboardCard
                title={item.title}
                slug={item.slug}
                key={item.slug}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Suggested Readings
        </Typography>
        <ChevronRightIcon />
      </Toolbar>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        columns={{xs: 1, sm: 2, md: 3, lg: 4}}
        gutterBottom
      >
        {dataStructureTopics.slice(0, 4).map((item, index) => (
          <Grid item xs={1} sm={1} key={item}>
            <ContentCard
              topic={item.topic}
              slug={item.slug}
              desc={item.desc}
              api={item.api}
              color={item.color}
              pos={index}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
