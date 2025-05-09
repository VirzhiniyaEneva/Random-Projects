const catObject = {
    type: "cat",
    cute: true,
};

const dogObject = { ...catObject };

dogObject.type = "dog";
dogObject.cute = false;

console.log(catObject);
console.log(dogObject);

/* Задача 2 
Имаш обект: 

const catObject = { 
  type: 'cat', 
  cute: true 
} 
  
направи копие на обекта dogObject като промениш type на dog и cute на false, без да променяш оригиналния обект 
изкарай и двата обекта в конзолата
*/
