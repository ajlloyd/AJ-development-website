import React from 'react';
import TopNavbar from "../components/TopNavbar"
import ParallaxGroup from "../components/ParallaxGroup"
import About from "../components/About"
import WhyMe from "../components/WhyMe"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Portfolio from '../components/Portfolio';
import Workflow from '../components/Workflow';




const index = () => {
  return (
  <div>
    <Head>
      {/*<meta http-equiv="Content-Security-Policy" content="default-src 'none'; connect-src 'self';font-src 'self'; img-src 'self' data: https:; style-src 'self' ; script-src 'self'" />*/}
      <title>Aaron Lloyd | Web Developer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/images/favicon.ico" />
      
      {/*Content-Security-Policy: default-src 'none'; img-src 'self';*/}
    </Head>
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
        <WhyMe />
        <Portfolio />
        <Workflow />
        <Contact/>
        <Footer />

        
      </div>
  </div>
  
  );
};

export default index;
