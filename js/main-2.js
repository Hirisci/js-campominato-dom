let arr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  
  //66 riga 6 pos 6 // +1 => riga 5 pos 5/6/7 riga 6 5/7 riga 7 5/6/7
  // 5 riga 0 pos 5 // +1 => riga 0 pos 4/6 riga 1 pos 4/5/6
  // 0 riga 0 pos 0 // +1 => riga 0 pos 1 riga 1 pos 0/1
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
  
  function incrementSquare(arr, riga, pos) {
    //x
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
  
  function incrementLine(arr, riga, pos) {
    /// y
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
  
  placeBomb(arr, 5);
  placeBomb(arr, 15);
  placeBomb(arr, 25);
  placeBomb(arr, 35);
  placeBomb(arr, 45);
  placeBomb(arr, 55);
  placeBomb(arr, 65);
  
  console.log(arr);
  