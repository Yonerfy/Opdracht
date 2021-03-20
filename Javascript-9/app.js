//function expression
const squaredOfTwoNumber = function (number1, number2) {
    result = (number1 * number1) + (number2 * number2);
    return result * result;
}
//******************************
//function declaration
function squaredOfTwoNumber2(number1, number2) {
    result = (number1 * number1) + (number2 * number2);
    return result * result;
}
//******************************
// arrow function
const squaredOfTwoNumber3 = (number1, number2) => {
    result = (number1 * number1) + (number2 * number2);
    return result * result;
}

function doSquareCalculation(number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
}
//******************************
console.log(squaredOfTwoNumber(2, 2));
console.log("******************************");
console.log(squaredOfTwoNumber2(2, 2));
console.log("******************************");
console.log(squaredOfTwoNumber3(2, 2));
console.log(doSquareCalculation(2, 2));


