let number=[1,2,3,4,5,6,7,8,9,10];

function myReduce(arr,cb,accu){

    //রিডিউস ফাংশনটি তিনটি প্যারামিটার নেয় একটি অ্যারে, একটি কলব্যাক ফাংশন, ও একটি অ্যাকুমেলেটর
    //এই ফাংশনটি একটি আপডেটেড ভ্যালু এক্যুমেলেটর হিসেবে রিটার্ন করে


    for(var i=0;i<arr.length;i++){
      
        accu=cb(accu,arr[i]);
     
    }
    return accu;

}


var sum=myReduce(number,function(pre,current){

    return pre + current;
},number[0]);
var max=myReduce(number,function(pre,current){

    return Math.max(pre,current);
},number[0]);

var min=myReduce(number,function(pre,current){

    return Math.min(pre,current);
},number[0]);
console.log(sum);
console.log(max);
console.log(min);