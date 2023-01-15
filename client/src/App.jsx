import React from 'react'
import { Routes, Route } from "react-router-dom";

import { GamePage, LandingPage } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/games/:id' element={<GamePage />} />
    </Routes>
  )
}

export default App
