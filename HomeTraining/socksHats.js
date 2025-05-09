function socksAndHats(day) {
  let socksPerDay = 8;
  let hatsPerDay = socksPerDay / 2;
  let socksTotal = day * socksPerDay;
  let hatsTotal = day * hatsPerDay;
  console.log(`Zhi sew ${socksTotal} and ${hatsTotal} hats.`);
}
socksAndHats(5);
socksAndHats(8);

// Жинка шие по 8 чорапа на ден и два пъти по-малко шапки. Напишете функция, която приема броят дни, в които Жинка шие и изкарва съобщение с броя чорапи и шапки, които е ушила за тези дни.
