import React from 'react';

const ProjectTile = () => {
  return (
    <div className="project-tile">
      <div className='project-desc'>
        <div className="title white bold md">Css Style System</div>
        <div className="details white medium">
          <div className='docs'>
            <div className='docs-img'></div>
            <div className='docs-text regular white'>Documentation</div>
          </div>
          <div className='demo'>
            <div className="demo-img"></div>
            <div className="demo-text regular white">Live</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div className='project-section'>
      <h2 className="section-title md regular">Projects</h2>
      <div className="project-container">
        {[1, 2, 2, 3, 4, 5].map(item => {
          return ProjectTile()
        })}
      </div>
    </div>
  )
}
