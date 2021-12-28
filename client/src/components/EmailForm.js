import React from 'react'
import { send } from 'emailjs-com';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./EmailForm.scss"
import EmailModal from './EmailModal';




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
        });
      };
    

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };


    return (
        <div className='form-wrap'>
            <form className="email-form" onSubmit={onSubmit}>
                <div className='form-input'>
                    <h3>Your Name:</h3>
                    <input
                    type='text'
                    name='from_name'
                    placeholder='Your Name'
                    value={toSend.from_name}
                    onChange={handleChange}/>
                </div>

                <div className='form-input'>
                    <h3>Your Email:</h3>
                    <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}/>
                </div>

                <div className='form-input'>
                    <h3>Your Message:</h3>
                    <textarea 
                    name='message'
                    rows = "5" 
                    cols = "60"
                    type='text'
                    value={toSend.message}
                    onChange={handleChange}
                    placeholder='Your message'/>
                </div>
                <Button type="submit" className="para-btn" variant="danger">Submit</Button>
            </form>

            <EmailModal show={modalShow} onHide={() => setModalShow(false)}/>
            
        </div>
    )
}

export default EmailForm
