// function expandedForm(num) {
//     const newNumber = +num.toString().slice(0, 1).padEnd(num.toString().length, '0');
//     let newNumber2 = num - newNumber
//     newNumber2 = +newNumber2.toString().slice(0, 1).padEnd(newNumber2.toString().length, '0');
//     const newNumber3 = num - newNumber2 - newNumber
//     return newNumber + ' + ' + newNumber2 + (newNumber3 ? (' + ' + newNumber3) : '');
//
//
//
// }

function expandedForm(num) {
    function expandHelper(numStr, index) {
        if (index >= numStr.length) {
            return '';
        }

        let digit = numStr[index];
        if (digit === '0') {
            return expandHelper(numStr, index + 1);
        }

        let placeValue = digit + '0'.repeat(numStr.length - index - 1);
        let rest = expandHelper(numStr, index + 1);

        if (rest === '') {
            return placeValue;
        } else {
            return placeValue + ' + ' + rest;
        }
    }

    return expandHelper(num.toString(), 0);
}



console.log(expandedForm(12)) //, '10 + 2');
console.log(expandedForm(42)) //, '40 + 2');
console.log(expandedForm(70304)) //, '70000 + 300 + 4');
