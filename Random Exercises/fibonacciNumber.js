function fibonacci(data) {
  let numSum = 0;
  let num1 = 0;
  let num2 = 1;
  for (let i = 0; i <= data; i++) {
    numSum = Number(num1 + num2);
  }
  console.log(numSum);
}
fibonacci(5);
