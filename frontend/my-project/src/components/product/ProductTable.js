import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { Link, Navigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";


const ProductTable = () => {
  const [products, setProduct] = useState([]);
  const [category,setCategory] = useState("");
  const a = ["red","blue","green"]
  const td_style = "text-2xl"

  
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:5000/products");
    setProduct(res.data);
  };
  
  const deleteProduct = async (id)=>{
  try {
    
    await axios.delete(`http://localhost:5000/products/${id}`)
    getProducts();
  } catch (error) {
    console.log(error)
  }
  }
  const findCategory = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/category/${id}`)
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
    
  function handleKeyDown(event,category) {
    if (event.key === 'Enter') {
      findCategory(category); 
    }
  }
 
  return (
    <div>
    <Navbar name="products"></Navbar>
      <div className="w-full h-screen dark:bg-slate-950">
        <h1 className="text-center text-6xl font-sans font-semibold pt-16 dark:text-gray-300">Products </h1>
        <div class="relative overflow-x-auto shadow-2xl dark:shadow-none border-gray-100 w-[90%] mx-auto mt-14 mb-14">
          <table class="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400  bg-cyan-500">
              <tr>
                <th scope="col" className="px-6 py-3 text-2xl">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3 text-2xl">
                  Color
                </th>
                <th scope="col" className="px-6 py-3 text-2xl">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-2xl">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-2xl">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3 text-2xl">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-2xl">
                  Modify
                </th>
                <th scope="col" className="px-6 py-3 text-2xl">
                  Delete
                </th>
                <th class="px-6 py-3 text-2xl">
                  Image
                </th>
              </tr>
            </thead>
            <tbody>
        
              {products.map((item, i) => (
                <tr key={item.product_Id} className={`text-center dark:bg-gray-800 text-2xl border-b dark:border-gray-700 ${i%2 == 1 ? "bg-gray-100" : "bg-white"}`}>
                  <td className="px-6 py-3 dark:text-white">{item.productname}</td>
                  <td>{item.color}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.rating}</td>
                  <td>{item.quantity}</td>
                  <td><Link
                      to={`edit/${item._id}`}
                      className="text-blue-600 hover:underline dark:text-white px-6 py-3"
                    >
                      Edit
                    </Link></td>
                  <td className="text-blue-600 hover:underline dark:text-white px-6 py-3" onClick={()=>deleteProduct(item._id)}>Delete</td>
                  <Link to={`${item.image}` } target="_blank">
                    <td className="px-6 py-3"><img className="h-24 w-16 mx-auto hover:opacity-80" src={`${item.image}`}></img></td>
                  </Link>
                </tr>
              ))}
        
            </tbody>
        
          </table>
        </div>
        <div className="w-96 h-12 mx-auto bg-slate-300 flex focus:bg-white">
          <input
           type="text" className="w-96 h-full text-center text-2xl dark:bg-gray-900 dark:focus:border-gray-400 dark:border-gray-500 dark:text-gray-300 dark:placeholder:text-gray-300 font-[Poppins] focus:outline-none rounded border-slate-400 border-4 focus:bg-white placeholder:text-2xl bg-slate-200 focus:border-cyan-600"
           onKeyDown={(e,category1=`${category}`) => {
            if(e.key==='Enter')
            findCategory(category1);
        }}
           placeholder="Search Category..." value={category}  onChange={(e) => setCategory(e.target.value)}></input>
           <i className="mt-2 mx-3 absolute hover:cursor-pointer dark:text-white "  onClick={() => findCategory(category)}><IoIosSearch size={30}/></i>
        </div>
        <Link to="/product/add">
          <button className="mx-auto ml-[50%] translate-x-[-50%] h-12 mt-5 font-[Poppins] hover:bg-lime-200 dark:hover:bg-gray-600 dark:border-gray-500 dark:text-white dark:bg-gray-900 border-lime-500 text-2xl w-96 inline border-4 bg-lime-300 focus:bg-lime-300">
          Add Product</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductTable;