console.log("JS OK");

/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/

//*! - PRENDO GLI ELEMENTI DALLA DOM

//!2 - GENERO DUE NUMERI RANDOMICI DA 1 A 6 PER PLAYER E PER COMPUTER

const player = Math.floor(Math.random() * 6) + 1;
const cpu = Math.floor(Math.random() * 6) + 1;
console.log(player, cpu);

//!3 - GENERO UN CONDIZIONALE IF, IN CUI IL VINCITORE E' COLUI CHE HA OTTENUTO IL PUNTEGGIO PIU' ALTO

let content = "Pareggio";
if (player > cpu) {
  content = "Il giocatore vince!";
} else if (player < cpu) {
  content = "Il computer vince!";
}

console.log(content);

//!4 - STAMPO IN PAGINA I DUE NUMERI E IL RISULTATO


