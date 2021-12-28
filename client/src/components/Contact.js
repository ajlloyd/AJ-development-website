import React from 'react'
import "./Contact.scss"
import EmailForm from './EmailForm'

const Contact = () => {
    return (
        <div class="contact-wrapper">



            <div className="contact-title">
                <h1 className="title-text">Contact Me</h1>
            </div>
            <hr class="solid"/>
            <EmailForm />
        </div>
    )
}

export default Contact
