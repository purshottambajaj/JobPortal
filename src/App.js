import React from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import JobSearch from './components/JobSearch'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <JobSearch/>
      <Footer/>
    </div>
  )
}

export default App