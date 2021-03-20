const colors = ["yellow", "blue", "red", "orange"];
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(Element => console.log(Element));

//Mijn while loop heeft 4 regels
//Mijn for loop heeft 2 regels
//Mijn forEach loop heeft 1 regels
//Ik vind for loop meer leesbaar en makkelijk omdat je met minder regels hetzelde doen.
//voor looping in an objet je kan gebruiken forin loop en kan ook gebruiken forof maar forin is makkelijk

const Person = {
    name: 'Yonerfy',
    age: 38,
    familyName: 'Hennep',
    sayHi: 'Hi from Yonerfy Object'
}

for (const [key, value] of Object.entries(Person)) {
    console.log(`${key}: ${value}`);
}

for (const value in Person) {
    console.log(`${value}: ${Person[value]}`);
}