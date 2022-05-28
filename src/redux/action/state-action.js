import * as types from './ActionList';

//search-state
export const searchEnable = value => {
  return dispatch => {
    dispatch({type: types.SEARCH_ENABLE, data: value});
  };
};
