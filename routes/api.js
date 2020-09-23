/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

var expect = require("chai").expect;
var ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function(app) {
  
  var convertHandler = new ConvertHandler();
  
  /*
  * Checks if the string is a valid unit string
  *
  * @param unit - unit string to be checked
  *
  * @return boolean - true if the string is a proper unit string, false otherwise
  */
  const isValidUnit = (unit) => {
    const units = ["gal", "l", "lbs", "kg", "mi","km", "GAL", "L", "LBS", "KG","MI", "KM"];
    for(let i = 0; i < units.length; i++){
      if(units[i] === unit){
        return true
      }
    }
    return false;
  }
  
  
  /*
  * Checks if the string is a valid number string
  *
  * @param num - number string to be checked
  *
  * @return boolean - true if the string is a proper number string, false otherwise
  */
  const isValidNumber = (num) => {
   
    const operRegEx = /\//g;
    const numRegEx = /^(\d+\.?\d*\/?\d*\.?\d*)|(\d+\.?\d*)$/g;
    let result = num.match(operRegEx);

    if(result != null && result.length > 1){
      return false;
    }
    
    
    result = null;
    result = num.match(numRegEx)

    if(result != null && result.length > 1){
      return false;
    }
    
    return true;
    
  }

  app.route("/api/convert").get(function(req, res) {
    
    var input = req.sanitize(req.query.input);

    let num = ""; 
    let unit = ""; 
    
    for(let i = 0; i < input.length;i++){
      let e = input[i];
      if(e.match( /[a-zA-Z]/g)){
        unit += e;
      }
      else{
        num += e
      }
    }
    
    
    if(isValidNumber(num) && !isValidUnit(unit)){
      res.json({error: "invalid unit"})
    }
    else if(!isValidNumber(num) && isValidUnit(unit)){
      res.json({error: "invalid number"})
    }
    else if(!isValidNumber(num) && !isValidUnit(unit)){
      res.json({error: "invalid number and unit"})
    }
    else{
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
      );
      res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString});   
      
    }
    
  });
};
