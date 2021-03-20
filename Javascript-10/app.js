//Hey kiddo
const checksIfSomeoneIsAdult = function (age) {
    return (age >= 18) ? true : false;
}

const tellIfSomeOneIsAdult = function (age) {
    return (checksIfSomeoneIsAdult(age)) ? "Hello there" : "Hey Kiddo";
}
console.log(checksIfSomeoneIsAdult(18));
console.log(tellIfSomeOneIsAdult(18));

const doVATcalculation = function (vat, basePrice) {
    return basePrice * (vat / 100);
}

const doVATplusBasePrice = function (vat, basePrice) {
    return doVATcalculation(vat, basePrice) + basePrice;
}

console.log(doVATplusBasePrice(21, 1000));

const doVATcalculation2 = function (vat, pricePlusVat) {
    return pricePlusVat - (pricePlusVat / ((vat / 100) + 1));
}

const doVATplusBasePrice2 = function (vat, pricePlusVat) {
    let baseVat = doVATcalculation2(vat, pricePlusVat);
    let basePrice = pricePlusVat - baseVat;
    return [baseVat, basePrice];
}

console.log(doVATplusBasePrice2(21, 1210));

