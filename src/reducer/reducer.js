export const initialState = {
  foodHome: [],
  isSlide: false,
  foodList: [],
  initialPrice: "500",
  showVeg: false,
  showNonVeg: false,
  selectedRating: null,
  sortBy: null,
  inputValue: "",
  isSearchOpen: false,
  category: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESSFUL_HOME_DATA": {
      return { ...state, foodHome: action.payload };
    }

    case "SIDEBAR_ACTIVE": {
      return { ...state, isSlide: !state.isSlide };
    }

    case "FETCH_SUCCESSFUL_ALL_FOODLIST_DATA": {
      return { ...state, foodList: action.payload };
    }

    case "CHANGING_THE_PRICE": {
      return { ...state, initialPrice: Number(action.payload) };
    }

    case "CHECK_VEG_CATEGORY": {
      return { ...state, showVeg: !state.showVeg };
    }
    case "CHECK_NON_VEG_CATEGORY": {
      return { ...state, showNonVeg: !state.showNonVeg };
    }
    case "SET_SELECTED_RATING": {
      return { ...state, selectedRating: action.payload };
    }
    case "SORT_LOW_TO_HIGH": {
      const sortedFoodList = [...state.foodList].sort(
        (a, b) => a.price - b.price
      );
      return { ...state, foodList: sortedFoodList, sortBy: "lowToHigh" };
    }

    case "SORT_HIGH_TO_LOW": {
      const sortedFoodList = [...state.foodList].sort(
        (a, b) => b.price - a.price
      );
      return { ...state, foodList: sortedFoodList, sortBy: "highToLow" };
    }

    case "ON_CLICKING_CLEAR": {
      return {
        ...state,
        foodHome: [],
        initialPrice: "500",
        showVeg: false,
        showNonVeg: false,
        selectedRating: false,
        sortBy: null,
      };
    }

    case "SEARCH_DATA": {
      return {
        ...state,
        inputValue: action.payload,
        isSearchOpen: action.payload.trim() !== "",
      };
    }

    case "ON_CLICKING_CATEGORY": {
      return {
        ...state,
        initialPrice: "500",
        showVeg: false,
        showNonVeg: false,
        selectedRating: false,
        sortBy: null,
        category: action.payload,
      };
    }

    default:
      return state;
  }
};
