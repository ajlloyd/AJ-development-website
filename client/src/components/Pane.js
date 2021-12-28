import { Button } from 'react-bootstrap'



import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Pane.scss"


const Pane = (props, {serviceId}) => {

    console.log(serviceId)
     // 1. SET UP USESTATE:
     const [services, getServices] = useState("");
    
     // 2. DEFINE API ENDPOINT CONSTANT PORTION (ENSURE THIS WORKS WITH PMAN)
     const url = "http://localhost:5000/api/services/servicepanel/"
     
     // 3. SET UP USEEFFECT (PREVENTS CONSTANT LOOP)
     useEffect(() => {
       fetchMyService();
     }, []);
     
     // 4. FETCH FEATURE FUNCTION CALLED ABOVE (AXIOS GET, THEN, RESPONSE, CATCH ERRORS)
     const fetchMyService = () => {
       axios.get(url + props.serviceId)
       .then((response) => {
         const myService = response.data;
         getServices(myService);
       })
       .catch(
         function (error) {
           if (error.response) {
             // Request made and server responded
             console.log(error.response.data);
             console.log(error.response.status);
             console.log(error.response.headers);
           } else if (error.request) {
             // The request was made but no response was received
             console.log(error.request);
           } else {
             // Something happened in setting up the request that triggered an Error
             console.log('Error', error.message);
           }
         }
       );
     }
    
    const clickHandler = (subheading) => {
        console.log(subheading);
    };
    return(


      <div className="single-pane">
        <img className="pane-image" src={services.img} alt="vvv"/>
        <h2 className='pane-sub'>{services.subheading}</h2>
        {/*<h4 className='pane-desc'>{services.description}</h4>*/}
        <Button className="pane-btn" variant="outline-light"> Enquire </Button>
      </div>
      
      
    )
}

export default Pane