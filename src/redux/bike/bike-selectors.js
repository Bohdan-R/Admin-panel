import { createSelector } from '@reduxjs/toolkit';

const getBikeList = state => state.bikeBooking.bikeList;

const getIdList = createSelector([getBikeList], bikes => {
  const bikesId = [];
  bikes.forEach(bike => bikesId.push(bike.id));
  return bikesId;
});

const getTotalbikes = state => {
  return getBikeList(state).length;
};

const getAvailablebikes = createSelector([getBikeList], bikes => {
  return bikes.reduce(
    (total, { status }) => (status === 'available' ? total + 1 : total),
    0,
  );
});

const getBookedBikes = createSelector([getBikeList], bikes => {
  return bikes.reduce(
    (total, { status }) => (status === 'unavailable' ? total + 1 : total),
    0,
  );
});

const getAveragePrice = createSelector(
  [getBikeList, getTotalbikes],
  (bikes, quantity) => {
    const total = bikes.reduce((total, { price }) => total + price, 0);

    return total / quantity;
  },
);

export default {
  getBikeList,
  getIdList,
  getTotalbikes,
  getAvailablebikes,
  getBookedBikes,
  getAveragePrice,
};
