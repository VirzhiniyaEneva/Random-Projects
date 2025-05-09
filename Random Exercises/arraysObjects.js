const objects = [{}, {}, { name: "Jinka" }, {}, {}];
let object3 = objects.splice(2, 1);
object3 = object3[0];
object3.age = 38;
console.log(object3.age);
console.log(object3);
