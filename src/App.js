import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { getBlogs } from './services/blogs';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import BlogCard from './components/BlogCard/BlogCard';

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <Header />
      <div className="App">
        <h1>Blog List</h1>
      </div>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
      <Footer />
    </>
  );
}

export default App;
