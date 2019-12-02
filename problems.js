/*
let numbers = [1,2,3,4,5];

const mayorMenor = () => {
    //let numOrdered = numbers.sort();
    let minimo = Math.min(...numbers);
    let maximo = Math.max(...numbers);
    
    for (let i = 0; i < numbers.length; i++) {
        console.log(minimo);
        console.log(maximo);
    }
}

//console.log(numOrdered);
console.log(mayorMenor());
*/

let athletes = [{
    name : 'John',
    age : 18,
    interest : ':dancer'
},

{
    name : 'John',
    age : 18,
    interest : ':apple'
}];

console.table(athletes);



/*
C R I B A    D E    E R A T Ó S T E N E S

1.- Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).

2.- Initially, let p equal 2, the smallest prime number.

3.- Enumerate the multiples of p by counting in increments of p from 2p to n, and mark them in the list
    (these will be 2p, 3p, 4p, ...; the p itself should not be marked).

4.- Find the first number greater than p in the list that is not marked. If there was no such number, stop.
    Otherwise, let p now equal this new number (which is the next prime), and repeat from step 3.
    
5.- When the algorithm terminates, the numbers remaining not marked in the list are all the primes below n.



function theCrib(numero) {
for(let i = 2; i <= Math.sqrt(numero); i++) {
    console.log(i);
}
}

theCrib();
theCrib(20);
*/