// lazy() takes a function that returns a dynamic import() promise. This tells Webpack to create separate chunks for these components.
// Suspense is used to display a fallback UI (the Loading component) while the lazy-loaded components are being fetched.
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// Lazy load components
const Home = lazy(() => import("./forRouter/Home"));
const Contact = lazy(() => import("./forRouter/Contact"));
const About = lazy(() => import("./forRouter/About"));

// Loading component
function Loading() {
  return <div>Loading...</div>;
}

export default function Ten() {
  return (
    <BrowserRouter>
      <nav>
        <ul style={{ display: "flex", gap: "10px", textDecoration: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}