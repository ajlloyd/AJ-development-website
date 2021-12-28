// Pull in  required dependencies (express, mongoose and bodyParser)
// Initialize our app using express()
// Apply the middleware function for bodyparser so we can use it
// Pull in our MongoURI from our keys.js file and connect to our MongoDB database
// Set the port for our server to run on and have our app listen on this port


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');


// HERE ARE THE API ROUTE ENDPOINTS:
const servicePanel = require("./routes/api/servicePanel");
//const features = require("./routes/api/features");


// Bodyparser middleware
const app = express();
app.use(
    express.urlencoded({
    extended: false
  })
);
app.use(express.json());


// DB Config
const db = require("./config/keys").mongoURI;


// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


// cors
app.use(cors());

// Routes
app.use("/api/services", servicePanel);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
