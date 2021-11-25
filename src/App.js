import Home from "./components/Home";
import Products from "./components/Products";
import Navbar from "./layout/Navbar";
import { Routes, Route } from 'react-router-dom'

import Product from "./components/Product/Product";
import Footer from "./layout/Footer";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Admin from "./components/admin/Admin";
function App() {

  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Products />} />
        <Route path='/shop/:productId' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
