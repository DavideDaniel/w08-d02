var apikeys = require('./APIkeys.JSON')

// console.log(apikeys);


console.log(apikeys.results);

// var parsed = JSON.parse(apikeys)
// console.log(parsed.apikeys.results.GoogleMaps);
// var key = parsed.APIkeys[0].GoogleMaps
var keywillwork = apikeys.results.GoogleMaps
// console.log(parsed);
// console.log(key);
console.log(keywillwork);