import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss"
import ParallaxGroup from './components/ParallaxGroup';
import About from './components/About';
import TopNavbar from './components/TopNavbar';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (

    <div>
      <div class="parallax-wrapper">
        <TopNavbar /> 

        <ParallaxGroup 
          id="group1" 
          layer1="base-layer" 
          layer2="mid-layer"
          topLayerText="Aaron Lloyd Development"
          topLayerSubText="Expert Web Developer helping you bring your ideas to life"
          PageType="main"/>

        <About />
          
        <Contact/>
        <Footer />

        
      </div>

    </div>
    

    
      
  
  )
}

export default App

