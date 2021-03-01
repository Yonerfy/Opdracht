//function declaration
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
//******************************
console.log(squaredOfTwoNumber(2, 2));
console.log("******************************");
console.log(squaredOfTwoNumber2(2, 2));
console.log("******************************");
console.log(squaredOfTwoNumber3(2, 2));
