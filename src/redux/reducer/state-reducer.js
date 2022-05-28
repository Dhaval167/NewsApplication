import {SEARCH_ENABLE} from '../action/ActionList';

const initialState = {
  searchEnable: false,
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ENABLE: {
      return {
        ...state,
        searchEnable: action.data,
      };
    }

    default: {
      return state;
    }
  }
};

export default stateReducer;
