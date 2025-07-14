const removeFromArray = function(arr, ...values) {
    values.forEach(value => {
    let index = arr.indexOf(value);
        while (index !== -1) {
            arr.splice(index, 1);
            index = arr.indexOf(value);
        }
    });
  return arr;
}; 

// Do not edit below this line
module.exports = removeFromArray;
