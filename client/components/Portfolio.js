import React from 'react';
import styles from "../styles/Portfolio.module.scss"
import {Card} from "react-bootstrap"
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  return (
  <div className={styles.portfolioContainer}>
      <h1>My Previous Projects</h1>
      <div className={styles.projectsWrapper}>
        <div className={styles.projectsCol}>
          <PortfolioCard/>
          <PortfolioCard/>
        </div>

        <div className={styles.projectsCol}>
          <PortfolioCard/>
          <PortfolioCard/>
        </div>
      </div>

  </div>
    );
};

export default Portfolio;
