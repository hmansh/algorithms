import React, {useState, useEffect} from 'react';
import ContentCard from '../components/Card/Card';
import {Link} from 'react-router-dom';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import axios from 'axios';
import spinner from '../utils/spinner.svg';

export default function Grid(props) {
  const {setSubTopics} = props;
  const [loading, setLoading] = useState(true);
  const [topicData, setTopicData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8081/getTopic?topic=data-structures').then(
        (response) => {
          setTopicData({...response.data});
          setLoading(false);
          setError(true);
        },
    ).catch((error) => {
      console.log(error);
      setError(true);
    });
  }, []);

  // const handleCardClick = (subTopic) => {
  //   console.log(subTopic);
  //   setCurrentSubTopic(subTopic);
  // };

  const loadingSpinner = (
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

  return (
    <div id="content-container">
      {!loading ? (
        <div className="grid-container">
          {topicData?.topicList?.map((item, index) => (
            <div className="grid-item" key={index}>
              <Link
                to="/blog"
                style={{textDecoration: 'none'}}
                onClick={() => setSubTopics(item.subTopicList)}
              >
                <ContentCard
                  topic={item.topic}
                  slug={item.slug}
                  desc={item.desc}
                  uid={item.uid}
                  color={item.color}
                  // subTopics={item.subTopicList}
                  pos={index}
                />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            minHeight: '80vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          {!error ? loadingSpinner :
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <ErrorOutlineOutlinedIcon
                  large
                  style={{
                    margin: '35vh auto 0.5rem auto',
                  }} /><div style={{whiteSpace: 'nowrap'}}>Oops! nothings here
                </div></div>
          }
        </div>
      )}
    </div>
  );
}
