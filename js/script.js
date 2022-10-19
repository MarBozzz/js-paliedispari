/***Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


const getWord = prompt('Digita una parola');

function palindromi() {
  const lunghezza = getWord.length;
  const half = Math.floor(lunghezza/2);

  for ( let i = 0; i < half; i++ ) {
      if (getWord[i] !== getWord[lunghezza - 1 - i]) {  
        return document.querySelector('.palindromo').innerHTML = 'Non è palindromo'; //false
      }
  }
  return document.querySelector('.palindromo').innerHTML = 'è palindromo'; //true
}
console.log(palindromi(getWord));




/***Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

/*
let pariODispari = false;
let outputPoD;

const getEvenOrOdd = prompt('Scegli pari o dispari');
document.querySelector('.even-odd').innerHTML = `Hai scelto: ${getEvenOrOdd}`;

const getNumber = parseInt(prompt('Digita un numero'));
document.querySelector('.your-number').innerHTML = `Il tuo numero è: ${getNumber}`;

let generatedNumber = Math.floor(Math.random() * (5-0)+1)+0;
document.querySelector('.computer-number').innerHTML = `Il numero del computer è: ${generatedNumber}`;

let somma = getNumber + generatedNumber;
document.querySelector('.sum').innerHTML = `Il totale fa: ${somma}, che è `;


if (!(somma % 2)) {
  pariODispari = true;
  outputPoD = document.querySelector('.result').innerHTML = 'pari';
} else {
  outputPoD = document.querySelector('.result').innerHTML = 'dispari';
}
console.log(pariODispari);

if (getEvenOrOdd === outputPoD) {
  document.querySelector('.winner').innerHTML = 'Hai vinto tu!';
} else {
  document.querySelector('.winner').innerHTML ='Ha vinto il computer!';
}
*/

