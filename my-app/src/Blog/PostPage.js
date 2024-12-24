

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function PostPage() {
  const { id } = useParams();
  console.log(id)
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("hi ")
    //console.log(id)
    axios.get(`https://blog-post-bb.onrender.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(err => console.error(err));

      console.log("post " ,post);
  }, [id]);

  const handleDelete = () => {
    axios.delete(`https://blog-post-bb.onrender.com/posts/${id}`)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  if (!post) return <p className='w-full text-xl text-center mt-[300px] ml-[20px]'>Blog Loading, Wait a moment...</p>;

  return (
    <div className=' w-[600px]'>
        
      <div className='flex-col gap-2 pt-12 '>
            <div className='pb-4'>
                <h1 className='font-bold text-center text-2xl '>{post.title}</h1>
                <div className='float-right flex gap-8 my-4 '>
                    <Link to={`/edit/${id}`} className='font-semibold'>Edit</Link>
                    <button onClick={handleDelete} className='bg-black text-white rounded-lg px-2'>Delete</button>
                </div>
            </div>
            <div className='pb-6 mt-8'>
                <label htmlFor="" className='block p-1 bg-gray-200'>Summary </label>
                {post.summary?<p className='border-2 p-2'>{post.summary}</p>:<p className='border-2 p-2'>{post.content}</p>}
               
            </div>
            <div className='pb-4'>
                <label htmlFor="" className='block p-1 bg-gray-200'>Content </label>
                <p className='border-2 p-2'>{post.content}</p>
                  
            </div>
      </div>
      
    </div>
      
  );
}

export default PostPage;
