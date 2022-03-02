import React from 'react';
import styles from "../styles/Portfolio.module.scss"
import Image from 'next/image';
import { Button } from 'react-bootstrap';

const PortfolioCard = (props) => {
  return (
  <div className={styles.cardContainer}>

    <div className={styles.cardPicture}>

      <img src={props.img}/>
      <Button className={styles.button} variant="danger">Take Me There</Button>
        
    </div>
    <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <h2>{props.name}</h2>
        </div>
        <div className={styles.cardFooter}>
          <small className="text-muted">Created {props.date}</small>
        </div>

    </div>
    
  </div>
    );
};

export default PortfolioCard;
