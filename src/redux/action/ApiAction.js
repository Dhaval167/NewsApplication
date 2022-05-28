import axios from 'axios';
import api from '../../helper/api';
import * as types from './ActionList';

//loading get-news
export const getNewsLoading = value => {
  return dispatch => {
    dispatch({type: types.GET_NEWS_LOADING, data: value});
  };
};

//get-news api
export const getNews = () => {
  return async dispatch => {
    dispatch(getNewsLoading(true));
    //api-called
    var response = await axios({
      method: 'GET',
      url: api.baseUrl + api.topHeadline,
    });

    if (response.data.status == 'ok') {
      dispatch(getNewsLoading(false));

      const result = response.data.articles;

      dispatch({type: types.GET_NEWS, data: result});
    } else {
      dispatch(getNewsLoading(false));
      console.log('error', response.status);
    }
  };
};

//loading search-news
export const searchNewsLoading = value => {
  return dispatch => {
    dispatch({type: types.SEARCH_NEWS_LOADING, data: value});
  };
};

//search-news by category :: default search bitcoin
export const searchNews = text => {
  return async dispatch => {
    dispatch(searchNewsLoading(true));

    var response = await axios({
      method: 'GET',
      url: `${api.baseUrl}everything?q=${text}&apiKey=7c94c4bf82af4e18a0ba534482945782`,
    });

    if (response.data.status == 'ok') {
      dispatch(searchNewsLoading(false));

      const result = response.data.articles;

      dispatch({type: types.SEARCH_DATA, data: result});
    } else {
      dispatch(searchNewsLoading(false));
      console.log('error', response.status);
    }
  };
};
