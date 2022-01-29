import React from 'react';

const blogSection = () => {
  return (
    <div className="b-container">
      <h3 className="b-header md regular blue underline">
        <text >How CodeSandbox adapts to bazillion VSCode themes</text>
        <span className="new"></span>
      </h3>
      <p className="b-abstract small light">
          No, this isn't a post about child labour. It's a post about using
          children as props. Wait that doesn't sound right either. It's about
          writing good components, okay?
      </p>
    </div>
  );
};

export default function Blogs() {
  return (
    <div className="blogs">
      <div className="blog-section">
        <h2 className="section-title md regular">Latest Post</h2>
        {blogSection()}
      </div>
      <div className="blog-section">
        <h2 className="section-title md regular">Selected Posts on React</h2>
        {blogSection()}
        {blogSection()}
        {blogSection()}
      </div>
    </div>
  );
}
