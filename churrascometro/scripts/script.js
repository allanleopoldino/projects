// Carne - 400 gr por pessoa  + de 6 haras - 650
// Cerveja - 1200 ml por pessoa+ 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5

let inputAdult = document.getElementById("adult");
let inputKid = document.getElementById("kid");
let inputTime = document.getElementById("time");

let result = document.getElementById("result");

function calc() {
    console.log("Calculando...");

    let adult = inputAdult.value;
    let kid = inputKid.value;
    let time = inputTime.value;

    let meat = meatPP(time) * adult + (400 / 2 * kid);
    let beer = beerPP(time) * adult;
    let drink = drinkPP(time) * adult + (1000 / 2 * kid);

    if (time <= 24) {
        result.innerHTML = `<p>Carne: &nbsp&nbsp ${meat / 1000} Kg</p>`;
        result.innerHTML += `<p>Cerveja: ${beer / 1000}L (${Math.ceil(beer / 355)} Latas)</p>`;
        result.innerHTML += `<p>Bebidas: ${drink / 1000}L </p>`;
    } else {
        result.innerHTML = `<p>${time} horas? Isso é um churrasco ou o que?<p>`;
    }
}

function meatPP(time) {
    if (time <= 6) {
        return 400;
    }
    else {
        return 650;
    }
}

function beerPP(time) {
    if (time <= 6) {
        return 1200;
    }
    else {
        return 2000;
    }
}

function drinkPP(time) {
    if (time <= 6) {
        return 1000;
    }
    else {
        return 1500;
    }
}

