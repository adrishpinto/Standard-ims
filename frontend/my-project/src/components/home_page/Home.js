import React, { useEffect, useState } from 'react';
import banner from '../../assets/banner1.jpg'
import { FaLaptop } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdWatch } from "react-icons/md";
import { PiHeadphonesFill } from "react-icons/pi";
import { FaMouse } from "react-icons/fa";
import phone from '../../assets/phone.avif'
import { FaStar } from "react-icons/fa";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaAsterisk } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";


function Home() {
    const [products,setProducts] = useState([]);
    const [ext, setExt] = useState([]);
    useEffect(() => {
      getProducts();
    }, [])
    

    const getProducts = async () =>{
        const res = await axios.get("http://localhost:5000/products")
        setProducts(res.data); 
    }

    const getCategory = async (id) =>{
        const res = await axios.get(`http://localhost:5000/category/${id}`)
        setProducts(res.data); 
    }
    const x="watch"
    
    return (  
        <div>
        
            <div className=' w-full h-full '>
                <div className='relative h-[45vh]'>
                    <h1 className='text-8xl absolute font-semibold left-[50%] mt-40 border-b-4 border-white translate-x-[-50%] text-white'>Best Place For Shopping!</h1>
                    <img src={banner} alt="" className='w-full h-[45vh] border-b-4 border-black'/>
                    <Link to='/login'>
                        <div  className="text-white dark:hover:opacity-70 border border-black px-3 py-1 bg-gray-900 bg-opacity-30 absolute right-16 text-3xl hover:cursor-pointer hover:bg-opacity-50 flex items-center top-10">
                             <i className="dark:text-white"><IoIosLogIn size={40} /></i>
                            <span>Login</span>
                        </div>
                    </Link>
                </div>
                <div className='flex  w-full h-full'>
                {/* side bar */}
                <div className='w-[13%] bg-gray-900 min-h-full'>
                <div className=' mx-auto mt-12 w-64 rounded-[10px] ml-9'>
                    <h2 className='text-3xl border-b-2 w-36 border-slate-50 text-slate-100 mb-10 ml-6'>Categories</h2>
                            <ol className='text-3xl mt-3 text-slate-200 space-y-10 font-thin [&_li]:pl-5'>
                                <div 
                                onClick={()=>getCategory("laptop")}
                                className='flex items-baseline '><FaLaptop size={25}/><li className='hover:cursor-pointer hover:text-slate-400'> Laptop</li>
                                </div>
                                <div
                                onClick={()=>getCategory("watch")}
                                 className='flex items-baseline '><MdWatch  size={25}/><li className='hover:cursor-pointer hover:text-slate-400'> Watch</li>
                                 </div>
                                <div
                                onClick={()=>getCategory("phone")}
                                 className='flex items-baseline '><MdOutlinePhoneAndroid size={25}/><li  className='hover:cursor-pointer hover:text-slate-400'> Phone</li>
                                 </div>
                                <div
                                onClick={()=>getCategory("headphone")}
                                 className='flex items-baseline '><PiHeadphonesFill size={25}/><li className='hover:cursor-pointer hover:text-slate-400'> Headphones</li>
                                 </div>
                                <div
                                onClick={()=>getCategory("mouse")}
                                 className='flex items-baseline '><FaMouse size={25}/><li className='hover:cursor-pointer hover:text-slate-400'> Mouse</li>
                                 </div>
                                 <div
                                onClick={()=>getProducts()}
                                 className='flex items-baseline '><FaAsterisk size={25}/><li className='hover:cursor-pointer hover:text-slate-400'>Show All</li>
                                 </div>
                            </ol>
                </div>
                </div>
                {/* side bar */}
                
                <div className=' w-[87%] px-20 py-20 flex flex-wrap'>
                      {products.map((item)=>{
                      return(
                        <div className='h-[520px] border border-slate-400 w-96 bg-slate-200 relative m-5'>
                         <img src={`${item.image}`} onClick={()=>{setExt(ext + 1)}} className={`bg-slate-200 h-[350px] ${ext % 2 == 1 ? "w-20" : ""} `}></img>
                         <div className='py-2 px-3'>
                             <div className='flex items-baseline'>
                                 <p className='text-3xl font-light inline mr-3'>{item.productname}</p>
            
                                     <FaStar color='orange' size={20}/>
                                     <p className='text-2xl'>{item.rating}</p>
            
                             </div>
                             <p className='text-2xl'>Price: <span className="font-semibold">{item.price}</span></p>
                             <p className='text-xl'></p>
                             <div className='flex justify-between'>
                             <button onClick={()=>alert("Please Login To make Orders")}
                             className='mt-3 border font-extralight hover:bg-opacity-90 border-black px-2 bg-teal-900 text-white text-xl'>
                             Add To Cart</button>
                             <p className='text-2xl font-light mr-12  border-y border-black'>{item.quantity} units</p>
                             </div>
                         </div>
                      </div>
                      )
                      })
                      }
            
                </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;