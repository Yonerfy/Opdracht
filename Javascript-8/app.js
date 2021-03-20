const biggerThan100 = function (number) {
    return (number > 100) ? true : false;
}
//this funtion produce something
console.log(biggerThan100(100));

//******************************

const brendaResponse = function (currentPeople, age) {
    if (age >= 18) {
        if (currentPeople <= 100) {
            return "Come in";
        } else {
            return "It's too busy now, come back later";
        }
    } else {
        return "This is a clup for adults";
    }
}

console.log("******************************");
console.log(brendaResponse(50, 18));
console.log(brendaResponse(101, 17));
console.log(brendaResponse(105, 19));


const calculatingAverage = function (number1, number2, number3, number4, number5) {
    return Math.round((number1 + number2 + number3 + number4 + number5) / 5);
}

console.log("******************************");
console.log(calculatingAverage(1, 5, 8, 9, 5));