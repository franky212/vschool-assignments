var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

function print(array) {
  console.log(array.join(" "));
}

function printBackwards(array) {
  array.reverse();
  print(array);
}

function everyOther(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i += 2) {
    newArray.push(array[i]);
  }
  print(newArray);
}

function reverseEveryOther(array) {
  var reversed = [];
  for(var i = 1; i < array.length; i += 2) {
    reversed.push(array[i] + " " + array[i - 1]);
  }
  print(reversed);
}

everyOther(lyrics);
