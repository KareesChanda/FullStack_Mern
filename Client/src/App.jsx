/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import  Profile from "./pages/Profile"
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    
    </BrowserRouter>
      
    
  )
}

export default App

