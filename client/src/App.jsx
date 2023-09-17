import { Route, Routes } from 'react-router-dom'
import './App.css'
import FormActivity from './Pages/FormActivity'
import { Home, LandingPage, DetailPage } from "./Pages/index"


function App() {


  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/country/:id' element={<DetailPage />} />
        <Route path="/form" element={<FormActivity />} />
      </Routes>
    </div>
  )
}

export default App
