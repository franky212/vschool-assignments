function stringifyUrl(endpoint, query) {
  endpoint += "?";
  for (let key in query) {
    endpoint += `${key}=${query[key]}&`
  }
  return endpoint.slice(0, -1);
}

let endpoint = "http://localhost:8080/monkeys";
let query = {
  color: "black",
  species: "howler"
}
console.log(stringifyUrl(endpoint, query));
