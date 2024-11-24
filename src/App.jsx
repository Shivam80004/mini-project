import { useState } from 'react'
import './App.css'
import Display from './components/Display.jsx'
import Features from './components/Features'
import AllStates from './components/AllStates'
import Map from './components/Map.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import ImageGallery from './components/ImageGallery.jsx'
import MapComponent from './components/MapComponent.jsx'
import MapWithDirections from './components/MapWithDirections.jsx'
import React, { useEffect } from 'react';
import AnimatedSection from './components/AnimatedSection.jsx'


function App() {

  return (
    <>
      <Hero />
      <ImageGallery />
      <Display/>
      <Features />
      <Footer/>
      {/* <MapComponent /> */}
    </>
  )
}

export default App
