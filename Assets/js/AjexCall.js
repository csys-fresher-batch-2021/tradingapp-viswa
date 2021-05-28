var USDINR = document.getElementById('usdInr');
var USDINR1 = document.getElementById('usdInr1');
var USDEUR = document.getElementById('usdEur');
var dynamic = document.getElementById("us");
var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
var data;
var data1;
xhr.onload = displayIncomingData; // call success function if request is successful
xhr.onerror = error;
xhr2.onload = displayDynamicData;
xhr2.onerror = error; // call error function if request failed
xhr.open('GET', 'http://api.currencylayer.com/live?access_key=f342386b3304900462ca9bd20a44cec6&format=1&base=USD'); // open a GET request
xhr.send(); // send the request to the server.

xhr2.open('GET', 'https://dataviswa.herokuapp.com/Forex');
xhr2.send();
// function to handle Incoming data from  a website 


function displayIncomingData() {
    data = JSON.parse(this.responseText);

    USDINR.innerText = data.quotes.USDINR;
    USDEUR.innerText = data.quotes.USDEUR;
    USDINR1.innerText = data.quotes.USDINR;
    let array = JSON.parse(localStorage.getItem("array")) || [];
    array.push(data.quotes.USDINR);
    localStorage.setItem("array", JSON.stringify(array));



}


function displayDynamicData() {
    data1 = JSON.parse(this.responseText);
    dynamic.innerText = (data1[0].Value);
}


// function to handle error
function error(err) {
    console.log('Request Failed', err); //error details will be in the "err" object
}

