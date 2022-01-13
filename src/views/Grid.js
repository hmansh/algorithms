import React, {useEffect} from 'react';
import ContentCard from '../components/Card/Card';
import {Link} from 'react-router-dom';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

export default function Grid(props) {
  const {cardList, setDrawerItems, setCurrentSubTopic} = props;

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

  const handleCardClick = (subTopic) => {
    console.log(subTopic);
    setCurrentSubTopic(subTopic);
  };

  return (
    <div id="content-container">
      {cardList.length ? (
        <div className="grid-container">
          {cardList.map((item, index) => (
            <div className="grid-item" key={item}>
              <Link
                to="/blog"
                style={{textDecoration: 'none'}}
                onClick={() => handleCardClick(item.topic)}
              >
                <ContentCard
                  topic={item.topic}
                  slug={item.slug}
                  desc={item.desc}
                  api={item.api}
                  color={item.color}
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
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <ErrorOutlineOutlinedIcon
              large
              style={{
                margin: '35vh auto 0.5rem auto',
              }}
            />
            <div style={{whiteSpace: 'nowrap'}}>Oops! nothings here</div>
          </div>
        </div>
      )}
    </div>
  );
}
