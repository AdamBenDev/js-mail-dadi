console.log("JS OK");

/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/

//*! - PRENDO GLI ELEMENTI DALLA DOM

const playerNumber = document.getElementById('player-number');
const cpuNumber = document.getElementById('cpu-number');
const resultElement = document.getElementById('result');

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

playerNumber.innerHTML = 'Numero giocatore: ' + player;
cpuNumber.innerHTML = 'Numero cpu: ' + cpu;
resultElement.innerHTML = `<strong>${content}</strong>`;


// - ESERCIZIO 2 MAIL Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.Mail Bonus Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

//?1 Prendo gli elementi dal DOM;

const inputEmail = document.getElementById("Email");
const button = document.getElementById("button");
const message = document.getElementById("message");

//? 2 - Crea un array con tre email autorizzate;
const emailAuthorized = [
    "Napoleon@gmail.com",
    "Annibal@gmail.com",
    "CharleMagne@gmail.com"
]

//?