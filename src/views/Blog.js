/* eslint-disable max-len */
import React, {useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import ReactMarkdown from 'react-markdown';
import '../styles/App.css';
import spinner from '../utils/spinner.svg';
import '../styles/App.css';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Data Structures
  </Link>,
  <Link underline="none" key="2" color="inherit" href="linked-list">
    Linked Lists
  </Link>,
  <Typography key="3">Merge Two Linked Lists</Typography>,
];

export default function Blog(props) {
  const {setDrawerItems, subTopics} = props;

  useEffect(() => {
    setDrawerItems(subTopics);
  }, []);

  const blogContent = (
    <div
      style={{
        maxWidth: '720px',
        margin: '10px auto',
        padding: '1rem',
      }}
      id="blog-content"
    >
      <Breadcrumbs
        sx={{color: 'white'}}
        separator={<NavigateNextIcon fontSize="small" />}
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Typography variant="h4" sx={{paddingTop: '10px'}}>
        Merge Two Linked Lists
      </Typography>
      <div
        style={{
          maxWidth: '200px',
          display: 'flex',
          justifyContent: 'space-between',
          // border: "1px solid red",
          paddingTop: '10px',
        }}
      >
        <Link sx={{margin: 'auto 0', color: 'white'}} underline="none">
          6 Min read
        </Link>
        <IconButton color="inherit" edge="state" disableRipple>
          <ShareIcon sx={{paddingRight: 1}} />
          <Typography> Share</Typography>
        </IconButton>
      </div>
      <div className="article" style={{padding: '10px'}}>
        <ReactMarkdown>{subTopics[0]?.article}</ReactMarkdown>
      </div>
    </div>
  );

  const loading = (
    <img
      src={spinner}
      alt=""
      style={{
        height: '3rem',
        width: '3rem',
        margin: '35vh auto',
        display: 'block',
      }}
    />
  );

  // eslint-disable-next-line no-unused-vars
  const error = (
    <div style={{margin: '35vh auto', display: 'block'}}>
      <ErrorOutlineIcon
        alt=""
        style={{
          height: '2rem',
          width: '2rem',
          margin: '0 auto 0.5rem auto',
          display: 'block',
        }}
      />
      <div style={{color: 'white', fontWeight: '600', cursor: 'pointer'}}>
        Reload
      </div>
    </div>
  );

  return <div style={{display: 'flex'}}>{true ? blogContent : loading}</div>;
}
