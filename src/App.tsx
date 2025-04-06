import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import GuessRGB from './components/GuessRGB/GuessRGB'
import Home from './components/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen">
            <Home />
          </div>
        } />
        <Route path="/GuessRGB" element={<GuessRGB />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
