function allCats(cats, orangeCats, siameseCats) {
  let normalCats = cats - (orangeCats + siameseCats);
  let normalCatsIq = normalCats * 120;
  let orangeCatsIq = orangeCats * (normalCatsIq - 10);
  let siameseCatsIq = ((normalCatsIq + orangeCatsIq) / 2) * 1.4;
  let totalIq = normalCatsIq + orangeCatsIq + siameseCatsIq;

  console.log(totalIq);
}
allCats(10, 2, 3);

// > В празна стая влизат Х на брой котки. Трябва да изчисли общото IQ на стаята след като всички котки са влезли.
// > Правилата за изчисление са следните:
// >
// > - една нормална котка има 120 IQ
// > - оранжевите котки имат с 10 IQ по-малко от нормалните
// > - сиамските котки имат с 40% повече IQ от средната стойност на всички други котки
// >
// > напишете функция, която приема като вход 3 параметъра - брой котки, брой оранжеви котки, брой сиамски котки (броят котки от първия параметър трябва да включва котките от останалите два) и изкарва общото IQ в стаята.

// function calculateCatIqLol(totalCats, orangeCats, siameseCats) {
// const normalCats = totalCats - (orangeCats + siameseCats);

// const normalCatsIq = normalCats * 120;
// const orangeCatsIq = orangeCats * 110;

// const nonSiameseCats = normalCats + orangeCats;
// const nonSiameseCatsIq = normalCatsIq + orangeCatsIq;

// const siameseCatsIq =
// siameseCats * ((nonSiameseCatsIq / nonSiameseCats) * 1.4);

// const totalIq = normalCatsIq + orangeCatsIq + siameseCatsIq;

// console.log(`Total feline IQ: ${totalIq}`);
// }

// calculateCatIqLol(10, 2, 3);
