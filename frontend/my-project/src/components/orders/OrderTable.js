import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import { useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";




function Orders() {
    const [id, setID] = useState("");
    const [orders,setOrders] = useState([])
    useEffect(() => {
        getOrders();
      }, []);
    
    const getOrders = async () => {
        const res = await axios.get("http://localhost:5000/ordersPost");
        setOrders(res.data);
    }
    const getOrderID = async (id) => {
        const res = await axios.get(`http://localhost:5000/ordersPost/${id}`)
        setOrders(res.data);
        }

        const deleteItem = async (id) => {
          try {
              await axios.delete(`http://localhost:5000/ordersPost/${id}`)
              getOrders();
          } catch (error) {
              console.log(error);
          }
  
      }    
    

    return ( 
        <div>
    <Navbar name="orders"></Navbar>
    <div className="w-full h-screen dark:bg-slate-950">
        <h1 className="text-center text-6xl font-sans font-semibold pt-16 dark:text-gray-300">Orders </h1>
        <div class="relative overflow-x-auto shadow-2xl dark:shadow-none border-gray-100 w-4/5 mx-auto mt-14 mb-14">
          <table class="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400  bg-cyan-500 [&_th]:w-96">
            <tr>
            <th scope="col" className="text-2xl">
              productname
            </th>
              
              <th scope="col" class="px-6 py-3 text-2xl">
              price
              </th>
              <th scope="col" class="px-6 py-3 text-2xl">
              category
              </th>
              <th scope="col" class="px-6 py-3 text-2xl">
              color
              </th>
              <th scope="col" class="px-6 py-3 text-2xl">
              image
              </th>
              <th scope="col" class="px-6 py-3 text-2xl">
              quantity
              </th>
              <th scope="col" class="px-6 py-3 text-2xl">
              order_id
              </th>
              <th scope="col" class="px-6 py-3 text-2xl">
              Action
              </th>
            </tr>
          </thead>
          <tbody>
          {orders.map((item)=>(
            <tr className='text-2xl text-center dark:bg-gray-800 border-b dark:border-gray-700'> 
            <img src={`${item.image}`} className='w-40'></img>
            <td className='py-3'>{item.productname}</td>
            
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>{item.color}</td>
  
            <td>{item.quantity}</td>
            <td>{item.order_id}</td>
            <td
            onClick={()=>deleteItem(item._id)} 
            className='text-blue-500 hover:underline hover:cursor-pointer'>Delete</td>
            </tr>)
          )}
           
          </tbody>
        </table> 

        </div>
        <div className='relative w-96 mx-auto h-12'>
            <input
             type="text" className="dark:focus:border-gray-400 dark:border-gray-500 dark:bg-gray-900 dark:text-gray-300  dark:placeholder:text-gray-300 w-96 mx-auto h-full text-center text-2xl font-[Poppins] focus:outline-none rounded border-slate-400 border-4 focus:bg-white placeholder:text-2xl bg-slate-200 focus:border-cyan-600"
             onKeyDown={(e,id1= `${id}`) => {
              if(e.key==='Enter')
              getOrderID(id1);
            }}
             placeholder="Search ID..." value={id}  onChange={(e) => setID(e.target.value)}></input>
             <i className=" left-2 top-2  absolute hover:cursor-pointer dark:text-gray-100"  onClick={() => getOrderID(id)}><IoIosSearch size={30}/></i>
        </div>
        </div>
        </div>
     );
}

export default Orders;