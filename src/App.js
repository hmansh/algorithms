/* eslint-disable max-len */
import React from 'react';
import Header from './components/Header/Header';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <div className="content">
        <div className="container home-header">
          <h1 className='bold'>Himanshu</h1>
        </div>
        <div className="container home-body">
          <div className="left container">
            <p className="para extra-light">Technology has been my thing since my father bought me my first computer, it is a field that makes me so intrigued and curious to explore the technical impact it has on people, communities, and businesses.</p>
            <p className="para extra-light">During my undergrad, I’ve learned and explored a good amount of technology that is used to build smart applications. Furthermore, I have also worked with a diverse set of individuals which has given me an immense sense of growth and knowledge.</p>
            <p className="para extra-light">The work I do highlights the time and experience that I have gained over the past few years by building software. Truth be told, I honestly dont feel anything makes me happier than building good software that people would love to use.</p>
          </div>
          <div className="right container">
            <div className='company-name'>
              <h3 className='blue light'>company name</h3>
              <h5 className='extra-light'>july 2020 - august 2021</h5>
            </div>
            <div className='company-name'>
              <h3 className='blue light'>company name</h3>
              <h5 className='extra-light'>july 2020 - august 2021</h5>
            </div>
            <div className='company-name'>
              <h3 className='blue light'>company name</h3>
              <h5 className='extra-light'>july 2020 - august 2021</h5>
            </div>
            <div className='company-name'>
              <h3 className='blue light'>company name</h3>
              <h5 className='extra-light'>july 2020 - august 2021</h5>
            </div>
            <div className='company-name'>
              <h3 className='blue light'>company name</h3>
              <h5 className='extra-light'>july 2020 - august 2021</h5>
            </div>
          </div>
        </div>
        <div className="container home-footer">
          <h2 className='regular'>Oh. In my spare time I ride <span className='blue'>bikes</span>.</h2>
        </div>
      </div>
    </div>
  );
}
