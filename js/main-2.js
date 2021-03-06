/*╔══════════════════════════════════════════════════════════════════════════════════════════╗
                                        FUNZIONI
  ╚══════════════════════════════════════════════════════════════════════════════════════════╝*/
// ritorna un numero Random che parte da MIN e arriva sino a MAX
function rndRangeNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//ritorna un Lista di numeri random compsta da n elementi conmpresi in min - max
function rndListNumber(num, min, max) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(rndRangeNumber(min, max));
  }
  return arr;
}

//ritorna un Lista di numeri random CHE NON SI RIPETONO compsta da n elementi conmpresi in min - max
function rndListUnequalNumber(num, min, max) {
  let arr = [];
  while (arr.length < num) {
    let number = rndRangeNumber(min, max);
    if (!arr.includes(number)) {
      arr.push(number);
    }
  }
  return arr;
}

// ritorna true se il numero é pari
function isEven(num) {
  return num % 2 === 0;
}

// convalida di un promt RETURN numero compreso tra min e max
function numberValidateInRange(msg, min, max) {
  let input;
  do {
    input = Number(prompt(msg));
  } while (isNaN(input) || input < min || input > max);
  return input;
}

// piazza la bomba e incrementa tutti i quadrati della matrice vicini
function placeBomb(arr, num, num2) {
  let riga = Math.floor((num - 1) / num2);
  let pos = (num - 1) % num2;

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

function generateMatrice(row, colums) {
  let arr = [];
  for (let i = 0; i < row; i++) {
    let row = [];
    for (let i = 0; i < colums; i++) {
      row.push(0);
    }
    arr.push(row);
  }
  console.log(arr);
  return arr;
}
function placeListBombs(matrice, listBombs, num2) {
  for (let i = 0; i < listBombs.length; i++) {
    placeBomb(matrice, listBombs[i], num2);
  }
  console.log(matrice);
}

function generateField(matrice, where) {
  for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice[i].length; j++) {
      const div = document.createElement("div");
      const divOver = document.createElement("div");
      
      div.classList.add("box");
      divOver.classList.add("box--overlay");
      divOver.classList.add("box--absolute");
      console.log(matrice[i][j] === "X", "bomba");
      switch (matrice[i][j]) {
            case "X":
                div.classList.add("text-clr-7")
                divOver.classList.add("bomb");
                div.innerText = `<i class="fa-solid fa-bomb"></i>`          
            break;
            case 1:
                div.classList.add("text-clr-1")
                div.innerText = matrice[i][j];
            break
            case 2:
                div.classList.add("text-clr-2")
                div.innerText = matrice[i][j];
            break
            case 3:
                div.classList.add("text-clr-3")
                div.innerText = matrice[i][j];
            break
            case 4:
                div.classList.add("text-clr-4")
                div.innerText = matrice[i][j];
            break
            case 5:
                div.classList.add("text-clr-5")
                div.innerText = matrice[i][j];
            break
            case 6:
                div.classList.add("text-clr-6")
                div.innerText = matrice[i][j];
            break;
            case 7:
                div.classList.add("text-clr-7")
                div.innerText = matrice[i][j];
            break
      
            default:
                div.classList.add("text-clr-0")
                div.innerText = matrice[i][j];
            break;

      }
      div.innerText = matrice[i][j];
      divOver.addEventListener("click", onclic);
      div.append(divOver)
      where.append(div);
      
    }
  }
}


function onclic() {
  if (this.classList.contains("box--overlay")) {
    this.classList.remove("box--overlay");
  }
  if (this.classList.contains("bomb")) {
    alert("Hai perso");
  }

  return console.log(this);
}

/*╔══════════════════════════════════════════════════════════════════════════════════════════╗
                                            MAIN
  ╚══════════════════════════════════════════════════════════════════════════════════════════╝*/
/* --------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------*/

const btnSmall = document.querySelector("#btn-small");
const btnNormal = document.querySelector("#btn-normal");
const btnBig = document.querySelector("#btn-big");
const windowSet = document.querySelector(".window-settings");
const windowGame = document.querySelector(".window-game");
const windowGameGrid = document.querySelector(".window-game__grid");
const bombInput = document.querySelector("#bombs").value;



let bombNumber = 0;
let row = 0;
let colums = 0;
let matrice = [[]];
let bombslist = [];


btnSmall.addEventListener("click", function () {
  windowSet.classList.add("hide");
  windowGame.classList.remove("hide");
  windowGameGrid.classList.add("window-game--small");

  if (bombInput === "") {
    bombNumber = 16;
  } else {
    bombNumber = bombInput;
  }

  row = 8;
  colums = 8;

  bombslist = rndListUnequalNumber(bombNumber, 1, row * colums);
  matrice = generateMatrice(row, colums);
  placeListBombs(matrice, bombslist, row);
  generateField(matrice, windowGameGrid);
});

btnNormal.addEventListener("click", function () {
  windowSet.classList.add("hide");
  windowGame.classList.remove("hide");
  windowGameGrid.classList.add("window-game--normal");

  if (bombInput === "") {
    bombNumber = 16;
  } else {
    bombNumber = bombInput;
  }

  row = 10;
  colums = 10;

  bombslist = rndListUnequalNumber(bombNumber, 1, row * colums);
  matrice = generateMatrice(row, colums);
  placeListBombs(matrice, bombslist, row);
  generateField(matrice, windowGameGrid);
});

btnBig.addEventListener("click", function () {
  windowSet.classList.add("hide");
  windowGame.classList.remove("hide");
  windowGameGrid.classList.add("window-game--big");

  if (bombInput === "") {
    bombNumber = 16;
  } else {
    bombNumber = bombInput;
  }
  row = 15;
  colums = 15;

  bombslist = rndListUnequalNumber(bombNumber, 1, row * colums);
  matrice = generateMatrice(row, colums);
  placeListBombs(matrice, bombslist, row);
  generateField(matrice, windowGameGrid);
});


















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
