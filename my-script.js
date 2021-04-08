var lunghezzaPercorso = prompt ("Inserisci il numero di chilometri che desideri percorrere");
console.log (lunghezzaPercorso + "Km");

var anniUtente = prompt ("Quanti anni hai?");
console.log (anniUtente + " anni");

var prezzoBiglietto = lunghezzaPercorso * 0.21;

if (anniUtente < 18) {
    prezzoBiglietto = prezzoBiglietto * 0.8;
}

if (anniUtente >= 65) {
    prezzoBiglietto = prezzoBiglietto * 0.6;
}

console.log (prezzoBiglietto + "€");
