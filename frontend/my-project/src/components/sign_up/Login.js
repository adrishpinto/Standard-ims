import React, { useState, useEffect } from "react";
import icon from "../../assets/icon.png";
import { MdLockOutline, FaLock,FaUser } from "react-icons/fa";
import axios from "axios"
import { useNavigate, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";





function Register() {
    const [users, setUsers] = useState([]);
    const [firstname, setfName] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const [clicked, setClicked] = useState(false);
    const [showEye, setShowEye] = useState(0);

    useEffect(() => {
        getUsers();
    }, [])




    const getUsers = async (arr) => {
        const res = await axios.get("http://localhost:5000/login")
        setUsers(res.data)
    }

    const Admin = async (name, pass, users) => {
        let arrP = [];
        let check = 0;
        users.map((item) => {
            if (name == item.firstname && pass == item.password) {
                check = 1;
            }
        })
        if (name == "admin" && pass == "1234") {
            navigate("/products")
        }

        else if (check == 1) {
            navigate(`/user/${name}`)
        }
        else{
            alert("incorrect name or password!")
        }
    };

    const inputStyle = "w-full h-full outline-none bg-slate-50"
    const ContainerStyle = "flex focus:outline-none focus:bg-slate-200 ml-[50%] translate-x-[-50%] border rounded-lg border-white  bg-slate-50 w-3/5 text-[25px] h-14 justify-center mt-6";
    const iconStyle = "my-auto mx-3"

    return (
        <div className="bg-gradient-to-r white min-h-screen flex w-full from-emerald-500 to-cyan-400 border border-black ">
            <div className="w-[50%]">
                <h1 className="text-7xl {cyan}-600 font-bold text-center mt-[30%]">Welcome !</h1>
                <div className="text-3xl mt-5 font-bold text-center ">If you Don't have an Account then Register!</div>
                <Link to={'/register'}>
                    <button
                        type="submit"
                        className="text-white rounded-xl font-poppins tracking-widest bg-black text-2xl h-14 outline-none mt-12 ml-[50%] translate-x-[-50%] w-52">
                        Register</button>
                </Link>
            </div>
            <div className="w-[40%]  pt-52">

                <h1 className="text-6xl text-center mt-0 font-bold">Sign-in</h1>
                <div className="">
                    <img src={icon} alt="" className="size-36 mx-auto mt-6"
                    />
                    <div className={ContainerStyle} >
                        <i className={iconStyle}><FaUser /></i>
                        <input type="text" className={inputStyle} placeholder="First Name"
                            value={firstname} onChange={(e) => setfName(e.target.value)}
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

                    <button
                        onClick={() => Admin(firstname, password, users)}
                        
                        type="submit"
                        className="text-white rounded-xl font-poppins tracking-widest bg-black text-2xl h-14 outline-none mt-12 ml-[50%] translate-x-[-50%] w-52">
                        LOGIN</button>

                </div>
            </div>
        </div>
    );
}

export default Register;