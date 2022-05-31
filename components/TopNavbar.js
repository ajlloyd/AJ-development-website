import React, {useState, useEffect} from 'react'
import styles from "../styles/TopNavbar.module.scss"
//import "../styles/App.module.scss"


const TopNavbar = () => {

    function scrollToThisPlace(element) {
        const position = document.querySelector(element)
        position.scrollIntoView()
    }

    const [showNav, setShowNav] = useState(true);
    
        {/*useEffect ( () => {
        const para = document.querySelector(".parallax-wrapper");
        const navbarControl = () => {
            const scroll_no = para.scrollTop/para.clientHeight
            if (scroll_no > 0.85) {
                setShowNav(false)
            } else {
                setShowNav(true)
            }
        }
        para.addEventListener("scroll", navbarControl)
        console.log(showNav)
        return () => para.removeEventListener('scroll', navbarControl)
    }, [])*/}

    return (
        <div className={styles.container} id="navbar">
            <div className={styles.wrapper}>
                <div className={styles.itemContainer}>
                    <a className={styles.item}  href="#" onClick={()=>document.querySelector(".parallax-wrapper").scrollTo({top: 0, behavior: 'smooth'})}>Home</a>
                    <a className={styles.item}  href="#" onClick={()=>scrollToThisPlace("#aboutScroll")}>About</a>
                    <a className={styles.item}  href="#" onClick={()=>scrollToThisPlace("#portfolioScroll")}>Portfolio</a>
                    <a className={styles.item}  href="#" onClick={()=>scrollToThisPlace("#contactScroll")}>Contact</a>
                </div>
            </div>
        </div>
    )
}
export default TopNavbar
