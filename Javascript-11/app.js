for (let i = 0; i < 21; i++) {
    if (i % 2 == 0) {
        console.log(i + " even")
    } else {
        console.log(i + " oneven")
    }
}

for (let i = 1; i < 10; i++) {
    console.log(`${i} x  9  = ${i * 9}`);
}
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (let i = 60; i < 100; i++) {
    console.log(`Voor ${i} punten, krijg je een ${assignGrade(i)}.`);
}

