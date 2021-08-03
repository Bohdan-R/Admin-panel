import { createAction } from '@reduxjs/toolkit';

const addBike = createAction('bike/addBike', values => ({
  payload: { ...values, status: 'available' },
}));

const addBikeStatus = createAction('bike/addBikeStatus', (status, id) => ({
  payload: { status, id },
}));

const deleteBike = createAction('bike/deleteBike');

export default {
  addBike,
  addBikeStatus,
  deleteBike,
};
