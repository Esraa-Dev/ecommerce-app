import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import Cart from "./component/Cart";
import Login from './component/Login';
// import Register from "./component/Register";
import { Routes, Route } from "react-router-dom";
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;










