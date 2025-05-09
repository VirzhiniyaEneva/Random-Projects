function mushPick(hours, drons) {
  let sack = 50;
  let jinka = 60 - 10;
  let sackCount = (hours * (jinka + drons * 100)) / sack;
  console.log(sackCount);
}
mushPick(2, 7);
mushPick(3, 4);
mushPick(5, 2);

// console.log(hours * (drones * 2 + 1));
