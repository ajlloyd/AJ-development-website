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
                <h1>Schedule a Call</h1> 
              </div>
              <div className={styles.stepDescription}>
                Feel free to contact me below and I will get back to you regarding a consultation call
              </div>
              
            </td>

            <td>
              <div className={styles.stepHeading}>
                <h1>Prototyping</h1>
              </div>
              <div className={styles.stepDescription}>
                Feel free to contact me below and I will get back to you regarding a consultation call
              </div>
            </td>

            <td>
              <div className={styles.stepHeading}>
                <h1>Building</h1> 
              </div>
              <div className={styles.stepDescription}>
                Feel free to contact me below and I will get back to you regarding a consultation call
              </div>
            </td>

            <td>
              <div className={styles.stepHeading}>
                <h1>Release</h1> 
              </div>
              <div className={styles.stepDescription}>
                Feel free to contact me below and I will get back to you regarding a consultation call
              </div>
            </td>

          </tr>


        </table>

        {/*<div className={styles.singleStepContainer}>
          <div className={styles.circleContainer}>
            <div className={styles.stepCircle}>
              hello
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.stepHeading}>
              Schedule a Call 
            </div>
            <div className={styles.stepDescription}>
              Feel free to contact me below and I will get back to you regarding a consultation call
            </div>
          </div>
        </div>

        <div className={styles.singleStepContainer}>
          <div className={styles.circleContainer}>
            <div className={styles.stepCircle}>
              
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.stepHeading}>
              Prototyping
            </div>
            <div className={styles.stepDescription}>
              Next, we will work on building some wire frames and working out what content you would like and in what positions you would like this.
            </div>
          </div>
        </div>

        <div className={styles.singleStepContainer}>
          <div className={styles.circleContainer}>
            <div className={styles.stepCircle}>
              
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.stepHeading}>
              Building Stage
            </div>
            <div className={styles.stepDescription}>
              Here I will go ahead and being producing your site ...
            </div>
          </div>
        </div>

        <div className={styles.singleStepContainer}>
          <div className={styles.circleContainer}>
            <div className={styles.stepCircle}>
              
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.stepHeading}>
              Closing Call 
            </div>
            <div className={styles.stepDescription}>
              Here we will have one final call to show you the ins and out of the site 
            </div>
          </div>
        </div>*/}

     

      </div>
    </div>


  );
};

export default Workflow;
