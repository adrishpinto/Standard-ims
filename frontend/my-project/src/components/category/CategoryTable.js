import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";






function Categorys() {
    const [cat, setCat] = useState("");
    const [categorys,setCategorys] = useState([])
    
    useEffect(() => {
        getCategory();
      }, []);
    
    const getCategory = async () => {
        const res = await axios.get("http://localhost:5000/categories");
        setCategorys(res.data);
    }
    const getCategoryID = async (id) => {
        const res = await axios.get(`http://localhost:5000/categories/${id}`)
        setCategorys(res.data);
        }
        const deleteCategory = async (id)=>{
          try {
            
            await axios.delete(`http://localhost:5000/categories/${id}`)
            getCategory();
          } catch (error) {
            console.log(error)
          }
          }
    

    return ( 
        <div>
    <Navbar name="categories"></Navbar>
    <div className="w-full h-screen dark:bg-slate-950">
        <h1 className="text-center text-6xl font-sans font-semibold pt-16 dark:text-gray-300">Categories</h1>
        <div class="relative overflow-x-auto shadow-2xl dark:shadow-none border-gray-100 w-4/5 mx-auto mt-14 mb-14">
          <table class="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400  bg-cyan-500 [&_th]:w-96">
            <tr>
            <th scope="col" className="text-2xl">
              Category_id
            </th>
              <th scope="col" class="px-6 py-3 text-2xl">
              product_id
              </th>
              <th scope="col" class="px-6 py-3 text-2xl">
              Category Name
              </th>
              <th scope="col" class="px-6 py-3 text-2xl">
              Action
              </th>
            </tr>
          </thead>
          <tbody>
          {categorys.map((item)=>(
            <tr className='text-2xl text-center border-b dark:border-gray-700 dark:bg-gray-800 '> 
            <td>{item.category_id}</td>
            <td>{item.product_id}</td>
            <td>{item.category_name}</td>
            <td className="text-blue-600 hover:underline dark:text-white py-3"> <div className='hover:cursor-pointer w-20 mx-auto' onClick={()=>deleteCategory(item._id)}>Delete</div></td>
            </tr>)
          )}
           
          </tbody>
        </table> 

        </div>
        <div className='relative w-96 mx-auto h-12'>
        <input
             type="text" className="w-96 mx-auto h-full text-center text-2xl font-[Poppins] focus:outline-none dark:focus:border-gray-400 dark:border-gray-500 dark:bg-gray-900 dark:text-gray-400 dark:placeholder:text-gray-300 rounded border-slate-400 border-4 focus:bg-white placeholder:text-2xl bg-slate-200 focus:border-cyan-600"
             onKeyDown={(e,cat1= `${cat}`) => {
              if(e.key==='Enter')
              getCategoryID(cat1);
            }}
             placeholder="Search ID..." value={cat}  onChange={(e) => setCat(e.target.value)}></input>
            <i className=" left-2 top-2  absolute hover:cursor-pointer dark:text-gray-300"  onClick={() => getCategoryID(cat)}><IoIosSearch size={30}/></i>
            <Link to="add">
          <button className="mx-auto ml-[50%] translate-x-[-50%] h-12 mt-5 font-[Poppins] hover:bg-lime-200 dark:hover:bg-gray-600 dark:border-gray-500 dark:text-white dark:bg-gray-900 border-lime-500 text-2xl w-96 inline border-4 bg-lime-300 focus:bg-lime-300">
          Add Category</button>
        </Link>
        </div>
        </div>
        </div>
     );
}

export default Categorys;