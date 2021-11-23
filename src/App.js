import { Badge, Box, Image } from "@chakra-ui/react"
import Home from "./components/Home";
import Products from "./components/Products";
import Navbar from "./layout/Navbar";
import { Routes, Route } from 'react-router-dom'

import { Flex, Spacer, Center, Text, Square } from "@chakra-ui/react"
import Product from "./components/Product/Product";
import Footer from "./layout/Footer";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
function App() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
