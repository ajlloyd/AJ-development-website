import React from 'react';
import styles from "../styles/WhyMe.module.scss"
import {GoTools} from "react-icons/go"
import {BsGraphUp, BsPeopleFill} from "react-icons/bs"
import {AiOutlineLoading3Quarters, AiOutlineStop} from "react-icons/ai"
import {GiReceiveMoney} from "react-icons/gi" 
import {OverlayTrigger,Popover,Button,Image} from "react-bootstrap"

const WhyMe = () => {
  return (
  <div className={styles.whyMeContainer}>
      <div className={styles.whyMeWrapper}>
        <h1 className={styles.whyMeTitle}>Why Have a Custom Coded Site?</h1>
        <div className={styles.benefitWrapper}>


            <div className={styles.benefit}>
                <h3 className={styles.benefitText}>Customisation</h3>  
                <OverlayTrigger
                trigger="hover"
                placement="top"
                overlay={
                    <Popover className={styles.customPopover} id={`popover-positioned`}>
                        <Popover.Header className={styles.header}>Customisation</Popover.Header>
                        <Popover.Body className={styles.body}>
                            <strong>Holy guacamole!</strong> Check this info.
                        </Popover.Body>
                    </Popover>
                }
                >
                <div className={styles.icon}>
                    <h1><GoTools/></h1>
                </div>
                </OverlayTrigger>
            </div>

            


            <div className={styles.benefit}>
                <h3 className={styles.benefitText}>Higher SEO Rankings</h3>  
                <OverlayTrigger
                trigger="hover"
                placement="top"
                overlay={
                    <Popover id={`popover-positioned`}>
                        <Popover.Header >Higher SEO Rankings</Popover.Header>
                        <Popover.Body>
                            <strong>Holy guacamole!</strong> Check this info.
                        </Popover.Body>
                    </Popover>
                }
                >
                <div className={styles.icon}>
                    <h1><BsGraphUp/></h1>
                </div>
                </OverlayTrigger>
            </div>

            

            <div className={styles.benefit}>
                <h3 className={styles.benefitText}>Quicker Loading</h3>  
                <OverlayTrigger
                trigger="hover"
                placement="top"
                overlay={
                    <Popover id={`popover-positioned`}>
                        <Popover.Header >Quicker Loading</Popover.Header>
                        <Popover.Body>
                            <strong>Holy guacamole!</strong> Check this info.
                        </Popover.Body>
                    </Popover>
                }
                >
                <div className={styles.icon}>
                    <h1><AiOutlineLoading3Quarters/></h1>
                </div>
                </OverlayTrigger>
            </div>

            

            <div className={styles.benefit}>
                <h3 className={styles.benefitText}>No Templates</h3>  
                <OverlayTrigger
                trigger="hover"
                placement="bottom"
                overlay={
                    <Popover id={`popover-positioned`}>
                        <Popover.Header >No Templates</Popover.Header>
                        <Popover.Body>
                            <strong>Holy guacamole!</strong> Check this info.
                        </Popover.Body>
                    </Popover>
                }
                >
                <div className={styles.icon}>
                    <h1><AiOutlineStop/></h1>
                </div>
                </OverlayTrigger>
            </div>
            

            <div className={styles.benefit}>
                <h3 className={styles.benefitText}>Cheap Hosting</h3>  
                <OverlayTrigger
                trigger="hover"
                placement="bottom"
                overlay={
                    <Popover id={`popover-positioned`}>
                        <Popover.Header >Cheap Hosting</Popover.Header>
                        <Popover.Body>
                            <strong>Holy guacamole!</strong> Check this info.
                        </Popover.Body>
                    </Popover>
                }
                >
                <div className={styles.icon}>
                    <h1><GiReceiveMoney/></h1>
                </div>
                </OverlayTrigger>
            </div>

            

            <div className={styles.benefit}>
                <h3 className={styles.benefitText}>Dev Community</h3>  
                <OverlayTrigger
                trigger="hover"
                placement="bottom"
                overlay={
                    <Popover id={`popover-positioned`}>
                        <Popover.Header >Large Dev Community</Popover.Header>
                        <Popover.Body>
                            <strong>Holy guacamole!</strong> Check this info.
                        </Popover.Body>
                    </Popover>
                }
                >
                <div className={styles.icon}>
                    <h1><BsPeopleFill/></h1>
                </div>
                </OverlayTrigger>
            </div>
            



            
            
            
        </div>
      </div>
  </div>
  );
};

export default WhyMe;
