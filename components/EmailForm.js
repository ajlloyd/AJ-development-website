import React from 'react'
import { send } from 'emailjs-com';
import { useState, useCallback } from 'react';
import { Button, Alert } from 'react-bootstrap';
import styles from "../styles/EmailForm.module.scss"
import EmailModal from './EmailModal';
import ReCAPTCHA from "react-google-recaptcha";



{/*const production = process.env.IS_PRODUCTION

if (production) {
const SITE_KEY = }*/}

//const serviceName = process.env.REACT_APP_SERVICE_NAME;
//const templateName = process.env.REACT_APP_TEMPLATE_NAME;
//const userId = process.env.REACT_APP_USER_ID

const serviceName = "service_smpg8u5"
const templateName = "template_oupknik"
const userId ="user_A0UoOEsgereLFK0Xb6E53"

const EmailForm = (props) => {
    const [modalShow, setModalShow] = React.useState(false);


    

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();

        if (grecaptcha.getResponse() == ""){
            //alert("Please ensure you have ticked the reCAPTCHA");
            ['warning'].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                  This is a {variant} alert—check it out!
                </Alert>
              ));
            return
            
        } else {
            send(
                serviceName,
                templateName,
                toSend,
                userId
              )
              .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setModalShow(true);
                setToSend({from_name:"", message:"", reply_to:""})
            })
              .catch((err) => {
                console.log('FAILED...', err);
            })
            .then(
                grecaptcha.reset()
            );
        }
        
        
        
      };
    

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    function onChange(value) {
        console.log("Captcha value:", value);
      }

    

    



    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={onSubmit}>

                <div className={styles.formInput}>
                    <h3>Your Name:</h3>
                    <input
                    className={styles.inputField}
                    type='text'
                    name='from_name'
                    value={toSend.from_name}
                    onChange={handleChange}/>
                </div>

                <div className={styles.formInput}>
                    <h3>Your Email:</h3>
                    <input
                    className={styles.inputField}
                    type='text'
                    name='reply_to'
                    value={toSend.reply_to}
                    onChange={handleChange}/>
                </div>

                <div className={styles.formInput}>
                    <h3>Your Message:</h3>
                    <textarea 
                    className={styles.inputField}
                    name='message'
                    rows = "5" 
                    cols = "60"
                    type='text'
                    value={toSend.message}
                    onChange={handleChange}
                    />
                    
                </div>

                <ReCAPTCHA
                    className={styles.recaptcha}
                    theme="dark"
                    sitekey="6LdAdnseAAAAADd2DA0rZS5J9Xymk5JN2pfQ8CWp"
                    onChange={useCallback(() => setDisableSubmit(false))}/>


                <div className={styles.formInput}>
                    <Button type="submit" className="para-btn" variant="primary">Submitt</Button>
                </div>

                
            </form>





            <EmailModal show={modalShow} onHide={() => setModalShow(false)}/>
            
        </div>
    )
}

export default EmailForm
