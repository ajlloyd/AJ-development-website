const express = require("express");
const router = express.Router();

// Load featured model
const ServicesPanel = require("../../models/ServicesPanel");


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/", (req, res) => {
  const newService = new ServicesPanel({
    serviceid: req.body.serviceid,
    img: req.body.img,
    subheading: req.body.subheading,
    description: req.body.description
  });
  newService
    .save()
    .then(user => res.json(user));
});

router.get('/servicepanel/:serviceid/', (req, res) => {
  ServicesPanel.findOne({serviceid:req.params.serviceid},
    function(err, service) {
      if(err) {
        res.json(err);
      } else {
        res.json(service);
      }
    });
});

module.exports = router;