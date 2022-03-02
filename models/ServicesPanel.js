const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MyServicesSchema = new Schema({

  img: {
    type: String,
    required: true
  },
  subheading: {
    type: String,
    required: true
  },
});
module.exports = mongoose.models.MyServices || mongoose.model("MyServices", MyServicesSchema);