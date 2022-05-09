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

  function numberValidateInRange(msg,min,max){
    let input;
    do{
      input = Number(prompt(msg))
    } while( isNaN(input) || input<min || input>max)
    return input;
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

let gameStatus= true;
const choiseLevel= numberValidateInRange("Inserisci il livello di difficolta 1 - 2 - 3 ",1,3)-1;
const levelRange= [100,80,50]
const bombs = rndListUnequalNumber(16,1,levelRange[choiseLevel]);
const playerChoises = [] 

console.log(bombs)

while(playerChoises.length<levelRange[choiseLevel]-bombs.length && gameStatus){
  let num = numberValidateInRange("Inserisci un numero tra 1 e "+levelRange[choiseLevel],1,levelRange[choiseLevel])
  if(bombs.includes(num)){
    alert("Hai preso una mina, il tuo punteggio é: "+playerChoises.length)
    gameStatus = false
  } else if(playerChoises.includes(num)){
    alert("Numero gi'inserito")
  } else if(!playerChoises.includes(num)){
    playerChoises.push(num);
    console.log(playerChoises)
  }
}

if(gameStatus===true){
  alert("Complimenti hai vinto!!!!")
}






