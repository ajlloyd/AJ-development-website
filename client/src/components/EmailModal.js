import React from 'react'
import { Modal, Button, CloseButton } from 'react-bootstrap'

const EmailModal = (props, body) => {
    
    return (
        <div>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                    <CloseButton  onClick={props.onHide}/>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>poo hole</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>


    )
}

export default EmailModal
