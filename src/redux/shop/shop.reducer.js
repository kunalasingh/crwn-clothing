import shopActionTypes from "./shop.types";

const INIIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INIIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
