import React from 'react';
import { Link } from 'react-router-dom';
import {blogs} from '../constants';

const Blog = () => {
  return (
    <section id="blog" className="bg-blueish-bg min-h-screen py-16 px-4 md:px-16 text-whitish-header-text">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Design Insights & Tips</h2>
        <p className="text-blueish-text text-lg">Learn how visual design helps your business stand out.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id}>
            <div className="bg-[#d8eefe] rounded-lg p-6 shadow-md transition hover:scale-[1.02] hover:shadow-lg">
              <h3 className="text-greenish-text font-semibold text-xl mb-2">{blog.title}</h3>
              <p className="text-gray-800 text-sm">{blog.summary}</p>
              <button className="mt-4 text-blueish-bg font-bold hover:underline">Read More</button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
