import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AfterSearch from './components/AfterSearch.jsx'
import PerticularTemple from './components/PerticularTemple.jsx'
import './index.css'
import Display from './components/Display.jsx'
import { createBrowserRouter, Router, Route, Routes, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import StateTemple from './components/StateTemple.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App />} />
    <Route path="/temples/:stateName" element={<StateTemple />} />
    <Route path="/temple/:stateName" element={<PerticularTemple />} />
    <Route path="/search" element={<AfterSearch />} />
    <Route path="/about" element={<About />} />
    </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
