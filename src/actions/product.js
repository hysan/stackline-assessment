/* eslint import/prefer-default-export: 0 */
import * as PRODUCT from '../constants/product';
import ProductAdapter from '../stubs/ProductAdapter';

// Notice how you can potentially have much of the same logic
// for error handling and retries.
// This could be abstracted into the ProductAdapter.
export const getProduct = (productId) => (dispatch) => {
  dispatch({
    type: PRODUCT.FETCHING_PRODUCT,
  });
  ProductAdapter.getProduct(productId)
    .then((res) => {
      if (!res.ok) {
        // faking api calls, so simplifying what would be done here
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((product) => {
      dispatch({
        type: PRODUCT.SET_PRODUCT,
        payload: { product },
      });
      dispatch({ type: PRODUCT.FETCHED_PRODUCT });
    })
    .catch((err) => {
      // Depending on your requirements, you can retry with back off, not retry,
      // display an error message, etc.
      dispatch({
        type: PRODUCT.FETCH_PRODUCT_ERROR,
        payload: new Error(err),
        error: true,
      });
      dispatch({ type: PRODUCT.FETCHED_PRODUCT });
    });
};

export const getProductSales = (productId) => (dispatch) => {
  dispatch({
    type: PRODUCT.FETCHING_PRODUCT_SALES,
  });
  ProductAdapter.getProductSales(productId)
    .then((res) => {
      if (!res.ok) {
        // faking api calls, so simplifying what would be done here
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((sales) => {
      dispatch({
        type: PRODUCT.SET_PRODUCT_SALES,
        payload: { sales },
      });
      dispatch({ type: PRODUCT.FETCHED_PRODUCT_SALES });
    })
    .catch((err) => {
      // Depending on your requirements, you can retry with back off, not retry,
      // display an error message, etc.
      dispatch({
        type: PRODUCT.FETCH_PRODUCT_SALES_ERROR,
        payload: new Error(err),
        error: true,
      });
      dispatch({ type: PRODUCT.FETCHED_PRODUCT_SALES });
    });
};
