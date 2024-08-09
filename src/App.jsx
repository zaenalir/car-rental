import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Home from './pages/Home'
import Pencarian from './pages/Pencarian'
import Detail from './pages/Detail'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import assets from './assets'
// import { Routes, Route } from 'react-router-dom'
import {  Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cari" element={<Pencarian />} />
        <Route path="/cari/detail/:id" element={<Detail />} />
      </Routes>
    </>

    
  )
}
// Agar bisa diimport dari main.jsx harus ada command utk export
export default App
