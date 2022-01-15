import React from 'react'
import "./Footer.scss"

const Footer = () => {
    return (
        <div class="footer-container">
            <div class="contact">
                <a href="mailto:cory@coryhughart.com" title="Email me" rel="me" target="_blank">cory@coryhughart.com</a>
            </div>

            <div className='semi'>
                
            </div>

            

            <div class="info">
                <p>© 2022 Cory Hughart</p>
            </div>

            <button type="button" class="to-top"><i class="fa fa-arrow-up"></i></button>
        </div>
    )
}

export default Footer
