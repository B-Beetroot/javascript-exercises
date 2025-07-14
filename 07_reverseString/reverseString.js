const reverseString = function(greetings) {
 let arrGreetings = Array.from(greetings);
 let reverseGreetings = arrGreetings.reverse();
 return reverseGreetings.join("");
};

// Do not edit below this line
module.exports = reverseString;
