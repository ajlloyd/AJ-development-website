import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from "../styles/About.module.scss";
import Pane from "./Pane";
import PaneBody from "./PaneBody"
var { SocialIcon } = require('react-social-icons');
import Image from "next/image"





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

        <div class={styles.container} id="aboutScroll">
            <div className={styles.wrapper}>
                <h1 className={styles.myIntro} >Hi, I am Aaron</h1>
                
                <div className={styles.picture}>
                    <img src="/profileImage.jpg" alt="My Profile Picture" />
                    {/*<Image src="/profileImage.jpg" alt="My Profile Picture" width="200" height="200"/>*/}
                </div>
                <h1 className={styles.myDescription}>UK based Developer specialising in Custom Coded Design</h1>
                <h3 className={styles.myLang}>HTML // CSS // React // NextJS // JavaScript // Python</h3>
                <div className={styles.socialWrapper}>
                    <SocialIcon className={styles.icon} bgColor="#9D9595" url="https://linkedin.com/in/aaron-lloyd-300a621b3/" />
                    <SocialIcon className={styles.icon} bgColor="#9D9595" url="https://github.com/ajlloyd" />
                    <SocialIcon className={styles.icon} bgColor="#9D9595" url="mailto:ajlloyd.dev@gmail.com" />
                </div>
                <Button className={styles.contactBtn} variant="outline-dark" onClick={() => scrollTo()}> Contact Me </Button>
            </div>

            <div className={styles.paneWrapper}>
                <div className={styles.paneColumn} id="Lcol1">
                    <Pane image="./frontEnd.jpg" heading="Front-End Development"/>
                    <Card.Body>
                        <Card.Text>
                            <PaneBody textNumber="1"/>
                        </Card.Text>
                    </Card.Body>
                </div>
                
                <div className={styles.paneColumn} id="Lcol2">
                    <Pane image="/webApp.jpg" heading="Dynamic Web Apps"/>
                    <Card.Body>
                        <Card.Text>
                            <PaneBody textNumber="2"/>
                        </Card.Text>
                    </Card.Body>
                </div>

                <div className={styles.paneColumn} id="Lcol3">
                    <Pane image="/python.jpg" heading="Python Services"/>
                    <Card.Body>
                        <Card.Text>
                            <PaneBody textNumber="3"/>
                        </Card.Text>
                    </Card.Body>
                </div>
            </div>
 
        </div>
        
    )
}

export default About
