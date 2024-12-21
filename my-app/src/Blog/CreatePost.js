import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(title==''||content==''){
      alert("Fill complete details to create a post");
      return;
    }
    await axios.post('https://blog-post-y3cx.onrender.com/posts', { title, content }).catch(err => console.error(err));;
    navigate('/');
  };

  return (
    <div className='w-[600px] mt-12'>
      <h1 className='text-xl font-bold text-center'>Create New  Post</h1>
      <div className=' float-right mt-8 flex gap-4'>
      <button onClick={() => navigate('/')}>Cancel</button>

      <button type='submit' onClick={handleSubmit} className='bg-black px-2 text-white rounded-lg'>Create</button>
      </div>
      <div className='mt-12'>
      <div className='pt-8'>
        <label className='block p-1 bg-gray-200 ' > Title</label>
          <input
            type="text"
            placeholder='Enter title ...'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required className='block  p-1 border-2 w-full mb-2'
          />
        </div>
        <div>
            
        <label className='block p-1 bg-gray-200 '> Content </label>
          <textarea
          placeholder='Enter Content ......'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required className='block   p-1 border-2 w-full mb-2 ' rows="6"
          />
        </div>
      </div>
       
    </div>
  );
};

export default CreatePost;
