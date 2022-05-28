import {
  GET_NEWS,
  GET_NEWS_LOADING,
  SEARCH_DATA,
  SEARCH_NEWS_LOADING,
} from '../action/ActionList';

const initialState = {
  newsLoading: false,
  searchNewsLoading: false,
  news: null,
  searchData: null,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS: {
      var data = action.data;

      return {
        ...state,
        news: data,
      };
    }

    case GET_NEWS_LOADING: {
      return {
        ...state,
        newsLoading: action.data,
      };
    }

    case SEARCH_DATA: {
      var data = action.data;

      return {
        ...state,
        searchData: data,
      };
    }

    case SEARCH_NEWS_LOADING: {
      return {
        ...state,
        searchNewsLoading: action.data,
      };
    }

    default: {
      return state;
    }
  }
};

export default apiReducer;
