
//Array can be decleared tow ways
//Using Arrray litteral, & array constructor


let array1=[1,2,3,4,5,6,7,8,9,10] //Declearing array using litteral

array1[10]=11; //insert a new value at the end using index

// console.log(array1); 
 array1.push(12); //insert a new value at the end using push method

 console.log(array1); 

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
