import * as APP from '../constants/app';

const initialState = {
  products: [],
  loadingProducts: false,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case APP.SET_PRODUCTS:
      return { ...state, products: payload.products };
    case APP.FETCHING_PRODUCTS:
      return { ...state, loadingProducts: true };
    case APP.FETCHED_PRODUCTS:
      return { ...state, loadingProducts: false };
    case APP.FETCH_PRODUCT_ERROR:
      // What happens here depends on how you want your app to
      // behave on API failures.
      return state;
    default:
      return state;
  }
}
