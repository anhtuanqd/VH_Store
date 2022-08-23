import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./feature/Home/Home";
import Product from "./feature/Products/Products";
import About from "./feature/AboutUs/About";
import Contact from "./feature/Contact/Contact";
import ProductDetail from "./feature/ProductDetail/ProductDetail";
import ContentLayout from "./components/layouts/ContentLayout/ContentLayout";
import AoQuan from "./feature/Products/productchild/Aoquan";
import Vay from "./feature/Products/productchild/Vay";
import PhuKien from "./feature/Products/productchild/Phukien";
import Khac from "./feature/Products/productchild/Khac";
import Login from "./feature/login/login";
import Cart from "./feature/cart/cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ContentLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />}>
            <Route path="/products" element={<AoQuan />} />
            <Route path="/products/vay" element={<Vay />} />
            <Route path="/products/phukien" element={<PhuKien />} />
            <Route path="/products/khac" element={<Khac />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
