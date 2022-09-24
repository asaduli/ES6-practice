let fruits=['Mango','Black Berry','Licchi','Jack-fruit']
fruits.shift('Mango');
fruits.pop('Jack-fruit')
fruits.unshift('Orange');
fruits.push("Banana");
fruits.splice(2,0,'Apple','Cherry','Dragon');
// console.log(fruits)

let veg=['Potato','Tomato','Cucumber','Carrot'];

let goodfood=fruits.concat(veg);

 goodfood.splice(5,2,'Beef','Mutton');

function deleteElements (srcArray,itemArray){

 for(item of itemArray){
  let index=srcArray.indexOf(item)
  srcArray.splice(index,1);

 }
 return srcArray;

}

console.log(deleteElements(goodfood,['Apple','Beef','Mutton']));
