const fibonacci = function(num) {
    if (num<0) return "OOPS";
    const arrFibonacci = [0, 1];
    for (let i = 2; i <= num; i++) {
        const f = arrFibonacci[i - 1] + arrFibonacci[i - 2];
        arrFibonacci.push(f);
    }
    return arrFibonacci[num];
};

// Do not edit below this line
module.exports = fibonacci;
