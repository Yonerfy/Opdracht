// Deel 1 Objecten:
let Person = {
    name: 'Yonerfy',
    age: 37
};

console.log(Person);
console.log(Person.name);
console.log(Person.age);
console.log('**********************************');
console.log(Person['name']);
console.log(Person['age']);
console.log('**********************************');
Person.evaluations = [7, 10, 9];
console.log(Person);
console.log(Person.evaluations);

console.log('-----------------------------------');
// Deel 2 Arrays:
let colors = [];
colors[0] = 'groen'
colors[1] = 'blauw';
colors[2] = 'rood';

console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors[2]);
colors.push('geel');
console.log(colors[3]);
colors.push({ greeting: "Hi ik ben een object" });
console.log('**********************************');
console.log(colors);

// Deel 3: Bekijk een "real-life" object





