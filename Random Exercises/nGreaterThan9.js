function nGreaterThan9(num) {
  let numbersInLine = "";
  for (i = 1; i <= num; i++) {
    let currentNum = i;
    // #1
    if (currentNum % 2 === 0) {
      currentNum *= 2;
      // #2
      if (currentNum % 4 === 0) {
        currentNum += 1;
        // #3
        if (currentNum % 5 !== 0) {
          currentNum -= 1;
          numbersInLine += currentNum + " ";
        } else {
          numbersInLine += currentNum + " ";
        }
      }
      // #2
      else {
        // #3
        if (currentNum % 5 !== 0) {
          currentNum -= 1;
          numbersInLine += currentNum + " ";
        } else {
          numbersInLine += currentNum + " ";
        }
      }
    }
    // #1
    else {
      // #2
      if (currentNum % 4 === 0) {
        currentNum += 1;
        // #3
        if (currentNum % 5 !== 0) {
          currentNum -= 1;
          numbersInLine += currentNum + " ";
        } else {
          numbersInLine += currentNum + " ";
        }
      }
      // #2
      else {
        // #3
        if (currentNum % 5 !== 0) {
          currentNum -= 1;
          numbersInLine += currentNum + " ";
        } else {
          numbersInLine += currentNum + " ";
        }
      }
    }
  }
  console.log(`${numbersInLine}`);
}

nGreaterThan9(10);

function nGreaterThan9(num) {
  let numbersInLine = "";

  for (let i = 1; i <= num; i++) {
    let currentNum = i % 2 === 0 ? i * 2 : i;
    currentNum = currentNum % 4 === 0 ? currentNum + 1 : currentNum;
    currentNum = currentNum % 5 !== 0 ? currentNum - 1 : currentNum;

    numbersInLine += currentNum + " ";
  }

  console.log(`${numbersInLine}`);
}

nGreaterThan9(10);
