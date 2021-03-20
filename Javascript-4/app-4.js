const age = 26;
const totalAmount = 100;
const name = "Abraham";

// Deel 1: 50% korting
if (age >= 18 && age <= 25) {
    console.log("Je bent 18 jaar en je hebt een korting van 50%.");
} else {
    console.log("Je hebt geen korting.");
}
// Deel 2: Ludieke actie! 
if (name === "Abraham" || name === "Sarah") {
    console.log("Je hebt reacht op een gratis biertje.")
} else {
    console.log("Je hebt geen reacht op een gratis biertje.")
}

// Deel 3: Jubileum korting 

if (totalAmount >= 25 && totalAmount < 50) {
    console.log("Je krijg een gratis vega bitterballen");
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("Je krijg een gratis portie nachos");
} else if (totalAmount >= 100) {
    console.log("Je bestelt voor 100 of meer daarom krijg je een flesje champagne");
}