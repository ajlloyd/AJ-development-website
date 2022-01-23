import React from 'react'
import "./CustomAccordionBody.scss" 
import {SiJavascript, SiReact, SiHtml5, SiCss3, SiBootstrap, SiNodedotjs, SiMongodb, SiExpress, SiPostman, SiPython, SiKeras, SiTensorflow, SiFlask, SiNumpy, SiPandas} from "react-icons/si"


const CustomAccordionBody = (props, {textNumber}) => {
    console.log(props.textNumber)

    switch (props.textNumber) {
// Text description for expanded accordion 1 ------------
        case "1":
            return(

                <div>
                    <div className='body-text'>
                        <h3>Professional design which can be customised to your business or personal needs.</h3>
                        <h3>Tools for Front End Design:</h3>
                        
                    </div>
                    

                    <div className='icon-wrapper'>
                        <div className='single-icon-container'>
                            <h1 style={{color:"#fcba03"}}><SiJavascript/></h1>
                            <h3>JavaScript</h3>
                        </div>
                        <div className='single-icon-container'>
                            <h1 style={{color:"#94daff"}}><SiReact/></h1>
                            <h3>React</h3>
                        </div>

                        <div className='single-icon-container'>
                            <h1 style={{color:"#e05b19"}}><SiHtml5/></h1>
                            <h3>HTML5</h3>
                        </div>

                        <div className='single-icon-container'>
                            <h1 style={{color:"#11a0ed"}}><SiCss3/></h1>
                            <h3>SCSS</h3>
                        </div>
                        
                        <div className='single-icon-container'>
                            <h1 style={{color:"#6919e0"}}><SiBootstrap/></h1>
                            <h3>Bootstrap</h3>
                        </div>

                        <div className='single-icon-container'>
                            <h1 style={{color:"#1a8a01"}}><SiNodedotjs/></h1>
                            <h3>NodeJS</h3>
                        </div>
                    </div>
                    

                    

                    

                    


                </div>
            )
            break;
// Text description for expanded accordion 1 ------------
        case "2":
            return(
                <div>
                    <div className='body-text'>
                        <h3>Full-Stack React App development using a MERN stack (Mongo, Express, React, Node).</h3>
                        <h3>Tools for React Apps:</h3>

                    </div>
                    

                    <div className='icon-wrapper'>
                        <div className='single-icon-container'>
                            <h1 style={{color:"#0b991b"}}><SiMongodb/></h1>
                            <h3>MongoDB</h3>
                        </div>

                        <div className='single-icon-container'>
                            <h1 style={{color:"#000000"}}><SiExpress/></h1>
                            <h3>Express</h3>
                        </div>
                        
                        <div className='single-icon-container'>
                            <h1 style={{color:"#94daff"}}><SiReact/></h1>
                            <h3>ReactJS</h3>
                        </div>

                        <div className='single-icon-container'>
                            <h1 style={{color:"#1a8a01"}}><SiNodedotjs/></h1>
                            <h3>NodeJS</h3>
                        </div>


                        <div className='single-icon-container'>
                            <h1 style={{color:"#0013a6"}}><SiPython/></h1>
                            <h3>Python</h3>
                        </div>
                        <div className='single-icon-container'>
                            <h1 style={{color:"#fc7303"}}><SiPostman/></h1>
                            <h3>Postman</h3>
                        </div>
                    </div>
                </div>
            )
            break;
// Text description for expanded accordion 1 -------------
        case "3":
            return(
                <div>
                    <div className='body-text'>
                        <h3>Diverse Python programming assistance / project work.</h3>
                        <h3>I have previously worked on projects which have included:</h3>

                    </div>
                    
                    

                    
                    
                    <div className='icon-wrapper'>

                        <div className='single-icon-container'>
                            <h1 style={{color:"red"}}><SiKeras/></h1>
                            <h3>Keras</h3>
                        </div>

                        <div className='single-icon-container'>
                            <h1 style={{color:"#000000"}}><SiFlask/></h1>
                            <h3>Flask</h3>
                        </div>

                        
                        
                        <div className='single-icon-container'>
                            <h1 style={{color:"#94daff"}}><SiNumpy/></h1>
                            <h3>NumPy</h3>
                        </div>

                        <div className='single-icon-container'>
                            <h1 style={{color:"#000000"}}><SiPandas/></h1>
                            <h3>Pandas</h3>
                        </div>


                        <div className='single-icon-container'>
                            <h1 style={{color:"#0013a6"}}><SiPython/></h1>
                            <h3>Python</h3>
                        </div>
                        <div className='single-icon-container'>
                            <h1 style={{color:"#fc7303"}}><SiTensorflow/></h1>
                            <h3>TensorFlow</h3>
                        </div>
                    </div>

                </div>
            )
            break;
// Text description for expanded accordion default -------
        default:
            return null
    }

 
};

export default CustomAccordionBody
