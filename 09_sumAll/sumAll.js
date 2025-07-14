const sumAll = function(firstNum, secondNum) {
    if(firstNum < 0 || secondNum < 0 || !Number.isInteger(firstNum) || !Number.isInteger(secondNum)) return "ERROR";
    const n = Math.abs(secondNum - firstNum) + 1;
    const min = Math.min(firstNum, secondNum);
    const max = Math.max(firstNum, secondNum);
    return (n * (min +max)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
