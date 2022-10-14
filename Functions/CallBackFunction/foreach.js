let number=[1,2,3,4,5,6,7,8,9,10];

function myforeach(arr,cb){
  
  for(var i=0;i<arr.length;i++){
    cb(arr[i],i,arr); 
// এই কলব্যাক ফাংশনটি মাইফরইস ফাংশনটি কল হওয়ার সময় কল হবে এবং 
// সে আর্গুমেন্ট হিসেবে প্রতি লুপে একটি অ্যারের  প্রতি ইন্ডেক্সের ভ্যালু, ইনডেক্স, এবং ওই অ্যাারেটি পাস করবে  
  }

}

myforeach(number,function(value,index,array){

  console.log(index);

})
