const findTheOldest = function(arrayOfPeople) {
    
    for (let i = 0; i < arrayOfPeople.length; i++){
        if (arrayOfPeople[i].yearOfDeath){
            yearsLived = arrayOfPeople[i].yearOfDeath - arrayOfPeople[i].yearOfBirth;
        } else {
            yearsLived = 2022 - arrayOfPeople[i].yearOfBirth;
        }
        arrayOfPeople[i].yearsLived = yearsLived;
    }
    let maxYears = Math.max(...arrayOfPeople.map(o => o.yearsLived));
    let result = arrayOfPeople.find(item => item.yearsLived === maxYears);
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
