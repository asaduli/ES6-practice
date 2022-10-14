
//create a function for getting Httprequest 


function getHttprequest(url,callback){

    var XMLHttpRequest = require('xhr2');
    const xhr=new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = (e) => {
        if (xhr.readyState === 4 && xhr.status === 200){
           let res=JSON.parse(xhr.response);
           callback(null, res);
          }
        else{
        callback(xhr.status, null);
        }
       
       }
       xhr.send();


}


//implementation of ajax using callback function for Dynamic Ajax requests
getHttprequest('https://jsonplaceholder.typicode.com/users',function(error,res){
  
if(error){
    console.log(error);
}else{
 res.map((value)=>console.log(value.name));

}
})

