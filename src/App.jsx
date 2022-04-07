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

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
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
            path="/meats"
            element={
              <Suspense fallback={<></>}>
                <Meats />
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
