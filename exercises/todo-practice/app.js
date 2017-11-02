axios.get("https://api.vschool.io/frankdelaguila/todo").then(function(response) {
  var todos = response.data;
  todos.map(function(todo) {
    if (todo.completed === true) {
      var checked = "checked";
    } else {
      var checked = "";
    }
    document.getElementById("todo-items").innerHTML += `<h3>${todo.title}</h3>`;
    document.getElementById("todo-items").innerHTML += `<h4>Price: $${todo.price}</h4>`;
    document.getElementById("todo-items").innerHTML += `<p>${todo.description}</p>`;
    document.getElementById("todo-items").innerHTML += `<label>Completed: </label><input type="checkbox" id="todo-completed" ${checked}>`
  });
});

document.getElementById("submit").addEventListener("click", function() {
  var title = document.getElementById("title").value;
  var price = document.getElementById("price").value;
  var description = document.getElementById("description").value;

  if (title === "") {
    document.getElementById("form").innerHTML += '<div class="alert alert-danger" role="alert"><strong>Title</strong> is a required input!</div>';
  }

  axios.post("https://api.vschool.io/frankdelaguila/todo/", {
    "title": title,
    "description": description,
    "price": price
  }).then(function(response) {
    console.log(response);

    document.getElementById("todo-items").innerHTML += `<h3>${response.data.title}</h3>`;
    document.getElementById("todo-items").innerHTML += `<h4>Price: $${response.data.price}</h4>`;
    document.getElementById("todo-items").innerHTML += `<p>${response.data.description}</p>`;
    document.getElementById("form").innerHTML += '<div class="alert alert-success" role="alert">Your item was successfully added!</div>';
  }).catch(function(response) {
    console.log(response.response.data.error);
  });

});
//
// document.getElementById("todo-completed").addEventListener("click", function() {
//
// });
