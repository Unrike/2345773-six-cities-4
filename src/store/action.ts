import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offer';


export const changeCity = createAction<City>('changeCity');
export const setOffersDataLoadingStatus = createAction<boolean>(
  'setOffersDataLoadingStatus'
);
export const loadOffers = createAction<Offer[]>('loadOffers');
export const setError = createAction<string | null>('setError');
export const setSortType = createAction<string>('setSortType');
export const setSelectedPoint = createAction<{ title: string } | null>(
  'setSelectedPoint'
);
