import React, { useState , useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const [data,setdata]=useState([])
    useEffect(() => {
        console.log("hi ")
        //console.log(id)
        axios.get(`http://localhost:3005/posts/${id}`)
          .then(response =>{
            setdata(response.data);
            setTitle(response.data.title);
            setContent(response.data.content);
          })
          .catch(err => console.error(err));
    
    }, [id]);

    const Updatedpost=async(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:3005/posts/${id}`, { title, content })
            .catch(err => console.error(err));


        navigate(`/posts/${id}`)
    };
      
  return (
    <div  className=' flex-row f-fit mt-12 w-[600px]'>
        <h1 className='text-center font-bold text-2xl'>Edit Blog </h1>

        <div className='mt-8'>
        <button onClick={Updatedpost} className='bg-black px-2 rounded-lg text-white float-right '>Update</button>

        <div className='pt-8'>
        <label className='block p-1 bg-gray-200 ' > Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required className='block  p-1 border-2 w-full mb-2'
          />
        </div>
        <div>
            
        <label className='block p-1 bg-gray-200 '> Content </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required className='block   p-1 border-2 w-full mb-2 ' rows="6"
          />
        </div>
       
        
      </div>
      
    </div>
  )
}

export default EditPost
