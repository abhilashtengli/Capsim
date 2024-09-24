import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import Product from "./Component/Product";
import Contact from "./Component/Contact";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Home page Loading...</div>}>
          <Home />{" "}
        </Suspense>
      ),
    },
    {
      path: "/about",
      element: (
        <Suspense fallback={<div>About Us Loading...</div>}>
          <AboutUs />
        </Suspense>
      ),
    },
    {
      path: "/product",
      element: (
        <Suspense fallback={<div>Product page Loading...</div>}>
          <Product />
        </Suspense>
      ),
    },
    {
      path: "/contact",
      element: (
        <Suspense fallback={<div></div>}>
          <Contact />{" "}
        </Suspense>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
