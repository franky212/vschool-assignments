/*

Calculates the character frequencies in a string. Whitespace and
 punctuation is ignored. Non-english characters are not counted.
 Case is ignored (‘A’ and ‘a’ both count toward the same character).

Returns an object with keys being lowercase characters, and
                 values being the character counts.

charFreq('Ceres');
*  // returns { c: 1, e: 2, r: 1, s: 1 }

*/

function charFreq(sentence) {
  var freq = {};
  var newSentence = sentence.replace(/([\xE0-\xFF\s])/g, "");
  for (var i = 0; i < newSentence.length; i++) {
    console.log(freq);
    var character = newSentence.charAt(i);
    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
    }
  }
  return freq;
}

console.log(charFreq('C e r esíé'));
