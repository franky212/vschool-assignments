const redux = require("redux");

const reducer = (prevState = [], action) => {
  switch(action.type) {
    case "ADD":
      return [...prevState, action.person];
    case "REMOVE":
      return prevState.filter(contact => contact.email !== action.email);
    default:
      return prevState;
  }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
  const currState = store.getState();
  console.log(currState);
  console.log("");
});

const add = (name, phone, email) => {
  return {
    type: "ADD",
    person: {
      name,
      phone,
      email
    }
  }
}

const remove = (email) => {
  return {
    type: "REMOVE",
    email
  }
}

store.dispatch(add("Frank", "(435)-256-1964", "frank.delaguila@delaguiladesign.com"));
store.dispatch(add("Luke", "(435)-256-1964", "luke.oliver@oliverdevelopment.com"));

store.dispatch(remove("frank.delaguila@delaguiladesign.com"));

store.dispatch(add("Bob", "(435)-256-1964", "bob@vschool.io"));
