const objects = [];
const objectsToInsert = 10;

function plusObject() {
    for (i = 1; i <= objectsToInsert; i++) {
        objects.push({
            count: i,
        });
    }
}
plusObject();
console.log(objects);
console.log(objects[7]);

/*
Задача 3 
имаш празен масив и произоволно число 
const objects = []; 
const objectsToInsert = 10; 
  
направи for цикъл който вкарва в масива толкова обекти, колото е числото 
всеки обект трябва да е в този формат: 
  
{ 
  count: 1 
} 
  
където count е номерът му по ред в масива, започвайки от 1.
 */
