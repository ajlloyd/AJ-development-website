import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { BsChevronDown } from 'react-icons/bs';
import "./ServiceAccordion.scss"

const ServiceAccordion = () => {
    return (
        <div>

            <Accordion className="pane-acc">
                <Card>
                <Accordion.Toggle className="pane-acc-header" as={Card.Header} eventKey="0">
                    <a>Overview</a> 
                    <div><BsChevronDown /></div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>This is first tab body sdfgdfgfdgsdgsdfgsdfgdsfgdf sdfg sdfg sdfg  sdfg sdfg dsfgdsfgsd gsdfgsdf gdsfgsdfg </Card.Body>
                </Accordion.Collapse>
                </Card>
                
            </Accordion>
            
        </div>
    )
}

export default ServiceAccordion
