import { CityName, NameSpace, SortingType } from '../../../const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const DEFAULT_SELECTED_CITY = CityName.Paris;
const DEFAULT_SELECTED_SORTING = SortingType.Popular;

type GlobalState = {
  selectedCity: CityName;
  selectedSortType: SortingType;
  error: string | null;
};

const initialState: GlobalState = {
  selectedCity: DEFAULT_SELECTED_CITY,
  selectedSortType: DEFAULT_SELECTED_SORTING,
  error: null
};

export const globalState = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityName>) => {
      state.selectedCity = action.payload;
    },
    changeSortingType: (state, action: PayloadAction<SortingType>) => {
      state.selectedSortType = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  },
});

export const { changeCity, changeSortingType, setError } = globalState.actions;
