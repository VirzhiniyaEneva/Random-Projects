/*
Create an array of 5 numbers and use a for loop to calculate and log the sum.
 */

const box = [3, 50, 29, 85, 63];
let sum = 0;
for (let i = 0; i < box.length; i++) {
    let num = box[i];
    sum += num;
}
console.log(sum);
