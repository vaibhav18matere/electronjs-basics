console.log('console from index2.js - rendered processs 2');

let request = require('request');

const QUOTE_URL = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";

const quoteContainer = document.getElementById('random-quote');

function requestFunc(err, response, body) {
     let bodyJSON = JSON.parse(body);
     let randomQuote = bodyJSON[0]['content']['rendered'];
     console.log(randomQuote);
     quoteContainer.innerHTML = randomQuote;
}

request(QUOTE_URL, requestFunc)