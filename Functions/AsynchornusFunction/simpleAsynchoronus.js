

// this is some basic of understanding Asynchronous JavaScript functions

//Asynchronous means that do several things at once time
//Asynchronous functions can be executed without any synchronization

// একটি  অ্যাাসিনক্রনাস ফাংশন প্রগ্রামের শুরুতে রান হয় না। সব সিনক্রনাস ফাংশনের কাজ শেষ হলে অ্যাাসিনক্রনাস ফাংশনের কাজ শুরু হয়
// অ্যাসিনক্রনাস ফাংশন কোনো সিয়িয়াল অনুযায়ী এক্সিকিউট  হয় না।


//এর পরে সব অ্যাাসিক্রনাস ফাংশন রান হবে
setTimeout(() => {
console.log(`I am number one `)
}, 3000);

setTimeout(() => {
    console.log(`I am number two `)
},5000);
console.log(`I am number three `)  //এটি  একটি সিনক্রনাস ফাংশন। সবার আগে  এটি রান হবে
setTimeout(() => {
    console.log(`I am number four `) // এটি রান হবে ৩য় ধাপে রান হবে ।
}, 0);
console.log(`I am number five`) //এটিও একটি সিনক্রনাস ফাংসন। ২য় ধাপে এটি রান হবে।