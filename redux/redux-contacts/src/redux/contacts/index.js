// Reducer for contacts specifically

export default function reducer(prevState = [], action) {
  switch(action.type) {
    case "ADD_CONTACT":
      return [...prevState, action.contact];
    default:
      return prevState;
  }
}

// All my actions creators

export function addContact(contact) {
  return {
    type: "ADD_CONTACT",
    contact
  }
}
