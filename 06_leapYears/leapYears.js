const leapYears = function(year) {
    let divisibleBy4 = year % 4 == 0;
    let divisibleBy100 = year % 100 == 0;
    let divisibleBy400 = year % 400 == 0;
    return (divisibleBy4 && !divisibleBy100) || divisibleBy400;
    
};
console.log(leapYears(1996));
// Do not edit below this line
module.exports = leapYears;
