// VE = 60 mush/hour, 1 hour = 50 min picking, 10 min rest;
// dron = 100 mush/hour, 60 min picking, no rest;
// 1 Sack = 50 mush;
// console.log sackCount = time* (mushVeCount + mushDronCount)

// sackCount = hours * (jinka-50+dron*100)

function pickingMushrooms(hours, drons) {
  let min = 1;
  let mush = 1;
  let hour = 60 * min;
  let vePick = (60 * mush) / hour - 10;
  let dronPick = (100 * mush) / hour;
  let sack = 50 * mush;
  let mushVeCount = vePick * hours;
  let mushDronCount = drons * dronPick;
  let sackCount = Math.abs((mushVeCount + mushDronCount) * sack) / 50;

  console.log(`${Math.floor(sackCount)}`);
}
pickingMushrooms(2, 7);
pickingMushrooms(3, 4);
pickingMushrooms(5, 2);

function mushPick(hours, drons) {
  let sack = 50;
  let jinka = 60 - 10;
  sackCount = (hours * (jinka + drons * 100)) / sack;
  console.log(sachCount);
}
