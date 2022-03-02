import React from 'react';
import styles from "../styles/Portfolio.module.scss"
import {Card} from "react-bootstrap"
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  return (
  <div className={styles.portfolioContainer}>
      <h1>My Previous Projects</h1>

      <table>
        <tr>
          <td>
            <PortfolioCard 
              name="Book Check " 
              date="12-Jan-2022" 
              img="https://www.gwsmedia.com/sites/default/files/blog/images/BookCheck_0.png"/>
          </td>
          <td>
            <PortfolioCard 
              name="Eco Shop"
              date="12-Dec-2020" 
              img="https://static.wixstatic.com/media/5e5a34_77ddeffbc8da4613a26e2388b5be98d2~mv2.png/v1/fill/w_1000,h_571,al_c,usm_0.66_1.00_0.01/5e5a34_77ddeffbc8da4613a26e2388b5be98d2~mv2.png"/>
          </td>
        </tr>
        <tr>
          <td>
            <PortfolioCard 
              name="Musix" 
              date="12-Feb-2022" 
              img="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/602f2109757041b232d834e2_601b1c6c1d0c39e266399be0_soundstripe.jpeg"/>
          </td>
          <td>
            <PortfolioCard 
              name="Trackr" 
              date="12-Mar-2020" 
              img="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/602f2109a787c146dcbe2b66_601b1c1f7567a7399353fe47_traackr.jpeg"/>
            </td>
        </tr>
      </table>





  </div>
    );
};

export default Portfolio;
