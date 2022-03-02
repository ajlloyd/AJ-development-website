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
        <h1 className={styles.whyMeTitle}>Why choose a Custom Coded Website?</h1>

        <h5 className={styles.whyMeDescription}>A custom coded site is a bespoke website designed specifically for you business or personal needs. Here are some of the benefits:</h5>
        <div className={styles.benefitWrapper}>
        
       


            <div className={styles.benefit}>
                <h3 className={styles.benefitText}>Customisation</h3>  
                <OverlayTrigger
                trigger="hover"
                placement="top"
                overlay={
                    <Popover className={styles.customPopover} id={`popover-positioned`}>
                        <Popover.Header className={styles.header}>Customisation:</Popover.Header>
                        <Popover.Body className={styles.body}>
                            <strong>Limitless Customisation 🛠️</strong>
                            <br/>
                            So you can get exactly what you need for your customers.
                            
                        </Popover.Body>
                    </Popover>
                }
                >
                <div className={styles.icon}>
                    <h1 id={styles.customisation}><GoTools/></h1>
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
                        <Popover.Header >Higher SEO Rankings:</Popover.Header>
                        <Popover.Body>
                            <strong>Increase your visibility 📈 </strong>
                            <br/>
                            Enhance your growth by removing the SEO restrictions that often come with website builders.
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
                        <Popover.Header >Quicker Loading:</Popover.Header>
                        <Popover.Body>
                            <strong>Lightning Fast Loading Times ⚡</strong>
                            <br/>
                            Custom coded sites, free from unnecessary extras, giving the best user experience for your customers.
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
                        <Popover.Header >No Templates:</Popover.Header>
                        <Popover.Body>
                            <strong>Be Free From Website Builders 🎉</strong>
                            <br/>
                            With a custom coded site, you are guaranteed to stand out from the competition.
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
                <h3 className={styles.benefitText}>Hosting Costs</h3>  
                <OverlayTrigger
                trigger="hover"
                placement="bottom"
                overlay={
                    <Popover id={`popover-positioned`}>
                        <Popover.Header >Hosting Costs:</Popover.Header>
                        <Popover.Body>
                            <strong> Reduce Monthly Costs 💰</strong>
                            <br/>
                            Have a choice on where you want to host without being locked into plans (i.e. Heroku, AWS, Vercel).
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
                        <Popover.Header >Large Dev Community:</Popover.Header>
                        <Popover.Body>
                            <strong>Helpful Community 🙌</strong>
                            <br/>
                            ReactJS is the most used framework worldwide. So documentation or assistance is only ever a few clicks away!
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
