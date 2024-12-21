// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const PostPage = () => {
    
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3005/posts');
//         const posts = response.data; // Extracting the array
//         setPosts(posts)
//        console.log(posts);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };
//     fetchData();
//   }, []); // Dependency array

// //   useEffect(() => {
// //     axios.get('http://localhost:5000/posts').then((res) => setPosts(res.data));
// //   }, []);

//   return (
//     <div>
//       <h1>Blog Posts</h1>
//       <Link to="/create">Create</Link>
//       <ul>
//         {posts.map((post) => (
//           <div key={post._id}>
//             <Link to={`/posts/${post._id}`}>{post.title}</Link>
//             <p>{post.content}</p>
//             <p>{post.summary}</p>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostPage;
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
    axios.get(`http://localhost:3005/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(err => console.error(err));

      console.log("post " ,post);
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:3005/posts/${id}`)
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  if (!post) return <p className='w-full text-xl text-center mt-[300px] ml-[20px]'>Blog Loading, Wait a moment...</p>;

  return (
    <div className=' w-[600px]'>
        
      <div className='flex-col gap-2 pt-12 '>
            <div className='pb-4'>
                <h1 className='font-bold text-center text-xl'>{post.title}</h1>
                <div className='float-right flex gap-4 mt-4'>
                    <Link to={`/edit/${id}`} className='font-semibold'>Edit</Link>
                    <button onClick={handleDelete} className='bg-black text-white rounded-lg px-2'>Delete</button>
                </div>
            </div>
            <div className='pb-4 mt-8'>
                <label htmlFor="" className='block p-1 bg-gray-200'>Summary </label>
                {post.summary?<p>{post.summary}</p>:<p>{post.content}</p>}
               
            </div>
            <div className='pb-4'>
                <label htmlFor="" className='block p-1 bg-gray-200'>Content </label>
                <p>{post.content}</p>
                  
            </div>
      </div>
      
    </div>
  );
}

export default PostPage;
