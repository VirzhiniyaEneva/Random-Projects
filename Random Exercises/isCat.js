function isCat(animal) {
  let message = "kotka" === animal ? "KOTKA E!" : `TOVA E TYPO JIVOTNO - ${animal}`;

  console.log(message);
}

isCat("koche");
isCat("jiraf");
isCat("kotka");
isCat("luv");
isCat("prase");
isCat("boiko borisov");
