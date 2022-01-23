import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomAccordionBody from "./CustomAccordionBody"

const ServiceAccordion = (props, { textNumber }) => {

   


    return (
        <div>
            {/*<Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Details</Accordion.Header>
                    <Accordion.Body>
                        <CustomAccordionBody textNumber={props.textNumber}/>
                    </Accordion.Body>
                </Accordion.Item>
    </Accordion>*/}

            <Card.Body>
                <Card.Text>
                    <CustomAccordionBody textNumber={props.textNumber}/>
                </Card.Text>
            </Card.Body>

        </div>



    )
}

export default ServiceAccordion
