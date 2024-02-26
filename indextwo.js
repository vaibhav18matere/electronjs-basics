console.log('console from index2.js - rendered processs 2');

let request = require('request');

const QUOTE_URL = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";

const quoteContainer = document.getElementById('random-quote');

request(QUOTE_URL, function requestFunc(err, response, body) {
     if (!err && response.statusCode === 200) {
          let bodyJSON = JSON.parse(body);
          let randomQuote = bodyJSON[0]['content']['rendered'];
          console.log(randomQuote);
          quoteContainer.innerHTML = randomQuote;
     } else {
          console.error("Error fetching quote:", err);
          quoteContainer.innerHTML = "Error fetching quote";
     }
});
