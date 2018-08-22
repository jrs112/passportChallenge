const express = require('express');
const router = express.Router();
const Factory = require("../../models/factoryModel.js");



//Create A Factory
router.post('/createfactory', function(req, res) {
  console.log("Req body", req.body);
  if(req.body.factoryTitle === "" || req.body.factoryTitle === null) {
    res.json({errMsg: "Factory Title Is Required"});
  }
  if(req.body.childAmount === "" || req.body.childAmount === null || req.body.childAmount < 0 || req.body.childAmount > 15) {
    res.json({errMsg: "Generate Amount Is Invalid"});
  }

  if(req.body.childMax === "" || req.body.childMax === null) {
    res.json({errMsg: "Max Is Required"});
  }
  if(req.body.childMin === "" || req.body.childMin === null) {
    res.json({errMsg: "Min Is Required"});
  }
  if (req.childMin > req.childMax) {
    res.json({errMsg: "There Min must be less than or equal to the Max"});
  }

  const childArr = createChildArr(req.body.childAmount, req.body.childMin,req.body.childMax);
  console.log("GOT CHILD ARR", childArr);
  const factoryObj = {
    factoryTitle: req.body.factoryTitle,
    children: childArr,
    maxValue: req.body.childMax,
    minValue: req.body.childMin
  }
  console.log("factory object to save", factoryObj);

  var newFactory = new Factory(factoryObj);
  newFactory.save(function(err, factory) {
  if(err) {
      console.log('Error creating factory', err);
  } else {
      res.json(factory);
  }
  });

});



 function createChildArr(count, min, max) {
  let childArr = [];
  for (let i = 0; i < count; i++) {
    let randomNumber =  getRandomNumber(min, max);
    console.log("RANDOM NUMBER", randomNumber);
    childArr.push(randomNumber);
  }
  return childArr;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




module.exports = router;
