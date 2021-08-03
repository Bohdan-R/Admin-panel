import React from 'react';
import { useSelector } from 'react-redux';
import { bikeSelectors } from '../../redux/bike';
import './Statistics.scss';

export default function Statistics() {
  const totalBikes = useSelector(bikeSelectors.getTotalbikes);
  const totalAvailableBikes = useSelector(bikeSelectors.getAvailablebikes);
  const totalUnavailableBikes = useSelector(bikeSelectors.getBookedBikes);
  const averagePrice = useSelector(bikeSelectors.getAveragePrice);

  return (
    <div className="stat">
      <h2 className="stat__title">Statistics</h2>
      <ul className="stat__list">
        <li className="stat__item">
          <p className="stat__content">
            Total Bikes: <span>{totalBikes}</span>
          </p>
        </li>
        <li className="stat__item">
          <p className="stat__content">
            Available Bikes: <span>{totalAvailableBikes}</span>
          </p>
        </li>
        <li className="stat__item">
          <p className="stat__content">
            Booked Bikes: <span>{totalUnavailableBikes}</span>
          </p>
        </li>
        <li className="stat__item">
          <p className="stat__content">
            Average bike cost: <span>{Number(averagePrice).toFixed(2)}</span>{' '}
            UAH/hr.
          </p>
        </li>
      </ul>
    </div>
  );
}
