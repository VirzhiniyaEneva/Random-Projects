/*
Create an array of words. Use a for loop to find and log the longest word.
 */

const words = ["hat", "umbrella", "beach towel"];
let longestWord = true;
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length[0] > word.length[1] && word.length[0] > word.length[2]) {
        console.log(words[0]);
    } else if (word.length[1] > word.length[0] && word.length[1] > word.length[2]) {
        console.log(words[1]);
    } else {
        console.log(words[2]);
    }
}

/*    for (let j = 0; j < word.length; j++ ){
      letters = word[j];
    }
*/
