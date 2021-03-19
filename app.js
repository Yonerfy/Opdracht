// zet de functie om naar een arrow functie
const ikRockNormalFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
};

const ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions! I'm a arrow function");

ikRockArrowFunctions();
ikRockNormalFunctions();

const fivePlusSeven = function () {
    return 5 + 7
};

fivePlusSeven();

const fivePlusSeven = () => 5 + 7


fivePlusSeven();
console.log(fivePlusSeven());

const myFunction = (a, b) => a + b;
console.log(myFunction(5, 5));
const addFive = a => a + 5;
console.log(addFive(5));

const createObject = () => ({ greeting: "Hoi" });
console.log(createObject());
