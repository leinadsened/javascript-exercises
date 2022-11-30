const add = function(firstToAdd, secondToAdd) {
	return firstToAdd+secondToAdd;
};

const subtract = function(subtractFrom, subtractThis) {
	return subtractFrom-subtractThis;
};

const sum = function(array) {
	let sum = 0;
  for (let i = 0; i< array.length;i++){
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let result = 1;
  for (let i = 0; i< array.length;i++){
    result *= array[i];
  }
  return result;
};

const power = function(toBePowered, toPower) {
  let result = 1;
  for (let i = 0; i<toPower; i++){
    result *= toBePowered;
  }
  return result;
};

const factorial = function(toBeFactored) {
	let result = 1;
  for(let i = 1; i<=toBeFactored;i++){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
