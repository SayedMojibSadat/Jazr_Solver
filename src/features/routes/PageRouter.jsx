import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../home/pages/Home'

function PageRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default PageRouter