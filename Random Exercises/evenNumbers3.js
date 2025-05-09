function evenNums(start, end) {
  start = Math.abs(start);
  end = Math.abs(end);

  let min = start < end ? start : end;
  let max = start > end ? start : end;

  for (i = min; i <= max; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

evenNums(-6, 2);
