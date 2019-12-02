
/*
function farmAnimals(gatos, pollos) {
    let cadenaGatos = String(gatos);
    while(cadenaGatos.length < 3) {
        cadenaGatos = '0' + cadenaGatos;
    }
    console.log(`${cadenaGatos} gatos`);

    let cadenaPollos = String(pollos);
    while(cadenaPollos.length < 3) {
        cadenaPollos = '0' + cadenaPollos;
    }
    console.log(`${cadenaPollos} pollos`);
}

farmAnimals(3, 11);
*/

/*
const zeroPad = (number, width) => {
    let string = String(number);
    while(string.length < width) {
        string = "0" + string;
    }
    return string;
}

const printFarmInventory = (cows, chickens, pigs) => {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(4, 8, 15);
*/

/*
function potenciaCuadrada(base, expo) {
    let result = 1;
    for(let cuenta = 0; cuenta < expo; cuenta++) {
        result *= base;
    }
    return 'Potencia cuadrada iterativa:\n' + result;
}

console.log(potenciaCuadrada(2, 3));
*/

/*
function potenciaCuadradaRecursiva(base, expo) {
    if (expo === 0) {
        return 1;
    } else {
        return base * potenciaCuadradaRecursiva(base, expo - 1);
    }
}

console.log('Potencia cuadrada recursiva:');
console.log(potenciaCuadradaRecursiva(2, 3));
*/

/*
const min = (a, b) => {
    return (a <= b) ? a : b;
}

console.log(min(23, 675));
*/


/*
const isEven = number => {
    // Negative numbers cause a stack overflow
    // So we transform the number to its absolute value
    number = Math.abs(number);
    if (number === 0) // Z E R O  /  F A L S E   is Even
        return false;
    else if (number === 1) // O N E  /  T R U E   is Odd
        return true;
    else
        // For bigger numbers the result will be calculated as 'n - 2'
        return isEven(number-2);
}

console.log(isEven(4));
*/

/*
const countBs = cadena => {
    let count = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === 'A')
            count++;
    }
    return count;
}

console.log(countBs('AbecedArio'));
*/

/*
const countChar = (cadena, picked) => {
    let count = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === picked)
            count++;
    }
    return count;
}

console.log(countChar('abecedario', 'a'));
*/

/*
const suma = (a, b) => {
    return a + b;
}

console.log(suma(2,3));
*/

/*
let listOfNumbers = [2, 3, 5, 7, 11, 2344];

console.log(Math.max(...listOfNumbers));
*/

/*
const tip = (bill) => {
    let percent;
    if (bill < 50) {
        percent = 0.2;
    }

    else if (bill >= 50 && bill <= 200) {
        percent = 0.15;
    }

    else {
        percent = 0.1;
    }
    return bill * percent;
}

//            142.6    57.6    294.8
let bill = [ 124,     48,     268 ];

let tips = [tip(bill[0]),
            tip(bill[1]),
            tip(bill[2])
           ];

console.log(tips);
*/


/*
let john = {
    fullName : 'John Smith',
    bills : [124, 48, 268, 180, 42],
    tipCalc : function () {
        this.tips = [];
        this.finalPay = [];
        this.sumArray = 0;
        this.avgJohnTip = 0;

        for (let i = 0; i < this.bills.length; i++) {

            let percentage;
            let bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.2;
            }
            else if (bill >= 50 && bill < 200) {
                percentage = 0.15;
            }
            else {
                percentage = 0.1;
            }
            // Adding the values to the arrays
            this.tips[i] = bill * percentage;
            this.finalPay[i] = bill + bill * percentage;
        }
        
        for ( let i = 0; i < this.bills.length; i++) {
            this.sumArray += this.tips[i];
        }
        this.avgJohnTip = this.sumArray / this.tips.length;
        // JOHN'S AVG TIP IS:   18.08
    }
}

//john.tipCalc();
//console.log(john);

///////////////////////////////////////////////////////////////////////

function avgTipMark() {
    let markBills = [77, 375, 110, 45];
    let markTips = [];
    let sumArray = 0;

    for ( let i = 0; i < markBills.length; i++ ) {
        let prcnt;
        let bill = markBills[i];
        if (bill < 100) {
            prcnt = 0.2;
        }
        else if (bill >= 100 && bill <= 300) {
            prcnt = 0.1;
        }
        else {
            prcnt = 0.25;
        }
        markTips.push(bill + bill * prcnt);
    }

    for ( let i = 0; i < markTips.length; i++) {
        sumArray += markTips[i];
    }
    return sumArray / markTips.length;
    // MARK'S AVG TIP IS:   184.03
}

//console.log(avgTipMark());
john.avgJohnTip > avgTipMark() ? console.log("John's tip is greater!") : console.log("Mark's tip is greater!");
*/

/*/////////////////////////////////////////
                HOISTING
////////////////////////////////////////*/

let obj2 = {
    name : 'John',
    lastName : 'Doe',
    age : 22
}

console.log(obj2);