const sumAll = function(firstNum, secondNum) {
    let sum = 0;

  if( (typeof firstNum === "number") && (typeof secondNum === "number")) {

    if(firstNum < 0 || secondNum < 0) {
        console.log(firstNum, secondNum);
        return "ERROR";
    } else if(firstNum < secondNum) {
        for (let i = firstNum; i <= secondNum; i++) {
            sum += i;
        }

    } else if(secondNum < firstNum) {
        for (let i = secondNum; i <= firstNum; i++) {
            sum += i;
        }

    }

  } else {
    return "ERROR";
  }   

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
