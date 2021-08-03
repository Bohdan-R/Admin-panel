import React from 'react';
import { useDispatch } from 'react-redux';
import { bikeActions } from '../../redux/bike';
import classNames from 'classnames';
import { MdClear } from 'react-icons/md';
import './BikeItem.scss';

export default function BikeItem({ bike }) {
  const dispatch = useDispatch();
  const { name, type, color, price, id, status } = bike;

  return (
    <div
      key={id}
      className={classNames('bike__card', {
        'bike__card--busy': status === 'busy',
        'bike__card--unavailable': status === 'unavailable',
      })}
    >
      <div className="bike__info">
        <p className="bike__name">
          <span>{name}</span> - {type} ({color})
        </p>
        <p className="bike__id">ID: {id}</p>
        <div className="bike__status">
          <p className="bike__status__title">STATUS:</p>
          <select
            className="bike__status__select"
            id={id}
            value={status}
            onChange={e => {
              const bikeStatus = e.target.value;
              dispatch(bikeActions.addBikeStatus(bikeStatus, id));
            }}
          >
            <option value="available">Available</option>
            <option value="busy">Busy</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
      </div>
      <p className="bike__price">{Number(price).toFixed(2)} UAH/hr.</p>
      <button
        type="button"
        className="bike__btn-close"
        onClick={() => {
          dispatch(bikeActions.deleteBike(id));
        }}
      >
        <MdClear
          className={classNames('bike__icon', {
            'bike__icon--unavailable': status === 'unavailable',
          })}
        />
      </button>
    </div>
  );
}
