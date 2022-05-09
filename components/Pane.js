
import React, { useState, useEffect } from 'react';
import axios from "axios";
import styles from "../styles/About.module.scss";


{/*const production = process.env.IS_PRODUCTION
if (production) {
  // Heroku API:
  //var API_URL="/api/services/"
  const PORT = process.env.PORT
  var API_URL=`https://ajlloyd-solutions.herokuapp.com/api/services/`
} else {
  // Local API
  const PORT = process.env.PORT || 3000
  var API_URL=`https://ajlloyd-solutions.herokuapp.com/api/services/`
};*/}


const Pane = (props, {image, heading}) => {
  
     {/*// 1. SET UP USESTATE:
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
     }*/}
    

    return(

      <>
        <div className={styles.pane}>
          <img className={styles.paneImage} src={props.image} alt="vvv"/>
          <h2 className={styles.paneText}>{props.heading}</h2>
          
        </div>


      </>


      
      
      
    )
}

export default Pane