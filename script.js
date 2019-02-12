var km = prompt("Inserire il numero dei Chilometri del viaggio");
var age = prompt("Inserisci l'età del viaggiatore");
var prezzo1km = 0.21;
var prezzo = (km * prezzo1km);
var sconto_min = (prezzo / 100 * 20);
var sconto_anz = (prezzo / 100 * 40);


if (age < 18) {
  alert(prezzo - sconto_min + " Euro");
}
else
  if (age > 65) {
    alert(prezzo - sconto_anz + " Euro");
  } else {
    alert(prezzo + " Euro");
  }
