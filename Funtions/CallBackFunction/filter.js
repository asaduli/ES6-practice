let number=[1,2,3,4,5,6,7,8,9,10];

function myfilter(number,cb) {
 
    let newArray=[];
  for (var i=0; i<number.length; i++) {
     
    if(cb(number[i],i,number)){   //in this conditional block the callback function is called and returns true for execution block statements
       
        newArray.push(number[i]);

    }
   

  }
  return newArray;


}

let evenNumber=myfilter(number,function (value,index,array){
   
    return value%2==0;

});
let oddNumber=myfilter(number,function (value,index,array){
  return value%2==1;
});

console.log("even number: "+evenNumber);
console.log("odd number: "+oddNumber);