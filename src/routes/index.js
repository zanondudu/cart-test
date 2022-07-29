import React from 'react'

import {
  Routes,
  Route,
} from "react-router-dom"

import Home from  '../pages/home'
import Cart from  '../pages/cart'

const Router = () => {
  return (
    <Routes>
      <Route element={<Home />}  path="/" />
      <Route element={<Cart />}  path="cart" />
    </Routes>
  )
}

export default Router
