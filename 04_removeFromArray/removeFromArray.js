const removeFromArray = function(array) {
    for (k=1;k<=arguments.length;k++){
        while (array.includes(arguments[k])){
            for (i = 0; i <= array.length; i++){
                if (arguments[k] == array[i]){
                    array.splice(i, 1);
                }
            }
        }
    }
    return array;
};
removeFromArray([0,1,2],2,3,0);
// Do not edit below this line
module.exports = removeFromArray;
