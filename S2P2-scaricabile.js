// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai 
  saranno array di oggetti!!) quindi assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione 
(anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per 
coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' 
un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!


//Lista utenti
let listaUtenti = [];
listaUtenti.push(marco, paul, amy);
console.log(listaUtenti);

let listaAmbassador=[];


//Controllo se utente è ambassador
for (let i =0; i<= listaUtenti.length-1; i++){
  if (listaUtenti[i].isAmbassador === true){
    console.log (listaUtenti[i].name.toUpperCase() + " " + listaUtenti[i].lastName.toUpperCase() + " è un ambassador");
    listaAmbassador.push(listaUtenti[i]);
  }
  else {
    console.log (listaUtenti[i].name.toUpperCase() + " " + listaUtenti[i].lastName.toUpperCase() + " non è un ambassador");
  }
}

console.log(listaAmbassador);

//--------------------------------

function totale (utente, prices, shippingCost){

  let somma=0; //NB: se non metto somma =0 e metto solo let somma; la variabile non viene vista come numero, 
  //anche se vi effettuo operazioni matematiche

  for(let i=0;i<prices.length;i++){
    somma = somma + prices[i];
  }
 // console.log(somma);
  let totale;



if(somma>100){
  console.log(`L'utente ${utente.name} spende in totale ${somma}€`);
}
else if (utente.isAmbassador){
  totale = (somma - ((somma)/100)*30) //è la somma scontata del 30% per gli ambassador
  console.log(`L'utente ${utente.name} è ambassador e spende in totale ${totale+ shippingCost}€ incluso il costo di spedizione, sommato al totale scontato`);
}
else{
  console.log(`L'utente ${utente.name} non è ambassador e spende in totale ${parseInt(somma+shippingCost)}€ incluso il costo di spedizione, sommato al totale NON scontato`);
}

}
//--------------------------------

//--------richiamo la funzione

totale(marco,prices,shippingCost);
totale(amy,prices,shippingCost);

//sostituendo l'array prices corrente col seguente:
//    const prices = [34, 5, 2, 100]
//ogni utente spende 141€ a prescindere da se sia o meno ambassador