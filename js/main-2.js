
  
  placeBomb(arr, 5);
  placeBomb(arr, 15);
  placeBomb(arr, 25);
  placeBomb(arr, 35);
  placeBomb(arr, 45);
  placeBomb(arr, 55);
  placeBomb(arr, 65);
  
  console.log(arr);




/*╔══════════════════════════════════════════════════════════════════════════════════════════╗
                                        FUNZIONI
  ╚══════════════════════════════════════════════════════════════════════════════════════════╝*/
  // ritorna un numero Random che parte da MIN e arriva sino a MAX 
  function rndRangeNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  //ritorna un Lista di numeri random compsta da n elementi conmpresi in min - max
  function rndListNumber(num,min,max){
    let arr=[];
    for (let i = 0; i < num; i++) {
        arr.push(rndRangeNumber(min,max))
    }
    return arr
  }

  //ritorna un Lista di numeri random CHE NON SI RIPETONO compsta da n elementi conmpresi in min - max
  function rndListUnequalNumber(num,min,max){
    let arr=[];
    while(arr.length<num){
      let number = rndRangeNumber(min,max)
      if(!arr.includes(number)){
        arr.push(number)
      }
    }
    return arr
  }

  // ritorna true se il numero é pari
  function isEven(num){
    return num%2===0;
  }


  // convalida di un promt RETURN numero compreso tra min e max
  function numberValidateInRange(msg,min,max){
    let input;
    do{
      input = Number(prompt(msg))
    } while( isNaN(input) || input<min || input>max)
    return input;
  }

  
    // piazza la bomba e incrementa tutti i quadrati della matrice vicini
  function placeBomb(arr, num) {
    num--;
    let riga = 0;
    let pos = 0;
    console.log(num);
    let scomposto = num.toString().split("");
    console.log(scomposto.length);
    if (scomposto.length === 1) {
      riga = 0;
      pos = scomposto[0];
    } else if (scomposto.length === 2) {
      riga = scomposto[0];
      pos = scomposto[1];
    }
  
    incrementSquare(arr, riga, pos);
    arr[riga][pos] = "X";
  }
  
    // Controllore delle rige per non incrementare al di fuori della matrice
  function incrementSquare(arr, riga, pos) {
    pos = Number(pos);
    riga = Number(riga);
    if (riga === arr.length - 1) {
      incrementLine(arr, riga - 1, pos);
      incrementLine(arr, riga, pos);
    } else if (riga === 0) {
      incrementLine(arr, riga + 1, pos);
      incrementLine(arr, riga, pos);
    } else {
      incrementLine(arr, riga - 1, pos);
      incrementLine(arr, riga, pos);
      incrementLine(arr, riga + 1, pos);
    }
  }
  
   // incrementa di +1 le posizioni laterali se queste non escono dalla matrice
  function incrementLine(arr, riga, pos) {
    pos = Number(pos);
    riga = Number(riga);
    if (pos === arr[riga].length - 1) {
      if (!isNaN(arr[riga][pos - 1])) {
        arr[riga][pos - 1] += 1;
      }
      if (!isNaN(arr[riga][pos])) {
        arr[riga][pos] += 1;
      }
    } else if (pos === 0) {
      if (!isNaN(arr[riga][pos])) {
        arr[riga][pos] += 1;
      }
      if (!isNaN(arr[riga][pos + 1])) {
        arr[riga][pos + 1] += 1;
      }
    } else {
      if (!isNaN(arr[riga][pos - 1])) {
        arr[riga][pos - 1] += 1;
      }
      if (!isNaN(arr[riga][pos])) {
        arr[riga][pos] += 1;
      }
      if (!isNaN(arr[riga][pos + 1])) {
        arr[riga][pos + 1] += 1;
      }
    }
  }
 


/*╔══════════════════════════════════════════════════════════════════════════════════════════╗
                                            MAIN
  ╚══════════════════════════════════════════════════════════════════════════════════════════╝*/
/* --------------------------------------------------------------------------------------------
CONSEGNA EXERCIZIO

Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
---------------------------------------------------------------------------------------------*/

let gameStatus = true;
const choiseDifficulty = numberValidateInRange("Inserisci il livello di difficolta 1 - 2 - 3 ", 1, 3) - 1;
const maxRndNumbers = [100, 80, 50];
const maxRange = maxRndNumbers[choiseDifficulty];
const bombs = rndListUnequalNumber(16, 1, maxRange);
const maxAttempts = maxRange - bombs.length;
const playerChoises = [];

while(playerChoises.length < maxAttempts && gameStatus) {
  let num = numberValidateInRange(`Inserisci un numero tra 1 e ${maxRange}`, 1, maxRange)
  if(bombs.includes(num)) {
    alert(`Hai preso una mina, il tuo punteggio è: ${playerChoises.length}`)
    gameStatus = false;
  } else if(playerChoises.includes(num)) {
    alert("Numero già inserito");
  } else if(!playerChoises.includes(num)) {
    playerChoises.push(num);
  }
}

if(gameStatus === true) {
  alert("Complimenti hai vinto!!!!")
}
