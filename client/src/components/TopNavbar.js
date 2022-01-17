import React, {useState, useEffect} from 'react'
import "./TopNavbar.scss"
import "../App.scss"


const TopNavbar = () => {


    function scrollToHere(desiredScrollRatio) {
        const para = document.querySelector(".parallax-wrapper");

        //Get current scroll ratio:
        const currentScrollRatio = para.scrollTop/para.clientHeight
        console.log(currentScrollRatio)
        
        //const desiredScrollRatio = 0.6;

        const desiredPixelHeight = desiredScrollRatio * para.clientHeight

         
        
 

        //const scrolly = scroll_no => scroll_no == x
        //console.log(scrolly)

        //console.log(scroll_no)
        // For Chrome, Firefox, IE and Opera
        para.scrollTo({top: desiredPixelHeight,left: 0,behavior: 'smooth'});
      } 


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
                {/*<div className="navbar-title">
                    <h3 className={`nav-title-icon ${showNav && 'nav-icon-color'}`}><BsTerminal/></h3>
                    <h3 className={`nav-title-text ${showNav && 'nav-text-color'}`}> A.J. Lloyd Solutions </h3>*/}
                    {/*{showNav ? "nav-text-color" : "false"}
                </div>*/}
                <div className={`nav-item-wrap ${showNav && 'nav-item-txt-color'}`}>
                    <a className="navbar-item" href="#" onClick={()=>scrollToHere(0)}>Home</a>
                    <a className="navbar-item" href="#" onClick={()=>scrollToHere(0.6)}>About</a>
                    <a className="navbar-item" href="#" onClick={()=>scrollToHere(1.14)}>Portfolio</a>
                    <a className="navbar-item" href="#" onClick={()=>scrollToHere(10)}>Contact</a>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default TopNavbar
