import React from 'react';
import styles from "../styles/Portfolio.module.scss"
import Image from 'next/image';

const PortfolioCard = () => {
  return (
  <div className={styles.cardContainer}>

    <div className={styles.cardPicture}>
        <img src='https://media.istockphoto.com/photos/sandalwood-tree-with-fruits-in-autumn-picture-id1281308924?b=1&k=20&m=1281308924&s=170667a&w=0&h=vzhutCQ_fmNiPHmikP5QAT-q6D0VlsjPeRPILJnCtpk='/>
    </div>
    <div className={styles.cardBody}>
        <div className={styles.cardTitle}>Card title</div>
        <div className={styles.cardText}>
        <p>This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.</p>
        </div>
    </div>
    <div className={styles.cardFooter}>
        <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
    );
};

export default PortfolioCard;
