import * as PRODUCT from '../constants/product';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT.EXAMPLE:
      return state;
    default:
      return state;
  }
}
