import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import KHomePage from '../pages/KHomePage'
function RouteX() {
  return (
    <Routes>
        <Route  element={<Home />} path='/' />
        <Route  element={<KHomePage />} path='/k12' />

    </Routes>
  )
}

export default RouteX
