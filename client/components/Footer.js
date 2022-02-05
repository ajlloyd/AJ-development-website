import React from 'react'
import styles from "../styles/Footer.module.scss"
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const Footer = () => {

    

    function scrollToTop() {
        const para = document.querySelector(".parallax-wrapper");
        console.log(para)
        para.scrollTo({top: 0, behavior: 'smooth'}); // For Chrome, Firefox, IE and Opera
      } 


    return (
        <div className={styles.footerContainer}>
            <div className={styles.contactEmail}>
                <a href="mailto:ajlloyd.dev@gmail.com" title="Email me" rel="me" target="_blank">ajlloyd.dev@gmail.com</a>
            </div>

            <div className={styles.copyright}>
                <p>© 2022 Aaron Lloyd</p>
            </div>

            <button type="button" className={styles.toTopBtn} onClick={scrollToTop}><BsFillArrowUpCircleFill/></button>
        </div>
    )
}

export default Footer
