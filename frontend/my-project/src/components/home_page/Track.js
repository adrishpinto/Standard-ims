import React, { useEffect, useState } from 'react';
import banner from '../../assets/banner1.jpg'
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdWatch } from "react-icons/md";
import { PiHeadphonesFill } from "react-icons/pi";
import { FaStar ,  FaAsterisk, FaLaptop, FaMouse, FaShoppingCart} from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { SlHome } from "react-icons/sl";

function Track() {
    const { id } = useParams();
    const [order_id, setOrderID] = useState("")
    const [orders,setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getUser()
      }, [])

      useEffect(() => {
        getProducts()
      }, [order_id])
    const getUser = async () => {
      const res = await axios.get(`http://localhost:5000/login/${id}`)
      setOrderID(`${res.data[0].password}`)
    }

    const getProducts = async () =>{
        const res = await axios.get(`http://localhost:5000/ordersPost/${order_id}`)
        setOrders(res.data); 
    }
    return ( 
        <div>
        
        <div className=' w-full h-full'>
        <div className='h-96 bg-black'>
                <h1 
                
                    className='text-9xl text-white font-thin text-center pt-[5%] '>Orders.</h1>
                <Link to='/'>
                    
                    <div
                    className="text-white dark:hover:opacity-70 border border-black px-3 py-1 w-40 bg-gray-900 bg-opacity-30 absolute right-[90px] text-3xl hover:cursor-pointer hover:text-blue-500 flex items-center top-10">
                        <i className="dark:text-white"><IoIosLogOut size={40} /></i>
                        <span>Logout</span>
                    </div>
                </Link>

                <div onClick={() => navigate(-1)} className="text-white dark:hover:opacity-70 border border-black px-3 py-1 w-40 bg-gray-900 bg-opacity-30 absolute right-[90px] text-3xl hover:cursor-pointer hover:hover:text-blue-500 flex items-center top-32">
                    <i className="dark:text-white"><SlHome size={35} /></i>
                    <span className='ml-2'>Home</span>
                </div>
            </div>

            <div className='flex  w-full h-full'>
            
            <div className=' w-[1/2] px-20 py-20 flex  flex-wrap'>
                  {orders.map((items) => {
                return (
                    <div>
                        <div className='w-[90%] border border-black h-96 mt-10 mx-auto flex bg-slate-200 '>
                            <img src={`${items.image}`} className='h-full w-96'></img>
                            <div className='px-20 py-10 space-y-7 w-full'>
                                <div className="flex w-ful justify-between">
                                    <h1 className='text-5xl font-semibold border-b-2 border-black'>{items.productname}</h1>
    
                                </div>
                                <h1 className='text-3xl font-light '>{`${items.color}" "${items.description}`}</h1>
                                <h1 className='text-4xl font-bold'>{items.price} </h1>
                                <div className='flex items-baseline'>
                                    <p className='text-2xl font-thin'>{items.quantity} unit{`${items.quantity > 1 ? 's': ''}`}</p>
                                </div>

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

export default Track;