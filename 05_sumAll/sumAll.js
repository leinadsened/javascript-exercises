const sumAll = function(number1, number2) {
    let sum = 0;
    if (typeof number1 != "number" || typeof number2 != "number" ||
    number1 < 0 || number2 < 0){
        return "ERROR";
    }
    if (number1 > number2){
        startNumber = number2;
        endNumber = number1;
    } else {
        startNumber = number1;
        endNumber = number2;
    }
    for(let i = startNumber; i <= endNumber; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
