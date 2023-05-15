export const initialState = {
  food: [],
  isSlide: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESSFULL": {
      return { ...state, food: action.payload };
    }

    case "SIDEBAR_ACTIVE": {
      return { ...state, isSlide: !state.isSlide };
    }

    default:
      return state;
  }
};
