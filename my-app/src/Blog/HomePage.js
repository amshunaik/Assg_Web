import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
    
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://blog-post-bb.onrender.com/posts');
        const posts = response.data; // Extracting the array
        setPosts(posts)
       console.log(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, []); // Dependency array

   const OpenPost=(id)=>{
    console.log(id);
    
   }

  return (
    <div className='w-full'>
      <h1 className='text-center justify-center text-2xl font-bold mt-4 w-full'>Blog Posts</h1>
      <div className='mt-10'>
      <Link to="/create" className='border-2 rounded-lg px-4 text-xl float-right mr-12 bg-gray-800 text-white align-center'>+ Create</Link>
      <ul className='flex flex-wrap w-full gap-10 mt-16 pt-12'>
        {posts.map((post) => (
          <li key={post._id} className='w-[300px] border-2 p-4 h-[300px]'>
             <Link to={`/posts/${post._id}`}>
              <h2 className='text-center font-bold'>{post.title}</h2>
             
             <p className='mt-4 overFlow-auto overscroll-contain'><span className='font-medium'>Summary : </span>{post.content}</p>
            </Link>
            
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default HomePage;
