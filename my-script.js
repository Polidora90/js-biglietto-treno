var lunghezzaPercorso = parseInt (prompt ("Inserisci il numero di chilometri che desideri percorrere"));
console.log (lunghezzaPercorso + "Km");

if (Number.isNaN(lunghezzaPercorso)) {
    alert ("Carattere non valido - Inserire caratteri validi")
}

var anniUtente = parseInt (prompt ("Quanti anni hai?"));
console.log (anniUtente + " anni");

if (Number.isNaN(anniUtente)) {
    alert ("Carattere non valido - Inserire caratteri")
}

var prezzoBiglietto = lunghezzaPercorso * 0.21;
console.log (prezzoBiglietto + "€")

if (anniUtente < 18) {
    prezzoBiglietto = prezzoBiglietto * 0.8;
    console.log ("Sconto 20%")
}

if (anniUtente >= 65) {
    prezzoBiglietto = prezzoBiglietto * 0.6;
    console.log ("Sconto 40%")
}

var prezzoFinaleBiglietto = prezzoBiglietto.toFixed(2);

console.log (prezzoFinaleBiglietto + "€");
