// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) { }

module.exports = reverse;


// function reverse(str) {
//     let string = str.split("");
//     string = string.reverse();
//     return string.join("");
// }

// function reverse(str) {
//     let string = "";
//     for ( let character of str ){
//         string = character + string;
//     }
//     return string;
// }

// function reverse(str) {
//     return str.split("").reduce( ( string , character ) => character + string, '')
// }

// function reverse(str) {
//     return str.split("").reduce( ( string , character ) => character + string, '')
// }