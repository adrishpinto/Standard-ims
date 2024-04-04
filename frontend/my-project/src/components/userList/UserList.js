import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import { useEffect } from 'react';



function UserList(props) {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
      getUsers();
    }, [])
    
    const getUsers = async () => {
        const res = await axios.get("http://localhost:5000/login")
        setUsers(res.data);
}

    return (  <div>
        
            <Navbar
                name="userlist"
            />
            <div className="w-full h-screen dark:bg-slate-950">
        <h1 className="text-center text-6xl font-sans font-semibold pt-16 dark:text-gray-300">Users</h1>
        <div class="relative overflow-x-auto shadow-2xl dark:shadow-none border-gray-100 w-5/6 mx-auto mt-14 mb-14">
          <table class="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400  bg-cyan-500">
                <tr>
                <th scope="col" className="text-2xl">
                  First Name
                </th>
                  <th scope="col" class="px-6 py-3 text-2xl">
                  Last Name
                  </th>
                  <th scope="col" class="px-6 py-3 text-2xl">
                  Password
                  </th>
                  <th scope="col" class="px-6 py-3 text-2xl">
                  Address
                  </th>
                  <th scope="col" class="px-6 py-3 text-2xl">
                  Email
                  </th>
                </tr>
              </thead>
              <tbody>
              {users.map((item, i )=>(
                <tr className={`text-2xl text-center border-b dark:border-gray-700 dark:bg-gray-800`}>
                <td className='py-3'>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.password}</td>
                <td>{item.address}</td>
                <td>{item.email}</td>
                </tr>)
              )}
        
              </tbody>
            </table>
            </div>
            </div>
    </div>
    );
}

export default UserList;