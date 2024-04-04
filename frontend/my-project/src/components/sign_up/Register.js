import React, { useState } from "react";
import icon from "../../assets/icon.png";
import { MdEmail } from "react-icons/md";
import { FaLock, FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import axios from "axios"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";




function Register() {
    const [firstname, setfName] = useState("");
    const [lastname, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("")
    const navigate = useNavigate();

    const [clicked, setClicked] = useState(false);
    const [showEye, setShowEye] = useState(0);

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/register", {
                firstname,
                lastname,
                email,
                password,
                mobile,
                address,
            });
            alert("You Have Succefully Created an Account Please Login")
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };


    const inputStyle = "w-full h-full outline-none bg-slate-50"
    const ContainerStyle = "flex focus:outline-none focus:bg-slate-200 ml-[50%] translate-x-[-50%] border rounded-lg border-white  bg-slate-50 w-3/5 text-[25px] h-14 justify-center mt-6";
    const iconStyle = "my-auto mx-3"
    return (

        <div className="bg-gradient-to-r white min-h-screen flex w-full from-emerald-500 to-cyan-400 border border-black ">
            <div className="w-[50%]">

                <h1 className="text-7xl {cyan}-600 font-bold text-center mt-[30%]">Welcome !</h1>
                <div className="text-3xl mt-5 font-bold text-center ">If you already have an Account then login</div>
                <Link to={'/login'}>
                    <button className="text-white rounded-xl font-poppins tracking-widest bg-black text-2xl h-14 outline-none mt-12 ml-[50%] translate-x-[-50%] w-52">
                        LOGIN</button>
                </Link>
            </div>
            <div className="w-[40%]  pt-28">

                <h1 className="text-6xl text-center mt-0 font-bold">Register</h1>
                <div className="">
                    <img src={icon} alt="" className="size-36 mx-auto mt-6"
                    />
                    <form onSubmit={saveUser}>
                        <div className={ContainerStyle} >
                            <i className={iconStyle}><FaUser /></i>
                            <input type="text" className={inputStyle} placeholder="First Name"
                                value={firstname} onChange={(e) => setfName(e.target.value)}
                                onFocus={()=>setShowEye(0)}
                            />
                        </div>
                        <div className={ContainerStyle} >
                            <i className={iconStyle}><FaUser /></i>
                            <input type="text" className={inputStyle} placeholder="Last Name"
                                value={lastname} onChange={(e) => setlName(e.target.value)}
                                onFocus={()=>setShowEye(0)}
                            />
                        </div>
                        <div className={ContainerStyle} >
                            <i className={iconStyle}><MdEmail /></i>
                            <input type="text" className={inputStyle} placeholder="Email"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                onFocus={()=>setShowEye(0)}
                            />
                        </div>
                        <div className={ContainerStyle} >
                            <i className={iconStyle}><FaLock /></i>
                            <input type={showEye == 2 ? "text" : "password"} className={inputStyle} placeholder="Password"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                onFocus={() =>{if (!clicked || showEye == "0") {
                                    setClicked(true);
                                    setShowEye(1)
                                } 
                                }} 
                            />
                            <i className={showEye == "2" ? "my-3.5 mx-3 hover:cursor-pointer" : "hidden"} onClick={() => setShowEye(1)}><IoEyeSharp /></i>
                            <i className={showEye == "1" ? "my-3.5 mx-3 hover:cursor-pointer" : "hidden"} onClick={() => setShowEye(2)}><IoMdEyeOff /></i>
                        </div>

                        <div className={ContainerStyle} >
                            <i className={iconStyle}><FaPhoneAlt /></i>
                            <input type="text" className={inputStyle} placeholder="Mobile Number"
                                value={mobile} onChange={(e) => setMobile(e.target.value)}
                                onFocus={()=>setShowEye(0)}
                            />
                        </div>

                        <div className={ContainerStyle} >
                            <i className="my-auto mx-3"><IoLocationSharp /></i>
                            <input type="text" className={inputStyle} placeholder="Address"
                                value={address} onChange={(e) => setAddress(e.target.value)}
                                onFocus={()=>setShowEye(0)}
                            />
                        </div>

                        <button type="submit" className="text-white rounded-xl pb-1 font-poppins tracking-widest bg-black text-3xl font-semibold h-14 outline-none mt-4 ml-[50%] translate-x-[-50%] w-52">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;