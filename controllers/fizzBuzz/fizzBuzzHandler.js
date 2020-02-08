//Handler
const fizzBuzzHandler = (count) => {
  let outPut = [];
  // this object ic configurable and can contain N number of patterns 
  if (count > 100000) {
    return 'Limit Execced';
  }
  if (count < 0 || typeof count !== "number") {
    return 'Invalid Query String';
  }
  const patternObjc = {3:'Fizz', 5:'Buzz'};
  for (let i =1 ; i <= count ; i++) {
    outPut.push(checkModulus(i,patternObjc))
  }
  return outPut;
}

/*
@Function - params :- number and pattern
Checks if number is divisible by pattern object
returns number or Patterns 
*/
const checkModulus = (number,patternObjc) => {
  let returnValue = '';
  let isModulusDone = 0;
  for ( let key in patternObjc) {
    if (number%key === 0){
      returnValue += patternObjc[key];
      isModulusDone = 1;
    }  
  }
  if (isModulusDone === 0) {
    returnValue = number;
  } 
  return returnValue ;
}

module.exports = {
  fizzBuzzHandler,
};
