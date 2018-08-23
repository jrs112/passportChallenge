const express = require('express');
const router = express.Router();
const Factory = require("../../models/factoryModel.js");
const Server = require ("../../server.js");
const sanitize = require('mongo-sanitize');



//Create A Factory
router.post('/createfactory', function(req, res) {
  console.log("Req body", req.body);
  if(req.body.factoryTitle === "" || req.body.factoryTitle === null) {
    res.json({errMsg: "Factory Title Is Required"});
    return;
  }
  if(req.body.childAmount === "" || req.body.childAmount === null || req.body.childAmount < 0 || req.body.childAmount > 15) {
    res.json({errMsg: "Generate Amount Is Invalid"});
    return;
  }

  if(req.body.childMax === "" || req.body.childMax === null) {
    res.json({errMsg: "Max Is Required"});
    return;
  }
  if(req.body.childMin === "" || req.body.childMin === null) {
    res.json({errMsg: "Min Is Required"});
    return;
  }
  if (req.body.childMin > req.body.childMax) {
    res.json({errMsg: "There Min must be less than or equal to the Max"});
    return;
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
    Server.sendFactoryInfo();
    res.json({msg:"success"});
  }
  });

});

//Update A Factory
router.post('/updatefactory', function(req, res) {
  console.log("Req body", req.body);
  if(req.body.factoryTitle === "" || req.body.factoryTitle === null) {
    res.json({errMsg: "Factory Title Is Required"});
    return;
  }
  if(req.body.childAmount === "" || req.body.childAmount === null || req.body.childAmount < 0 || req.body.childAmount > 15) {
    res.json({errMsg: "Generate Amount Is Invalid"});
    return;
  }

  if(req.body.maxValue === "" || req.body.maxValue === null) {
    res.json({errMsg: "Max Is Required"});
    return;
  }
  if(req.body.minValue === "" || req.body.minValue === null) {
    res.json({errMsg: "Min Is Required"});
    return;
  }
  if (req.minValue > req.maxValue) {
    res.json({errMsg: "There Min must be less than or equal to the Max"});
    return;
  }
  let factoryObj;
  if(req.body.updateChildren) {
    const childArr = createChildArr(req.body.childAmount, req.body.minValue,req.body.maxValue);
    factoryObj = {
      factoryTitle: req.body.factoryTitle,
      children: childArr,
      maxValue: req.body.maxValue,
      minValue: req.body.minValue
    }
  } else {
      factoryObj = {
      factoryTitle: req.body.factoryTitle,
      maxValue: req.body.maxValue,
      minValue: req.body.minValue
    }
  }


  console.log("factory object to save", factoryObj);
  const userId = sanitize(req.body._id)

  Factory.updateOne({_id: userId}, {$set: factoryObj}, {new: true}, function(err, factory) {
    if(err) {
      console.log("error");
      res.json({errMsg: "There was an error updating the factory"})
    } else {
      Server.sendFactoryInfo();
      res.json({msg: "success"});
    }
  })

});

//Delete A Factory

router.post("/deletefactory", function(req, res) {
  const info = req.body;
  const userId = sanitize(req.body._id);

  Factory.deleteOne({_id: userId}, function(err, rem) {
    if(err) {
      console.log("error occured: ", err);
      return;
    } else {
      console.log("deleted")
      Server.sendFactoryInfo();
      res.json({msg: "success"});
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
