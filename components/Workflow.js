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
              <div className={styles.stepHeading}>
                <h1>Consultation</h1> 
              </div>
              <div className={styles.stepDescription}>
                <h1>Free consultation call</h1>
                <h1>Present your ideas</h1>
                <h1>Ask any questions</h1>
              </div>
            </td>

            <td>
              <div className={styles.stepCircle} id={styles.circle2}>
                <h1><AiOutlineGateway/></h1>
              </div>
              <div className={styles.stepHeading}>
                <h1>Prototyping</h1> 
              </div>
              <div className={styles.stepDescription}>
                <h1>Web design in Figma</h1>
                <h1>Discuss aims and target audience</h1>
                <h1>Bring any branding or logos</h1>
              </div>
            </td>

            <td>
              <div className={styles.stepCircle} id={styles.circle3}>
                <h1><IoBuild/></h1>
              </div>
              <div className={styles.stepHeading}>
                <h1>Building</h1> 
              </div>
              <div className={styles.stepDescription}>
                <h1>Development in React begins</h1>
                <h1>Discuss aims and target audience</h1>
                <h1>Fine-tune your ideas</h1>
              </div>
            </td>

            <td>
              <div className={styles.stepCircle} id={styles.circle4}>
                <h1><GiPartyPopper/></h1>
              </div>
              <div className={styles.stepHeading}>
                <h1>Release</h1> 
              </div>
              <div className={styles.stepDescription}>
                <h1>Recieve your project files</h1>
                <h1>Assitance with domains, hosting, and deployment if needed</h1>
              </div>
            </td>

          </tr>

            {/*<tr>
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
                  <h1>Free consultation call</h1>
                  <h1>Present your ideas</h1>
                  <h1>Ask any questions</h1>
                </div>
              </td>

              <td>
                <div className={styles.stepDescription}>
                  <h1>Web design in Figma</h1>
                  <h1>Discuss aims and target audience</h1>
                  <h1>Bring any branding or logos</h1>
                </div>
              </td>

              <td>
                <div className={styles.stepDescription}>
                  <h1>Development in React begins</h1>
                  <h1>Discuss aims and target audience</h1>
                  <h1>Fine-tune your ideas</h1>
                </div>
              </td>

              <td>
                <div className={styles.stepDescription}>
                  <h1>Recieve your project files</h1>
                  <h1>Assitance with domains, hosting, and deployment if needed</h1>
                </div>
              </td>

            </tr>*/}
          
          

            


      


        </table>

        
        </div>

     


    </div>


  );
};

export default Workflow;
