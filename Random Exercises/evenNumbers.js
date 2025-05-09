function evenNums(num1, num2) {
  if (num1 < num2) {
    for (i = num1; i <= num2; i++) {
      let numX = i;
      if (numX % 2 === 0) {
        console.log(numX);
      }
    }
  } else {
    for (i = num2; i <= num1; i++) {
      let numX = i;
      if (numX % 2 === 0) {
        console.log(numX);
      }
    }
  }
}
evenNums(10, 20);
evenNums(20, 10);
