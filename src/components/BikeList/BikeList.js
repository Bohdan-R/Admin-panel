import React from 'react';
import { useSelector } from 'react-redux';
import { bikeSelectors } from '../../redux/bike';
import BikeItem from '../BikeItem';
import './BikeList.scss';

export default function BikeList() {
  const bikeList = useSelector(bikeSelectors.getBikeList);

  return (
    <div className="bike">
      <ul className="bike__list">
        {bikeList.map(bike => (
          <li key={bike.id} className="bike__item">
            <BikeItem bike={bike} />
          </li>
        ))}
      </ul>
    </div>
  );
}
