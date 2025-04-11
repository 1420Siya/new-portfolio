import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="blog-container">
        <h2>Latest Blog Posts</h2>
        <div className="blog-posts">

          <div className="blog-post">
            <div className="post-content">
              <h3>Frontend Tips</h3>
              <p>Shared tips on frontend development and design inspiration with the dev community.</p>
              <a href="/" className="btn">Read More</a>
            </div>
          </div>

          <div className="blog-post">
            <div className="post-content">
              <h3>Personal Website</h3>
              <p>Recently built a personal portfolio site using React and modern CSS design techniques.</p>
              <a href="/" className="btn">Read More</a>
            </div>
          </div>

          <div className="blog-post">
            <div className="post-content">
              <h3>Dev Conference Talk</h3>
              <p>Presented a live demo on accessibility best practices at a recent developer conference.</p>
              <a href="/" className="btn">Read More</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;
