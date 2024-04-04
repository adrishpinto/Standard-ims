import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import 'animate.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


function Welcome() {
    const { id } = useParams();
    const [user, setUser] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        getUser()
      }, [])

    const getUser = async () => {
      const res = await axios.get(`http://localhost:5000/login/${id}`)
      setUser(res.data[0].firstname)
    }
    const oc = () =>{
      navigate('home')
    }
    return (  
        <div>
            <div className='w-full h-screen bg-gradient-to-r from-cyan-500 to-emerald-500 ani2'>
               <h1 className='text-center  text-5xl pt-[18%] ani1 absolute left[-200px]'>Welcome <span className='font-medium'>{user}</span>!</h1>
               <h1 onClick={oc}
               className="text-center text-4xl font-light border-black border-y hover:bg-gray-100 hover:cursor-pointer h-12 hover:bg-opacity-15 w-96 mx-auto mt-[21%] ani3">Start Placing Orders</h1>
            </div>
              
        </div>
    );
}

export default Welcome;