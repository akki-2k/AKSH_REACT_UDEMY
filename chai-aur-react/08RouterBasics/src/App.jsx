import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React from "react";
import "tailwindcss";
import "./App.css";

function Home() {
  return <h1>This is Home</h1>;
}
function About() {
  return <h1>This is About</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
          <nav className="max-w-5xl mx-auto px-4 py-4 flex gap-3 items-center">
            {/* Plain buttons for now—no routing logic yet */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "bg-blue-600 text-white" : "bg-white-600 text-black"}px-4 py-2 rounded-lg font-semibold text-sm  shadow-sm`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "bg-blue-600 text-white" : "bg-white-600 text-black"}px-4 py-2 rounded-lg font-semibold text-sm  shadow-sm`
              }
            >
              About
            </NavLink>
          </nav>
        </header>
        <main className="max-w-3xl mx-auto mt-12 px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
