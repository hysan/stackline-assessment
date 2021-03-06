import * as PRODUCT from '../constants/product';

const initialState = {
  product: {},
  sales: [],
  tags: [],
  loadingProduct: false,
  loadingSales: false,
  loadingTags: false,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT.SET_PRODUCT:
      return { ...state, product: payload.product };
    case PRODUCT.FETCHING_PRODUCT:
      return { ...state, loadingProduct: true };
    case PRODUCT.FETCHED_PRODUCT:
      return { ...state, loadingProduct: false };
    case PRODUCT.FETCH_PRODUCT_ERROR:
      return state;
    case PRODUCT.SET_PRODUCT_SALES:
      return { ...state, sales: payload.sales };
    case PRODUCT.FETCHING_PRODUCT_SALES:
      return { ...state, loadingSales: true };
    case PRODUCT.FETCHED_PRODUCT_SALES:
      return { ...state, loadingSales: false };
    case PRODUCT.FETCH_PRODUCT_SALES_ERROR:
      return state;
    case PRODUCT.SET_PRODUCT_TAGS:
      return { ...state, tags: payload.tags };
    case PRODUCT.FETCHING_PRODUCT_TAGS:
      return { ...state, loadingTags: true };
    case PRODUCT.FETCHED_PRODUCT_TAGS:
      return { ...state, loadingTags: false };
    case PRODUCT.FETCH_PRODUCT_TAGS_ERROR:
      return state;
    default:
      return state;
  }
}
