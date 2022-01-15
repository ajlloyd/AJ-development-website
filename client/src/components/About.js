import React from 'react';
import "./About.scss";
import Pane from "./Pane";
import ServiceAccordion from "./ServiceAccordion";




const About = () => {
    return (

        <div class="featured-wrapper">

            {/*<div className='my-picture'>
                <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Pale'/>
            </div>*/}


            <div className="about-title">
                <h1 className="title-text">Hi, I am Aaron</h1>
                <div className='my-picture'>
                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Pale'/>
                </div>
                <h1 className="title-text">React and Python Developer</h1>
                
                <div className='desc-wrap'>
                    {/*<div className='desc-single'>
                        <h2 >Turning Your Ideas into</h2>
                        <h2 id="slk-ani"> Reality</h2>
                    </div>
                    <div className='desc-single'>
                        <h2 id="slk-ani">Precise Code</h2>
                        <h2> &#38; accurate design</h2>
                    </div>*/}
                    
                </div>
                
            </div>



            
            <hr class="solid"/>


            {/*-------------------------------*/}

            <div className="feat-row-wrap-lrg">
                <div className="feat-col-lrg" id="Lcol1">
                    <Pane serviceId="1"/>
                    <ServiceAccordion />
                </div>
                
                <div className="feat-col-lrg" id="Lcol2">
                    <Pane serviceId="2"/>
                    <ServiceAccordion/>
                </div>

                <div className="feat-col-lrg" id="Lcol3">
                    <Pane serviceId="3"/>
                    <ServiceAccordion/>
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
