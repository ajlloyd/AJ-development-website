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
              name="Personal Site - aaronjl.com" 
              date="Dec-2021" 
              img="/aaronLloydDevelopment.jpg"
              link="https://www.aaronjl.com/"
              githubLink="https://github.com/ajlloyd/AJLloyd-Solutions"/>
          </td>
          <td>
            <PortfolioCard 
              name="AJ Financials - Stock Comparison App"
              date="March-2022" 
              img="/ajfin.jpg"
              link="https://ajl-financials-lac.vercel.app/"
              githubLink="https://github.com/ajlloyd/AJL-Financials"/>
          </td>
        
          <td>
            <PortfolioCard 
              name="SparkFit - POC with FireBase " 
              date="May-2022" 
              img="/sparkfit.jpg"
              link="https://sparkfit.vercel.app"
              githubLink="https://github.com/ajlloyd/blue-spark2"/>
          </td>
          <td>
            <PortfolioCard 
              name="Amber Lloyd Photography" 
              date="May-2022" 
              img="/amberPhoto.jpg"
              link="https://amber-photography.vercel.app/"
              githubLink="https://github.com/ajlloyd/amber-photography"/>
            </td>
        </tr>
      </table>





  </div>
    );
};

export default Portfolio;
