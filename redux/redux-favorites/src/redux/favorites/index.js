export default function reducer(prevState = [], action) {
  switch(action.type) {
    case "ADD_FAVORITE":
      return [...prevState, action.favorite];
    default:
      return prevState;
  }
}

export function addFavorite(favorite) {
  return {type: "ADD_FAVORITE", favorite};
}
