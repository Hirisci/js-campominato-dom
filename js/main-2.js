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

  function generateMatrice(row,colums){
    let arr = []
    for(let i = 0; i<row ; i++){
        let row = []
        for(let i = 0; i<colums ; i++){
            row.push(0)    
        }
        arr.push(row)
    }
    console.log(arr)
    return arr;
    
} 
function placeListBombs(matrice, listBombs){
    for (let i = 0; i < listBombs.length; i++) {
        placeBomb(matrice,listBombs[i])
    }
    console.log(matrice)
}

function generateField(matrice,where){
    const div = document.createElement("div");
    div.classList.add("box")
    for(let i = 0; i<matrice.length;i++){
        
    }


    

}




 


/*╔══════════════════════════════════════════════════════════════════════════════════════════╗
                                            MAIN
  ╚══════════════════════════════════════════════════════════════════════════════════════════╝*/
/* --------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------*/

const btnSmall = document.querySelector("#btn-small");
const btnNormal = document.querySelector("#btn-normal");
const btnBig = document.querySelector("#btn-big");
const windowSet = document.querySelector(".window-settings")
const windowGame = document.querySelector(".window-game")
const bombInput = document.querySelector("#bombs").value


let bombNumber = 0
let row = 0;
let colums = 0;
let matrice = [[]]
let bombslist = []

btnSmall.addEventListener("click", 
    function(){

        windowSet.classList.add("hide")
        windowGame.classList.remove("hide")

        if(bombInput===""){
            bombNumber=16
        } else { 
            bombNumber=bombInput
        }

        row = 8;
        colums=8;

        bombslist= rndListUnequalNumber(bombNumber,1,row*colums)
        matrice = generateMatrice(row,colums)
        placeListBombs(matrice,bombslist)
        generateField(matrice,windowGame)
        
    }
)

btnNormal.addEventListener("click", 
    function(){

        windowSet.classList.add("hide")
        windowGame.classList.remove("hide")

        if(bombInput===""){
            bombNumber=16
        } else { 
            bombNumber=bombInput
        }

        row = 10;
        colums=10;

        bombslist= rndListUnequalNumber(bombNumber,1,row*colums)
        matrice = generateMatrice(row,colums)
        placeListBombs(matrice,bombslist)
        generateField(matrice)  

    }
)

btnBig.addEventListener("click", 
    function(){

        windowSet.classList.add("hide")
        windowGame.classList.remove("hide")

        if(bombInput===""){
            bombNumber=16
        } else { 
            bombNumber=bombInput
        }
        row = 15;
        colums=15;

        bombslist= rndListUnequalNumber(bombNumber,1,row*colums)
        matrice = generateMatrice(row,colums)
        placeListBombs(matrice,bombslist)
        generateField(matrice)
        

    }
)












// let gameStatus = true;
// const choiseDifficulty = numberValidateInRange("Inserisci il livello di difficolta 1 - 2 - 3 ", 1, 3) - 1;
// const maxRndNumbers = [100, 80, 50];
// const maxRange = maxRndNumbers[choiseDifficulty];
// const bombs = rndListUnequalNumber(16, 1, maxRange);
// const maxAttempts = maxRange - bombs.length;
// const playerChoises = [];

// while(playerChoises.length < maxAttempts && gameStatus) {
//   let num = numberValidateInRange(`Inserisci un numero tra 1 e ${maxRange}`, 1, maxRange)
//   if(bombs.includes(num)) {
//     alert(`Hai preso una mina, il tuo punteggio è: ${playerChoises.length}`)
//     gameStatus = false;
//   } else if(playerChoises.includes(num)) {
//     alert("Numero già inserito");
//   } else if(!playerChoises.includes(num)) {
//     playerChoises.push(num);
//   }
// }

// if(gameStatus === true) {
//   alert("Complimenti hai vinto!!!!")
// }
