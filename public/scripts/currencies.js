const hosts = 'https://api.frankfurter.app/currencies';

// async function getData(url){
//     const response = await fetch(url);
//     var data = await response.json();
//     return data
// }

// getData(hosts);
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    return data;
}
// Calling that async function
let getapi(hosts);
  
