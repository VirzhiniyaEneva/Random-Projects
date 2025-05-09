function oddNums(start, end) {
  start = Math.abs(start);
  end = Math.abs(end);

  let min = start < end ? start : end;
  let max = start > end ? start : end;

  for (i = min; i <= max; i++) {
    let num = i;

    if (num % 2 !== 0) {
      console.log(`x${num}`);
    }
    console.log(num);

    // num = num % 2 === 0 ? console.log(num) : console.log(`x${num}`);
  }
}

oddNums(-6, 2);
