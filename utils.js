const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  let result = [];
  let numsArr = strNums.split(',')
  for(let elm of numsArr) {
    if(elm !== ',')
      result.push(Number(elm))
  }
  return result;
}


module.exports = { convertStrNums };