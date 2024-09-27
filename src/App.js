import React from "react";
import Home from "./Components/Component/Home";
import AboutUs from "./Components/Component/AboutUs";
import Product from "./Components/Component/Product";
import Contact from "./Components/Component/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
function App() {
  return (
    <div className="App w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
