const fibonacci = function(numberOfMembers) {
    let result = 1;
    let sequence = [1];
    if (numberOfMembers > 2){
        for (let i = 0; i < numberOfMembers - 2; i++){
            sequence.push(result);
            result = sequence[i]+sequence[i+1];
        }
    } else if (numberOfMembers < 0){
        return "OOPS";
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
