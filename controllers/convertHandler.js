/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  
  /*
  * Extracts the number value from the input string
  *
  * @param input - input string
  *
  * @return result - the number value or 1 if an invalid number is found
  */
  this.getNum = function(input) {
    const r = /\d+\.*\d*/g;
    var nums = input.match(r);
    
    if(nums === null){
      return 1;
    }
    else if (nums.length > 1) {
      return (parseFloat(nums[0]) / parseFloat(nums[1]));
    }

    return parseFloat(nums[0]);
  };

  
  /*
  * Extracts the unit abbreviation from the input string
  *
  * @param input - input string
  *
  * @return result - the converted unit abbreviation or an empty string if invalid unit found
  */
  this.getUnit = function(input) {
  
    const unitRegEx = /(gal|l|lbs|kg|mi|km|GAL|L|LBS|KG|MI|KM)$/g;
    const t = input.match(unitRegEx);

    if(t === null){
      return ""
    }else{
      return t[0];
    }
  };

  
  /*
  * Converts the initial unit to the converted unit
  *
  * @param initUnit - initial unit to be converted
  *
  * @return result - the converted unit abbreviation
  */
  this.getReturnUnit = function(initUnit) {
  
    switch (initUnit.toLowerCase()) {
      case "gal":
        return "l";
        break;

      case "l":
        return "gal";

        break;

      case "lbs":
        return "kg";

        break;

      case "kg":
        return "lbs";

        break;

      case "mi":
        return "km";

        break;

      case "km":
        return "mi";
        break;

      default:
        return initUnit;
    }
  };

  
  /*
  * Converts the abbreviated unit to the full unit representation
  *
  * @param unit - initial unit to be converted
  *
  * @return result - full unit representation
  */
  this.spellOutUnit = function(unit) {
    const unitArr = [
      ["gal", "gallons"],
      ["l", "liters"],
      ["lbs", "pounds"],
      ["kg", "kilograms"],
      ["mi", "miles"],
      ["km", "kilometers"]
    ];
    
    var result = "";
    
    for (let i = 0; i < unitArr.length; i++) {
      if (unit.toLowerCase() === unitArr[i][0]) {
        result = unitArr[i][1];
      }
    }
    
    return result;
  };
  
  
  /*
  * Converts the number value to the 
  *
  * @param initNum - initial number to be converted
  * @param initUnit - initial unit to be converted
  *
  * @return result - converted number
  */
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    switch (initUnit.toLowerCase()) {
      case "gal":
        result = initNum * galToL;
        break;

      case "l":
        result = initNum / galToL;

        break;

      case "lbs":
        result = initNum * lbsToKg;

        break;

      case "kg":
        result = initNum / lbsToKg;

        break;

      case "mi":
        result = initNum * miToKm;

        break;

      case "km":
        result = initNum / miToKm;
        break;

      default:
        result = 1;
    }

    return result;
  };

  
  /*
  * Concats a result string with all results
  *
  * @param initNum - initial number to be converted
  * @param initUnit - initial unit to be converted
  * @param returnNum - converted number 
  * @param returnUnit - converted unit
  */
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
  };
}

module.exports = ConvertHandler;
