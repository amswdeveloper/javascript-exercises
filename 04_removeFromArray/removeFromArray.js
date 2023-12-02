const removeFromArray = function(arr, ...element) {

const newArray = [];

for(let i = 0; i < arr.length; i++) {

    if(element[i]){
        continue;
    } else {
        newArray.push(arr[i]);
    }
}

console.log(newArray);
// return newArray;
};
removeFromArray([3, 4, 5, 6, 1, 8, 0], 3, 4, 5, 8);

// Do not edit below this line
module.exports = removeFromArray;
