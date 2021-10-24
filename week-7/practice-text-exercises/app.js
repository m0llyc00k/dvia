
var txt;
var counts = {};
var keys = [];

function preload() {
    txt = loadStrings('./sotu-data/Eisenhower_1961.txt');
}

function setup() {
    var allwords = txt.join("\n");
    var tokens = allwords.split(/\W+/);
    
    for (var i=0; i<tokens.length; i++) {
        var word = tokens[i].toUpperCase();
        if (!/\d+/.test(word)) 
        if (counts[word] === undefined) {
            counts[word] = 1;
            keys.push(word);
        } else {
            counts[word] = counts[word] + 1;
        }
    }
    
    noCanvas();

}

keys.sort(compare);

function compare(a,b) {
    var countA = counts[a];
    var countB = counts[b];
    return countA - countB;
};

// for (var i = 0; i < keys.length; i++) {
//     // var key = keys[i]
//     createDiv(keys[i]);
// }



console.log(counts);

// var tokens = data.split(/\W+/);

// for (var i = 0; i < tokens.length; i++) {

// for (var i = 0; i < tokens.length; i++) {
//   var word = tokens[i];
//   // It's a new word!
//   if (concordance[word] === undefined) {
//     concordance[word] = 1;
//   // We've seen this word before!
//   } else {
//     concordance[word]++;
//   }
// }

// // Add another array to track keys
// var keys = [];
// for (var i = 0; i < tokens.length; i++) {
//   var word = tokens[i];
//   if (concordance[word] === undefined) {
//     concordance[word] = 1;
//     // When we have a new word, let's add to our keys array!
//     keys.push(word);
//   } else {
//     concordance[word]++;
//   }
// }

// keys.sort(function(a, b) {
//   // what goes here??
// });

// keys.sort(function(a, b) {
//   if (concordance[b] > concordance[a]) {
//     return true;
//   } else {
//     return false;
//   }
// });

// keys.sort(function(a, b) {
//   return (concordance[b] - concordance[a]);
// });

// for (var i = 0; i < keys.length; i++) {
//   console.log(keys[i] + ': ' + concordance[keys[i]]);
// }