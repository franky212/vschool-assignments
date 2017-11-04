var dictionary = {};

var addWord = function(word, definition) {
  dictionary[word] = definition;
}

var lookItUp = function(word) {
  return dictionary[word];
}

module.exports = {
  addWord,
  lookItUp
};
