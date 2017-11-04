axios.get("https://swapi.co/api/people/").then(function(response) {
  var characters = response.data.results;
  characters.map(function(character) {
    console.log(character.name);
    document.getElementById("content").innerHTML += "<div class='info'>" +
    "<h3 id='name'>" + character.name + "</h3>" +
    "<small>Birth Year: " + character.birth_year + "</small>" +
    '<a href="' + character.homeworld + '">Homeworld</a>' +
    "<p>Height: " + character.height + "</p>" +
    "</div>";
  });
});
