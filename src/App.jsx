import { useState, lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// Pages
const About = lazy(() => import("./pages/about/About"));
const Home = lazy(() => import("./pages/landing/Home"));
const Meats = lazy(() => import("./pages/meats/Meats"));
const SingleProduct = lazy(() =>
  import("./pages/single-product/SingleProduct")
);
const FAQs = lazy(() => import("./pages/faqs/FAQs"));
const ContactUs = lazy(() => import("./pages/contact-us/ContactUs"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const Proof = lazy(() => import("./pages/proof/Proof"));

import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<></>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<></>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/meats/item/:id"
            element={
              <Suspense fallback={<></>}>
                <SingleProduct />
              </Suspense>
            }
          />
          <Route
            path="/meats/:category"
            element={
              <Suspense fallback={<></>}>
                <Meats />
              </Suspense>
            }
          />
          <Route
            path="/faqs"
            element={
              <Suspense fallback={<></>}>
                <FAQs />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<></>}>
                <ContactUs />
              </Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<></>}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="/checkout/:step"
            element={
              <Suspense fallback={<></>}>
                <Checkout />
              </Suspense>
            }
          />
          <Route
            path="/proof-of-payment"
            element={
              <Suspense fallback={<></>}>
                <Proof />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
