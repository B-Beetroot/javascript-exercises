const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};
/*
const sum = function(arr) {
  let sum = 0;
  if (arr.length>0) {
  for (i=0;i<arr.length;i++){
	 sum += arr[i];
  }
  return sum;
  } else {
    return 0;
  }
};
*/
const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0);
};
/*
const multiply = function(arr) {
   let result=1;
  if (arr.length>0) {
  for (i=0;i<arr.length;i++){
	 result = result*arr[i];
  }
  return result;
  } else {
    return 0;
  }
};
*/
const multiply = function(arr) {
  return arr.reduce((total, current) => total * current);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
 let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
