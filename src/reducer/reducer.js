export const initialState = {
  food: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESSFULL": {
      return { ...state, food: action.payload };
    }
    default:
      return state;
  }
};
