import React from 'react'
import "./CustomAccordionBody.scss"


const CustomAccordionBody = (props, {textNumber}) => {
    console.log(props.textNumber)

    switch (props.textNumber) {
// Text description for expanded accordion 1 ------------
        case "1":
            return(

                <div>
                    <h3>Professional Front-End design which can be customised to your business or personal needs.</h3>
                    <h3>For Web Design I use:</h3>
                    <li>ReactJS </li>
                    <li>HTML</li>
                    <li>CSS (SCSS)</li>
                    <li>Bootstrap</li>
                    <li>NodeJS</li>
                </div>
            )
            break;
// Text description for expanded accordion 1 ------------
        case "2":
            return(
                <div>
                    <h3>Full-Stack React App development using a MERN stack (Mongo, Express, React, Node).</h3>
                    <h3>For React Apps I use:</h3>
                    <li>ReactJS Front-End (HTML/SCSS) </li>
                    <li>Mongo Database </li>
                    <li>Express + NodeJS Back-End API service</li>
                    <li>Postman API testing</li>
                    
                </div>
            )
            break;
// Text description for expanded accordion 1 -------------
        case "3":
            return(
                <div>
                    <h3>Diverse Python programming assistance / project work</h3>
                    <h3>I have previously worked on projects for:</h3>
                    <li>Data Science (Numpy, SKLearn, Pandas etc.)</li>
                    <li>Machine Learning (TensorFlow, Keras) </li>
                    <li>Web Development (Flask)</li>
                    <li>Data Processing</li>
                    <li>API development </li>
                </div>
            )
            break;
// Text description for expanded accordion default -------
        default:
            return null
    }

 
};

export default CustomAccordionBody
