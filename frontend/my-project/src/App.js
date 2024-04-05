
import './App.css';
import Register from './components/sign_up/Register.js';
import Login from './components/sign_up/Login.js'
import EditProduct from './components/product/EditProduct.js'
import ProductTable from './components/product/ProductTable.js'
import AddProduct from './components/product/AddProduct.js'
import Navbar from './components/navbar/Navbar.js';
import OrderTable from './components/orders/OrderTable.js'
import Categorys from './components/category/CategoryTable.js';
import AddCategory from './components/category/AddCategory.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from './components/userList/UserList.js';
import Home from './components/home_page/Home.js'
import Welcome from './components/user/Welcome.js';
import Card from './components/Card.js';
import FuncHome from './components/home_page/FuncHome.js'
import Track from './components/home_page/Track.js'
import Checkout from './components/user/Checkout.js';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route path='/user/:id/home/orders' element={<Checkout/>}/>
        <Route path='/user/:id/home/track' element={<Track/>}/>
          <Route path='/user/:id/home' element={<FuncHome/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/user/:id' element={<Welcome/>}/>
          <Route path='/categories/add' element={<AddCategory/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path='/userlist' element={<UserList/>}/>
          <Route path='/categories' element={<Categorys />} />
          <Route path='/orders' element={<OrderTable />} />
          <Route path='/nav' element={<Navbar name="products" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductTable />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
