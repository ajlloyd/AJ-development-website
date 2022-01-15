import React, {useState, useEffect} from 'react'
import "./TopNavbar.scss"
import "../App.scss"
import { BsTerminal } from 'react-icons/bs';

const TopNavbar = () => {

    // sets default value for showNav and sets up the SetNav functions
    // defuault is not to show (false)
    const [showNav, setShowNav] = useState(true);

    // Select the wrapper (which has the scroll) 
    // This container is where the shit is set up
    
    
    useEffect ( () => {
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
    }, [])



    return (
        // && logical AND
        
        
        <div className= {`navbar-wrapper ${showNav && 'nav-color'} ${!showNav && "navbar-transp"}`} id="navbar">
            



            <div className="navbar-navigation">
                <div className="navbar-title">
                    {/*<h3 className={`nav-title-icon ${showNav && 'nav-icon-color'}`}><BsTerminal/></h3>
                    <h3 className={`nav-title-text ${showNav && 'nav-text-color'}`}> A.J. Lloyd Solutions </h3>*/}
                    {/*{showNav ? "nav-text-color" : "false"}*/}
                </div>
                <div className={`nav-item-wrap ${showNav && 'nav-item-txt-color'}`}>
                    <a className="navbar-item" href="#">Home</a>
                    <a className="navbar-item" href="#">About</a>
                    <a className="navbar-item" href="#">Portfolio</a>
                    <a className="navbar-item" href="#">Contact</a>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default TopNavbar
