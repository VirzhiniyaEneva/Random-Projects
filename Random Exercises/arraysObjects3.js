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
