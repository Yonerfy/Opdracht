let playerName = prompt("Welkom! Wat is je naam?");
alert(`"Hey ${playerName}"`);
let smallestNumber = parseInt(prompt("Wat is het kleinste nummber dat je wilt raden?"));
let largestNumber = parseInt(prompt("Wat is het grootste nummber dat je wilt raden?"));

let randomNumber = Math.floor(Math.random() * (largestNumber - smallestNumber + 1) + smallestNumber);
console.log(randomNumber);
let attemptCounter = 5;
for (let i = 0; i <= 5; i++) {
    let userRandomNumber = parseInt(prompt(`Voer een nummer in van ${smallestNumber} tot ${largestNumber} om te beginnen met raden...`));
    if (randomNumber === userRandomNumber) {
        alert(`"Gefeliciteerd je hebt gewonnen"`)
        alert(`"Dag ${playerName}. Tot de volgende keer"`)
        break;
    } else {
        alert(`Dat is niet correct ${attemptCounter - 1} pogingen om het getal te raden`);
        attemptCounter--;
        if (attemptCounter == 0) { alert(`Je hebt geen pogingen meer.`); break; }
    }
}

