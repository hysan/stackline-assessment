import { combineReducers } from 'redux';

import app from './app';
import product from './product';

export default combineReducers({
  app,
  product,
});
