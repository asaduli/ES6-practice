

//Creating Ajax request using XMLHttpRequest   
var XMLHttpRequest = require('xhr2');
const xhr=new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')

xhr.onreadystatechange = (e) => {
 if (xhr.readyState === 4 && xhr.status === 200){
    let res=JSON.parse(xhr.response);
     res.map((v)=> console.log(v.title));
   }
 else{
    console.log(xhr.status);
 }

}
xhr.send();
