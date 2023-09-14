import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, LandingPage } from "./Pages/index"


function App() {


  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
