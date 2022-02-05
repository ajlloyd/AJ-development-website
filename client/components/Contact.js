import React from 'react'
import styles from "../styles/Contact.module.scss"
import EmailForm from './EmailForm'

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.titleWrap}>
                <h1 className={styles.titleText}>Contact Me</h1>
            </div>
            <hr className={styles.horizontalLine}/>
            <EmailForm />
        </div>
    )
}

export default Contact
