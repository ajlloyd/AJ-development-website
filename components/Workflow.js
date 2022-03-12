import React from 'react';
import { icons } from 'react-icons/lib';
import styles from "../styles/Workflow.module.scss"
import {BsCameraVideoFill} from "react-icons/bs"
import {AiOutlineGateway} from "react-icons/ai"
import {IoBuild} from "react-icons/io5"
import {GiPartyPopper} from "react-icons/gi"

const Workflow = () => {
  return (

    <div className={styles.workflowContainer}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.workflowTitle}>My Workflow</h1>
        <h5 className={styles.workflowDescription}> 
          Whether you are looking for a front end site or a full stack app, here are the main steps of my development process which we will work through together:
        </h5>
      </div>
      <div className={styles.stepsContainer}>

        <table>
          <tr>
            
            <td>
                <div className={styles.stepCircle} id={styles.circle1}>
                  <h1><BsCameraVideoFill/></h1>
                </div>
            </td>

            <td>
              <div className={styles.stepCircle} id={styles.circle2}>
                <h1><AiOutlineGateway/></h1>
              </div>
            </td>

            <td>
              <div className={styles.stepCircle} id={styles.circle3}>
                <h1><IoBuild/></h1>
              </div>
            </td>

            <td>
              <div className={styles.stepCircle} id={styles.circle4}>
                <h1><GiPartyPopper/></h1>
              </div>
            </td>

          </tr>

          <tr>
            <td>
              <div className={styles.stepHeading}>
                <h1>Consultation</h1> 
              </div>
            </td>

            <td>
              <div className={styles.stepHeading}>
                <h1>Prototyping</h1> 
              </div>
            </td>

            <td>
              <div className={styles.stepHeading}>
                <h1>Building</h1> 
              </div>
            </td>

            <td>
              <div className={styles.stepHeading}>
                <h1>Release</h1> 
              </div>
            </td>
          
          </tr>

          <tr>

            <td>
              <div className={styles.stepDescription}>
                <h1>Reach out and schedule a consultation call free of charge. </h1>
                <h1>We will cover ideas, timeframes, and any questions you may have.</h1>
              </div>
            </td>

            <td>
              <div className={styles.stepDescription}>
                <h1>We will begin by producing wireframes / prototypes of your vision.</h1>
                <h1>Bring logos, images, branding, or fonts and I will incorporate these too.  </h1>
              </div>
            </td>

            <td>
              <div className={styles.stepDescription}>
                <h1> I will then begin development of your site giving you regular updates. </h1>
                <h1> There will be opportunities to tweak ideas along the way. </h1>
              </div>
            </td>

            <td>
              <div className={styles.stepDescription}>
                <h1> Once you are happy it is time to release! </h1>
                <h1> I can simply send over source files or assist you with deployment on Heroku. </h1>
              </div>
            </td>

          </tr>
          
          

            
              {/*<div className={styles.stepDescription}>
                <h1>Reach out and schedule a consultation call free of charge. </h1>
                <h1>We will cover your ideas, timeframes, and any questions you may have.</h1>
              </div>
              
            </td>

            <td>
              <div className={styles.stepHeading}>
                <h1>Prototyping</h1>
              </div>
              <div className={styles.stepDescription}>
                <h1>We will begin by producing wireframes and prototypes of your vision.</h1>
                <h1>Bring any logos, images, branding, or fonts and I will incorporate these too.  </h1>
              </div>
            </td>

            <td>
              <div className={styles.stepHeading}>
                <h1>Building</h1> 
              </div>
              <div className={styles.stepDescription}>
                <h1> I will then begin development of your site giving you regular updates. </h1>
              </div>
            </td>

            <td>
              <div className={styles.stepHeading}>
                <h1>Release</h1> 
              </div>
              <div className={styles.stepDescription}>
                <h1> Once you are happy I will send you the project. </h1>
              </div>
            </td>*/}

      


        </table>

        
        </div>

     


    </div>


  );
};

export default Workflow;
