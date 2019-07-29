const initalState = {
  data: ""
};

export const dataReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        loading: true,
        data: action.payload
      };
    default:
      return state;
  }
};
