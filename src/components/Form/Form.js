import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { bikeActions, bikeSelectors } from '../../redux/bike';
import './Form.scss';
import { FORM_ERROR_MESSAGE } from '../constants/errorMessage';
import Statistics from '../Statistics';

export default function ContactForm() {
  const dispatch = useDispatch();
  const bikesId = useSelector(bikeSelectors.getIdList);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = data => {
    dispatch(bikeActions.addBike(data));

    resetInput();
  };

  const {
    IS_REQUIRED,
    MIN_LENGHT,
    MIN_LENGHT_VALUE,
    MIN_WHEEL_SIZE,
    MAX_WHEEL_SIZE,
    MIN_WHEEL_SIZE_VALUE,
    MAX_WHEEL_SIZE_VALUE,
    MIN_ID_LENGTH,
    MAX_ID_LENGTH,
    ID_LENGTH_VALUE,
    SAME_ID,
  } = FORM_ERROR_MESSAGE;

  const resetInput = () => {
    reset({
      name: '',
      type: '',
      color: '',
      wheelSize: '',
      price: '',
      id: '',
      description: '',
    });
  };

  return (
    <div className="admin-panel">
      <div className="admin-form-box">
        <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
          <ul className="input-box">
            <li key="name">
              <input
                className="admin-form__input"
                type="text"
                {...register('name', {
                  required: IS_REQUIRED,
                  minLength: {
                    value: MIN_LENGHT_VALUE,
                    message: MIN_LENGHT,
                  },
                })}
                autoComplete="off"
                placeholder="Name"
              />
              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
            </li>
            <li key="type">
              <input
                className="admin-form__input"
                type="text"
                {...register('type', {
                  required: IS_REQUIRED,
                  minLength: {
                    value: MIN_LENGHT_VALUE,
                    message: MIN_LENGHT,
                  },
                })}
                autoComplete="off"
                placeholder="Type"
              />
              {errors.type && (
                <p className="error-message">{errors.type.message}</p>
              )}
            </li>
            <li key="color">
              <input
                className="admin-form__input"
                type="text"
                {...register('color', {
                  required: IS_REQUIRED,
                  minLength: {
                    value: MIN_LENGHT_VALUE,
                    message: MIN_LENGHT,
                  },
                })}
                autoComplete="off"
                placeholder="Color"
              />
              {errors.color && (
                <p className="error-message">{errors.color.message}</p>
              )}
            </li>
            <li key="wheelSize">
              <input
                className="admin-form__input"
                type="number"
                {...register('wheelSize', {
                  required: IS_REQUIRED,
                  valueAsNumber: true,
                  min: {
                    value: MIN_WHEEL_SIZE_VALUE,
                    message: MIN_WHEEL_SIZE,
                  },
                  max: {
                    value: MAX_WHEEL_SIZE_VALUE,
                    message: MAX_WHEEL_SIZE,
                  },
                })}
                autoComplete="off"
                placeholder="Wheel size"
              />
              {errors.wheelSize && (
                <p className="error-message">{errors.wheelSize.message}</p>
              )}
            </li>
            <li key="price">
              <input
                className="admin-form__input"
                type="number"
                {...register('price', {
                  required: IS_REQUIRED,
                  valueAsNumber: true,
                })}
                autoComplete="off"
                placeholder="Price"
              />
              {errors.price && (
                <p className="error-message">{errors.price.message}</p>
              )}
            </li>
            <li key="id">
              <input
                className="admin-form__input"
                type="text"
                {...register('id', {
                  required: IS_REQUIRED,
                  minLength: {
                    value: ID_LENGTH_VALUE,
                    message: MIN_ID_LENGTH,
                  },
                  maxLength: {
                    value: ID_LENGTH_VALUE,
                    message: MAX_ID_LENGTH,
                  },
                  validate: value =>
                    !bikesId.find(id => id === value) || SAME_ID,
                })}
                autoComplete="off"
                placeholder="ID (slug): XXXXXXXX"
              />
              {errors.id && (
                <p className="error-message">{errors.id.message}</p>
              )}
            </li>
          </ul>

          <textarea
            className="admin-form__textarea"
            {...register('description', {
              required: IS_REQUIRED,
              minLength: {
                value: MIN_LENGHT_VALUE,
                message: MIN_LENGHT,
              },
            })}
            autoComplete="off"
            placeholder="Description"
          />
          {errors.description && (
            <p className="error-message">{errors.description.message}</p>
          )}
          <div className="button-box">
            <button className="admin-form__button" type="submit">
              SAVE
            </button>
            <button
              className="admin-form__button"
              type="button"
              onClick={resetInput}
            >
              CLEAR
            </button>
          </div>
        </form>
      </div>
      <Statistics />
    </div>
  );
}
