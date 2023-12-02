const repeatString = function(string, num) {
    let test = "";
    if(num < 0) {
        return "ERROR";
    }
  for(let i = 1; i <= num; i++) {
    test += string
  }
  return (test);
};

// Do not edit below this line
module.exports = repeatString;
