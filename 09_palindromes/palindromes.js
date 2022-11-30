const palindromes = function (palindromeCandidate) {
    let lettersOnly = (palindromeCandidate.replaceAll(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"")).toLowerCase().split("");
    for (let i = 0; i <= (lettersOnly.length) / 2; i++){
        if (lettersOnly[i] != lettersOnly[lettersOnly.length - i - 1]){
            return false;
        }
    }
    return true;
};
console.log(palindromes('Animal loots foliated detail of stool lamina.'));
// Do not edit below this line
module.exports = palindromes;
