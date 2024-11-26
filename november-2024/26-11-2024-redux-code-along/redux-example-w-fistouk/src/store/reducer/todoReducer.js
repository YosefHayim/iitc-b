// import {} from ""

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };

    default:
      break;
  }
};
