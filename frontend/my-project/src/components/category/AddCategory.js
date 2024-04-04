import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddCategory = () => {
    const [category_id, setCategoryId] = useState("");
    const [product_id, setProductId] = useState("");
    const [category_name, setCategoryName] = useState("")
   

    const navigate = useNavigate();

    const AddCategory = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/categories`, {
                category_id,
                product_id,
                category_name,
            });
            navigate("/categories");
        } catch (error) {
            console.log(error);
        }
    };
    const oc = () => {
        navigate("/products");
    }

    return (
        <div>
            <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 2xl:h-screen pt-32 xl:h-full">
            <div className="mx-auto w-1/2 rounded-2xl  border border-black bg-gray-50 bg-opacity-50 pb-48 pl-32">
            <h1 className="text-5xl font-semibold pt-10 text-center pr-[128px]">Add Product</h1>
                <div className="text-2xl font-semibold font-mono 2xl:flex 2xl:flex-wrap 2xl:[&>div]:mx-10 [&>div]:mt-4 mt-14 xl:pr-20 [&_input]:text-2xl [&_input]:w-96 [&_input]:h-10 ">
                        
                            <div className="">
                                <div className="">Category ID:</div>
                                <input
                                    type="text"
                                    className="input focus:outline-none rounded-md hover:bg-slate-100 pl-5 focus:ring-2 focus:ring-blue-400 border-slate-50"
                                    value={category_id}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    placeholder=""
                                />
                            </div>
                            <div className="">
                                <div className="">product ID:</div>
                                <input
                                    type="text"
                                    className="input focus:outline-none rounded-md hover:bg-slate-100 pl-5 focus:ring-2 focus:ring-blue-400 border-slate-50"
                                    value={product_id}
                                    onChange={(e) => setProductId(e.target.value)}
                                    placeholder=""
                                />
                            </div>
                        
                        <div>
                            <div className="">Category name:</div>
                            <input
                                type="text"
                                className="input focus:outline-none rounded-md hover:bg-slate-100 pl-5 focus:ring-2 focus:ring-blue-400 border-slate-50"
                                value={category_name}
                                onChange={(e) => setCategoryName(e.target.value)}
                                placeholder=""
                            />
                        </div>
                        <div></div>
                        <div>
                            <form onSubmit={AddCategory}>
                            <button className="border-4 border-lime-600 font-semibold w-96 px-8 mt-9 text-2xl rounded-lg bg-lime-300 py-1 ">
                            Add Category</button>
                            </form>
                        </div>
                        <div>
                            <button onClick={oc} className="border-4 border-amber-600 font-semibold w-96 px-8 mt-9 text-2xl rounded-lg bg-amber-200 py-1 ">
                                Back</button>
                        </div>
                        
                </div>
                </div>
            </div>
        </div>
    );
};

export default AddCategory;