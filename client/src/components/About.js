import React from 'react'
import "./About.scss"
import Pane from "./Pane"
import ServiceAccordion from "./ServiceAccordion"




const About = () => {
    return (

        <div class="featured-wrapper">



            <div className="about-title">
                <h1 className="title-text">About Me</h1>
            </div>
            <hr class="solid"/>

            <div>
                Placeholder
            </div>
            <div>
                Placeholder
            </div>

            <div className="about-title">
                <h1 className="title-text"> My Services</h1>
            </div>
            <hr class="solid"/>


            {/*-------------------------------*/}

            <div className="feat-row-wrap-lrg">
                <div className="feat-col-lrg" id="Lcol1">
                    <Pane serviceId="1"/>
                    
                

                </div>
                <div className="feat-col-lrg" id="Lcol2">
                    <Pane serviceId="2"/>
                    
                </div>

                <div className="feat-col-lrg" id="Lcol3">
                    <Pane serviceId="3"/>
                    
                </div>
            </div>



        
            


            <div className="feat-row-wrap-sml">
                {/*<div className="feat-col-sml" id="col1">
                    <Pane featureId="1" largePane="false"/>
                </div>
                <div className="feat-col-sml"  id="col2">
                    <Pane featureId="2" largePane="false"/>
                </div>
                <div className="feat-col-sml"  id="col3">
                    <Pane featureId="3" largePane="false"/>
                </div>
                <div className="feat-col-sml"  id="col4">
                    <Pane featureId="4" largePane="false"/>
                </div>*/}
            </div> 
            
            <div class="about-text">
                <div class="pane-wrapper">
                      
                </div>
            </div>    
        </div>
        
    )
}

export default About
