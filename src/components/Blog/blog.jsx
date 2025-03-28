// src/components/Blog.js
import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="blog-container">
        <h2>Latest Blog Posts</h2>
        <div className="blog-posts">
          <div className="blog-post">
            <img src="https://via.placeholder.com/400x250" alt="Blog Post 1" />
            <div className="post-content">
              <h3>Blog Post 1</h3>
              <p>recently featured in the National Newspaper TIMES OF ESWATINI after an interview by a Sport jounalist</p>
              <a href="/" className="btn">Read More</a>
            </div>
          </div>
          <div className="blog-post">
            <img src="https://via.placeholder.com/400x250" alt="Blog Post 2" />
            <div className="post-content">
              <h3>Blog Post 2</h3>
              <p>Recently created a website for myself</p>
              <a href="/" className="btn">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
