import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import GuessRGB from './components/GuessRGB/GuessRGB'
import Home from './components/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="grid grid-cols-[auto_1fr] min-h-screen">
            <main className="relative">
              <Home />
            </main>
          </div>
        } />
        <Route path="/GuessRGB" element={<GuessRGB />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
