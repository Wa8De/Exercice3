const list = {
  elem: [
    { id: 0, text: "JavaScript" },
    { id: 1, text: "PHP" },
    { id: 2, text: "Laravel" },
  ]
};
export const Reducer = (state = list, action) => {
  switch (action.type) {
    case "Add":
      return {
        ...state,
        elem: [
          ...state.elem,
          {
            id: state.elem.length,
            text: action.payload,
          },
        ],
      }

    case "Update":
      return {
        ...state,
        elem: state.elem.map((elem) => {
          if (elem.id !== action.payload) {
            return elem;
          }
          return {
            ...elem,
            text: action.newName,
          };
        }),
      };

    case "Delete":
      return {
        ...state,
        elem: state.elem.map((elem) => {
          if (elem.id === action.payload) {
            return delete state.elem[elem.id];
          }
          return elem
        }),
      };

  }

  return state;
};
