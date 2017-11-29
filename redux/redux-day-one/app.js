const redux = require("redux");

// Actions: objects that are a set of instructions
// Example: {
//            type: "INCREMENT"
//          }




// Take an action and update the state
const reducer = (prevState = 0, action) => {
  switch(action.type) {
    case "INCREMENT":
      return prevState + 1;
    case "DECREMENT":
      return prevState - 1;
    case "INCREASE_BY":
      return prevState + action.amount;
    case "DECREASE_BY":
      return prevState - action.amount;
    default:
      return prevState;
  }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
  const currState = store.getState();
  console.log(currState);
});

// Action creators: return an action object
const increment = () => {
  return {
    type: "INCREMENT"
  }
}

const decrement = () => {
  return {
    type: "DECREMENT"
  }
}

const increaseBy = amount => {
  return {
    type: "INCREASE_BY",
    amount
  }
}

const decreaseBy = amount => {
  return {
    type: "DECREASE_BY",
    amount
  }
}

store.dispatch(decreaseBy(5));
store.dispatch(decreaseBy(5));
store.dispatch(decreaseBy(5));
