import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import DefaultLayout from './layout/DefaultLayout'
import SingleProduct from './pages/SingleProduct'




function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Products' element={<Products />} />
            <Route path='/Products/:id' element={<SingleProduct/>}/>
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
