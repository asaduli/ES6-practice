let number=[1,2,3,4,5,6,7,8,9,10];

function myMap(arr,cb){

 let newArray=[];
 for(let i=0;i<arr.length;i++){

    let temp=   cb(arr[i],i,arr); //ম্যাপ ফাংশন সাধারনত নতন একটি অ্যারে প্রদান করে।
                                  // এখানে কলব্যাক ফাংশনটি নির্দিষ্ট লজিকে প্রতি লুপে একটি ভ্যালু প্রভাইড করে
    newArray.push(temp);          // মাইম্যাপ ফাংশনটির একটি ভ্যারিয়েবেল সেই ভ্যালুটি হোল্ড করে এবং নতুন একটি  অ্যারেতে পুশ করে

 }

 return newArray;


}

let modifyArray=myMap(number, function (value,index,array){

    return value*value;
})

console.log(modifyArray);