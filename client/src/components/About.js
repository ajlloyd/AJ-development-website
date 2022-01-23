import React from 'react';
import { Button } from 'react-bootstrap';
import "./About.scss";
import Pane from "./Pane";
import ParallaxGroup from './ParallaxGroup';
import ServiceAccordion from "./ServiceAccordion";
var { SocialIcon } = require('react-social-icons');





const About = (props) => {

    function scrollTo() {
        const para = document.querySelector(".parallax-wrapper");
        // For Chrome, Firefox, IE and Opera
        para.scrollTo({
            top: para.scrollHeight,
            left: 0,
            behavior: 'smooth'
          });
      } 

    return (

        <div class="featured-wrapper">


            <div className="about-title">
                <h1 className="title-text">Hi, I am Aaron</h1>
                <div className='my-picture'>
                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Pale'/>
                </div>
                <h1 className="title-text">UK based Developer specialising in Custom Coded Design</h1>
                <h3 className="title-text" id="tt-sml">HTML // CSS // React // JavaScript // Python</h3>
                <div className='social-banner'>
                    <SocialIcon className="social-icon" bgColor="#9D9595" url="https://linkedin.com/in/aaron-lloyd-300a621b3/" />
                    <SocialIcon className="social-icon" bgColor="#9D9595" url="https://github.com/ajlloyd" />
                    <SocialIcon className="social-icon" bgColor="#9D9595" url="mailto:ajlloyd.dev@gmail.com" />
                </div>
                <Button className="contact-btn" variant="outline-dark" onClick={() => scrollTo()}> Contact Me </Button>
                

                
            </div>


            <div className="feat-row-wrap-lrg">
                <div className="feat-col-lrg" id="Lcol1">
                    <Pane serviceId="1"/>
                    <ServiceAccordion textNumber="1" />
                </div>
                
                <div className="feat-col-lrg" id="Lcol2">
                    <Pane serviceId="2"/>
                    <ServiceAccordion textNumber="2"/>
                </div>

                <div className="feat-col-lrg" id="Lcol3">
                    <Pane serviceId="3"/>
                    <ServiceAccordion textNumber="3" />
                </div>
            </div>

            {/*<div className='block'>

                hello

            </div>

            <ParallaxGroup 
          id="group1" 
          layer1="base-layer" 
          layer2="mid-layer"
          topLayerText="Aaron Lloyd Development"
          topLayerSubText="Expert Web Developer helping you bring your ideas to life"
          PageType="main"/>

            <div className='block'>

                hello

    </div>*/}



        
            


            
            
        </div>
        
    )
}

export default About
