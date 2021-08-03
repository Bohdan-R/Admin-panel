import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import bikeActions from './bike-actions';

const bikeList = createReducer([], {
  [bikeActions.addBike]: (state, { payload }) => [...state, payload],
  [bikeActions.addBikeStatus]: (state, { payload: { id, status } }) =>
    state.map(state =>
      state.id === id ? { ...state, status: status } : { ...state },
    ),
  [bikeActions.deleteBike]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default combineReducers({
  bikeList,
});
