const reverseString = function(string) {
    let newString = [];
    let originalString = string.split("");
    for (i = 0; i <= originalString.length; i ++){
        newString[i] = originalString[originalString.length - i];
    }
    return newString.join("");
};
reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
