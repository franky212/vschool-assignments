axios.get("https://api.vschool.io/frankdelaguila/todo").then(function(response) {
  for(var i = 0; i < response.data.length; i++) {
    document.getElementById("todo-items").innerHTML += "<h3>" + response.data[i].title + "</h3>";
    document.getElementById("todo-items").innerHTML += "<h4>Price: $" + response.data[i].price + "</h4>";
    document.getElementById("todo-items").innerHTML += "<p>" + response.data[i].description + "</p>";
  }
});

document.getElementById("submit").addEventListener("click", function() {
  var title = document.getElementById("title").value;
  var price = document.getElementById("price").value;
  var description = document.getElementById("description").value;

  axios.post("https://api.vschool.io/frankdelaguila/todo", {"title": title, "description": description, "price": price}).then(function(response) {
    document.getElementById("todo-items").innerHTML += "<h3>" + response.data.title + "</h3>";
    document.getElementById("todo-items").innerHTML += "<h4>Price: $" + response.data.price + "</h4>";
    document.getElementById("todo-items").innerHTML += "<p>" + response.data.description + "</p>";
    document.getElementById("form").innerHTML += '<div class="alert alert-success" role="alert">IT WAS A SUCCESS!</div>';
  });
});
