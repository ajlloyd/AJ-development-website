import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ServiceAccordion.scss";
import CustomAccordionBody from "./CustomAccordionBody"

const ServiceAccordion = ({body1, body2}) => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Details</Accordion.Header>
                    <Accordion.Body>
                        <CustomAccordionBody />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>    
        </div>
    )
}

export default ServiceAccordion
