import * as PRODUCT from '../constants/product';

const initialState = {
  product: null,
  sales: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT.SET_PRODUCT:
      return { ...state, product: payload.product };
    case PRODUCT.SET_PRODUCT_SALES:
      return { ...state, products: payload.products };
    default:
      return state;
  }
}
