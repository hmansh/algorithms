import React from 'react';

export default function Home() {
  return (
    <div className='main-body'>
      <div className="container home-header">
        <h1 className='extra-bold xl black'>person; n</h1>
      </div>
      <div className='curved-arrow-img'></div>
      <div className="container home-body">
        <div className="left container">
          <p className="para extra-light sm">Technology has been my thing since my father bought me my first computer, it is a field that makes me so intrigued and curious to explore the technical impact it has on people, communities, and businesses.</p>
          <p className="para extra-light sm">During my undergrad, I’ve learned and explored a good amount of technology that is used to build smart applications. Furthermore, I have also worked with a diverse set of individuals which has given me an immense sense of growth and knowledge.</p>
          <p className="para extra-light sm">The work I do highlights the time and experience that I have gained over the past few years by building software. Truth be told, I honestly dont feel anything makes me happier than building good software that people would love to use.</p>
        </div>
        <div className="right container">
          <div className="line-container">
            <div className="circle"></div>
            <div className="linear">
              <div className="line"></div>
            </div>
            <div className="circle"></div>
            <div className="linear">
              <div className="line"></div>
            </div>
            <div className="circle"></div>
          </div>
          <div className='exp-contaner'>
            <div className='company-name'>
              <h3 className='blue bold sm'>HighRadius Corp</h3>
              <h3 className='black regular xs'>SDE Intern</h3>
              <h5 className='extra-light xs'>June 2021 - Present</h5>
            </div>
            <div className='company-name'>
              <h3 className='blue bold sm'>Samsung Research</h3>
              <h3 className='black regular xs'>Research Fellow</h3>
              <h5 className='extra-light xs'>April 2021 - Dec 2021</h5>
            </div>
            <div className='company-name'>
              <h3 className='blue bold sm'>KiiT University</h3>
              <h3 className='black regular xs'>Computer Science</h3>
              <h5 className='extra-light xs'>july 2018 - june 2022</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container home-footer">
        <div className='bold md black'>Oh. In my spare time I do <span className='blue'>Design</span>.</div>
      </div>
    </div>
  );
}
