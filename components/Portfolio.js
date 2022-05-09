import React from 'react';
import styles from "../styles/Portfolio.module.scss"
import {Card} from "react-bootstrap"
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  return (
  <div className={styles.portfolioContainer} id="portfolioScroll">
      <h1>My Previous Projects</h1>

      <table>
        <tr>
          <td>
            <PortfolioCard 
              name="Aaron Lloyd Development - Personal Site" 
              date="Dec-2021" 
              img="/aaronLloydDevelopment.jpg"
              link="http://localhost:3000"/>
          </td>
          <td>
            <PortfolioCard 
              name="AJ Financials - Stock Comparison Web App"
              date="March-2022" 
              img="/ajfin.jpg"
              link="https://github.com/ajlloyd/AJL-Financials"/>
          </td>
        
          <td>
            <PortfolioCard 
              name="SparkFit - POC with FireBase " 
              date="May-2022" 
              img="/sparkfit.jpg"
              link="https://sparkfit.vercel.app"/>
          </td>
          <td>
            <PortfolioCard 
              name="Coming Soon" 
              date="Coming Soon" 
              img="/placeholder.jpg"
              link="https://github.com/ajlloyd"/>
            </td>
        </tr>
      </table>





  </div>
    );
};

export default Portfolio;
