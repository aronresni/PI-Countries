import React from 'react'
import Footer from '../components/Footer/Footer.jsx'
import { CountriesCard, Filters, NavBar } from '../components/index.js'

const Home = () => {
  return (
    <>

      <NavBar />
      <Filters />
      <CountriesCard />
      <Footer />
    </>
  )
}

export default Home
