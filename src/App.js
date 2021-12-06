import { useState, useEffect } from 'react';
import './App.css';
import { getBlogs } from './services/blogs';

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogs();
      setBlogs(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Blog List</h1>
    </div>
  );
}

export default App;
