import React from 'react'
import styles from "../styles/PaneBody.module.scss" 
import {SiJavascript, SiReact, SiNextdotjs, SiHtml5, SiFirebase, SiCss3, SiBootstrap, SiNodedotjs, SiMongodb, SiExpress, SiPostman, SiScikitlearn, SiPlotly, SiKeras, SiTensorflow, SiFlask, SiNumpy, SiPandas} from "react-icons/si"


const CustomAccordionBody = (props, {textNumber}) => {
    console.log(props.textNumber)

    switch (props.textNumber) {
// Text description for expanded accordion 1 ------------
        case "1":
            return(
                <div className={styles.bodyWrapper}>
                    <div className={styles.bodyText}>
                        <h3>Professional design which can be customised to your business or personal needs.</h3>
                        <h3>Tools for Front End Design:</h3>
                    </div>
                    <div className={styles.iconContainer}>
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"#94daff"}}><SiReact/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>ReactJS </h3>
                        </div>
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"#949494"}}><SiNextdotjs/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>NextJS Framework </h3>
                        </div>
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"#fcba03"}}><SiJavascript/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>JavaScript</h3>
                        </div>
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"#e05b19"}}><SiHtml5/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>HTML</h3>
                        </div>
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"#11a0ed"}}><SiCss3/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>SCSS Styling</h3>
                        </div>
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"#6919e0"}}><SiBootstrap/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>Bootstrap Framework</h3>
                        </div>
                    </div>
                </div>
            )
            break;

// Text description for expanded accordion 1 ------------
        case "2":
            return(
                <div className={styles.bodyWrapper}>
                    <div className={styles.bodyText}>
                        <h3>Full-Stack React App development using a MERN stack (Mongo, Express, React, Node).</h3>
                        <h3>Tools for React Apps:</h3>
                    </div>

                    <div className={styles.iconContainer}>
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"#0b991b"}}><SiMongodb/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>Mongo Database</h3>
                        </div>
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"yellow"}}><SiFirebase/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>Firebase</h3>
                        </div>
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"#94daff"}}><SiReact/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>ReactJS </h3>
                        </div>
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"#949494"}}><SiNextdotjs/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>NextJS Framework </h3>
                        </div>
                        
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"#1a8a01"}}><SiNodedotjs/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>NodeJS</h3>
                        </div>
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"#fc7303"}}><SiPostman/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>Postman API</h3>
                        </div>
                        
                    </div>

            
                </div>
            )
            break;

// Text description for expanded accordion 1 -------------
        case "3":
            return(
                <div className={styles.bodyWrapper}>
                    <div className={styles.bodyText}>
                        <h3>In addition to web development, I also offer a diverse range of Python services too.</h3>
                        <h3>I have previously worked on projects which have included:</h3>
                    </div>

                    <div className={styles.iconContainer}>
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"red"}}><SiKeras/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>Keras API</h3>
                        </div>
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"#fc7303"}}><SiTensorflow/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>TensorFlow</h3>
                        </div>
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"#94daff"}}><SiNumpy/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>Numpy</h3>
                        </div>
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"#ffffff"}}><SiPandas/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>Pandas</h3>
                        </div>
                        
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"#fc7303"}}><SiScikitlearn/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>SciKit Learn</h3>
                        </div>
                        <div className={styles.singleIconPane}>
                            <div className={styles.icon}>
                                <h1 style={{color:"#34396e"}}><SiPlotly/></h1>
                            </div>
                            <h3 className={styles.iconPaneText}>Plotly</h3>
                        </div>
                        
                    </div>
                    
                    {/*<div className={styles.iconContainer}>
                        <div className={styles.iconRow}>


                            <div className={styles.icon}>
                                <h1 style={{color:"red"}}><SiKeras/></h1>
                                <h3 className={styles.iconText}>Keras</h3>
                            </div>

                            <div className={styles.icon}>
                                <h1 style={{color:"#ffffff"}}><SiFlask/></h1>
                                <h3 className={styles.iconText}>Flask</h3>
                            </div>
                            
                            <div className={styles.icon}>
                                <h1 style={{color:"#94daff"}}><SiNumpy/></h1>
                                <h3 className={styles.iconText}>NumPy</h3>
                            </div>
                        </div>
                        <div className={styles.iconRow}>

                            <div className={styles.icon}>
                                <h1 style={{color:"#ffffff"}}><SiPandas/></h1>
                                <h3 className={styles.iconText}>Pandas</h3>
                            </div>

                            <div className={styles.icon}>
                                <h1 style={{color:"#048B86"}}><SiPython/></h1>
                                <h3 className={styles.iconText}>Python</h3>
                            </div>
                            <div className={styles.icon}>
                                <h1 style={{color:"#fc7303"}}><SiTensorflow/></h1>
                                <h3 className={styles.iconText}>TensorFlow</h3>
                            </div>
                        </div>
            </div>*/}
                    
                </div>
            )
            break;
            
// Text description for expanded accordion default -------
        default:
            return null
    }
};

export default CustomAccordionBody
