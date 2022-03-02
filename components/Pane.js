
import React, { useState, useEffect } from 'react';
import axios from "axios";
import styles from "../styles/About.module.scss";


const production = process.env.IS_PRODUCTION
if (production) {
  // Heroku API:
  var API_URL="/api/services/"
} else {
  // Local API
  var API_URL="http://localhost:3000/api/services/"
};


const Pane = (props, {uid}) => {
  
     // 1. SET UP USESTATE:
     const [services, getServices] = useState("");
     
     // 3. SET UP USEEFFECT (PREVENTS CONSTANT LOOP)
     useEffect(() => {
       fetchMyService();
     }, []);
     
     // 4. FETCH FEATURE FUNCTION CALLED ABOVE (AXIOS GET, THEN, RESPONSE, CATCH ERRORS)
     const fetchMyService = () => {
       axios
       .get(API_URL + props.uid)
       .then((response) => {
         const myService = response.data["data"];
         getServices(myService);
       })
       .catch(
         function (error) {
           if (error.response) {
             // Request made and server responded
             console.log("Request made and server responded", error.response.data);
             console.log("Request made and server responded", error.response.status);
             console.log("Request made and server responded", error.response.headers);
           } else if (error.request) {
             // The request was made but no response was received
             console.log("The request was made but no response was received", error.request);
           } else {
             // Something happened in setting up the request that triggered an Error
             console.log('Something happened in setting up the request that triggered an Error', error.message);
           }
         }
       );
     }
    

    return(

      <React.Fragment>
        <div className={styles.pane}>
          <img className={styles.paneImage} src={services.img} alt="vvv"/>
          <h2 className={styles.paneText}>{services.subheading}</h2>
          
        </div>


      </React.Fragment>


      
      
      
    )
}

export default Pane