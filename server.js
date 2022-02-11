// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require("body-parser");

//const cors = require('cors');
const path = require('path');

// Step 1 - PORT define
const PORT = process.env.PORT || 5000; 

// Step 2 - Api endpoints
const servicePanel = require("./routes/api/servicePanel");

// Step 3 - DB configurations
db = require("./config/keys").mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

// Step 4 - Data parsing / body parser middleware
const app = express();
app.use(
    express.urlencoded({
    extended: false
  })
);
app.use(express.json());
//app.use(cors({ credentials: true }));

// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


// HTTP request logger
/*app.use(morgan('tiny'));*/
app.use("/api/services", servicePanel);

console.log(PORT);
app.listen(PORT, console.log(`Server is starting at ${PORT}`));


{app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });}




