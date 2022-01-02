import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss"
import ParallaxGroup from './components/ParallaxGroup';
import About from './components/About';
import TopNavbar from './components/TopNavbar';
import Contact from './components/Contact';


const App = () => {
  return (

    <div>
      <div class="parallax-wrapper">
        <TopNavbar /> 

        <ParallaxGroup 
          id="group1" 
          layer1="base-layer" 
          layer2="mid-layer"
          baseLayerImg="https://images.pexels.com/photos/695228/pexels-photo-695228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
          topLayerText="bespoke web development"
          topLayerSubText="so you can relax!!"
          PageType="main"/>

        <About />

        <ParallaxGroup 
          id="group1" 
          layer1="mid-layer" 
          layer2="top-layer"
          baseLayerImg="https://images.pexels.com/photos/157039/pexels-photo-157039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
          topLayerText="bespoke web design"
          topLayerSubText="so you can relax"
          />
          
        <Contact/>

        
      </div>

    </div>
    

    
      
  
  )
}

export default App

