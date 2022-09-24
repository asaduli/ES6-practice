

// String methods practice


let str="abcdefghijklmnopqrstuvwxyz"

let length=str.length;// this method calculates the length of the string
console.log("length: " + str.length);

//Replacement method for strings

let newstr=str.replace('a','z');  // 
console.log("newstr: " + newstr);

// slice(startpostion, endposition) ..end postion not included
let slicestr=str.slice(2,6); //slice(startpositon) [if the second parameter is not included than rest of the character will be sliced]

console.log(slicestr);

// substring(star,end) similar to slice()

let part=str.substring(2,6);
console.log(part);




