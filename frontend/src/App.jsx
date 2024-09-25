// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
      <main>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
