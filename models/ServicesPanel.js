const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MyServicesSchema = new Schema({
  serviceid: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  subheading: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
module.exports = MyServices = mongoose.model("MyServices", MyServicesSchema);