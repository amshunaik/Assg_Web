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
    await axios.post('https://blogpost-fxut.onrender.com/posts', { title, content });
    navigate('/');
  };

  return (
   <div className='w-[600px] mt-12'>
      <h1 className='text-2xl font-bold text-center'>CREATE NEW POST</h1>
      <div className=' float-right mt-8 flex gap-8'>
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
            required className='block p-1 border-2 w-full mb-2 text-orange-600 text-lg '
          />
        </div>
        <div>
            
        <label className='block p-1 bg-gray-200 '> Content </label>
          <textarea
          placeholder='Enter Content ......'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required className='block   p-1 border-2 w-full mb-2 text-lg text-gray-800' rows="6"
          />
        </div>
      </div>
       
    </div>
  );
};

export default CreatePost;
