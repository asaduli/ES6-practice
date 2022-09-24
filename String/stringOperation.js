

// String methods practice


let str="abcdefghijklmnopqrstuvwxyz"

let length=str.length;// this method calculates the length of the string
console.log("length: " + str.length);

//Replacement method for strings

let newstr=str.replace('a','z');  // 
console.log("newstr: " + newstr);

//Repalce method returns a new string
//Replace method is case sensitive
//It replaces only first match by default

let newstr2="Please visit Microsoft.MICROSOFT is famus for windows operating system";
let replaceStr2=newstr2.replace('Microsoft','Google') ;

//to ignore case sensitive Replace method need regular expression (/i)
//Regular expression are written without quote
let replaceStr2_1=newstr2.replace(/microsoft/i,'Google');
//to replace all the match, need to use /g regular expression for global flag set.
let replaceStr2_2=newstr2.replace(/Microsoft/ig,'Google');

console.log(replaceStr2_2);

// slice(startpostion, endposition) ..end postion not included
let slicestr=str.slice(2,6); //slice(startpositon) [if the second parameter is not included than rest of the character will be sliced]

console.log(slicestr);

// substring(star,end) similar to slice()

let part=str.substring(2,6);
console.log(part);

//let part2=str.substr(2,6);





