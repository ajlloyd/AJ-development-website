import React, {useState, useEffect, useRef} from 'react'
import styles from "../styles/TopNavbar.module.scss"
//import "../styles/App.module.scss"


const TopNavbar = () => {

    function scrollToThisPlace(element) {
        const position = document.querySelector(element)
        position.scrollIntoView({
            top: 0, 
            behavior: 'smooth'
        })
    }

    const testRef = useRef(null);
    const [showNav, setShowNav] = useState(true);

    return (
        <div className={styles.container} id="navbar">
            <div className={styles.wrapper}>
                <div className={styles.itemContainer}>
                    <a className={styles.item}  href="#" onClick={()=>document.querySelector(".parallax-wrapper").scrollTo({top: 0, behavior: 'smooth'})}>Home</a>
                    <a className={styles.item}  href="#" onClick={()=>setTimeout(function() {scrollToThisPlace("#aboutScroll")}, 1)}>About</a>
                    <a className={styles.item}  href="#" onClick={()=>setTimeout(function() {scrollToThisPlace("#portfolioScroll")}, 1)}>Portfolio</a>
                    <a className={styles.item}  href="#" onClick={()=>setTimeout(function() {scrollToThisPlace("#contactScroll")}, 1)}>Contact</a>
                </div>
            </div>
        </div>
    )
}
export default TopNavbar
