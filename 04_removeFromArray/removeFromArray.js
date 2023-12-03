const removeFromArray = function(arr, ...elementsToRemove) {
    // Use filter to create a new array without the specified elements
    const resultArray = arr.filter(element => !elementsToRemove.includes(element));
    return resultArray;
  };

// Do not edit below this line
module.exports = removeFromArray;
