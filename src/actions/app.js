/* eslint import/prefer-default-export: 0 */
import * as APP from '../constants/app';
import ProductAdapter from '../stubs/ProductAdapter';

export const getProducts = () => (dispatch) => {
  dispatch({
    type: APP.FETCHING_PRODUCTS,
  });

  ProductAdapter.getProducts()
    .then((res) => {
      if (!res.ok) {
        // faking api calls, so simplifying what would be done here
        throw new Error(res.status);
      }

      return res.json();
    })
    .then((products) => {
      dispatch({
        type: APP.SET_PRODUCTS,
        payload: { products },
      });
      dispatch({ type: APP.FETCHED_PRODUCTS });
    })
    .catch((err) => {
      // Depending on your requirements, you can retry with back off, not retry,
      // display an error message, etc.
      dispatch({
        type: APP.FETCH_PRODUCT_ERROR,
        payload: new Error(err),
        error: true,
      });
      dispatch({ type: APP.FETCHED_PRODUCTS });
    });
};
