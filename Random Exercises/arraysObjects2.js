const catObject = {
    type: "cat",
    cute: true,
};

const dogObject = { ...catObject };

dogObject.type = "dog";
dogObject.cute = false;

console.log(catObject);
console.log(dogObject);
