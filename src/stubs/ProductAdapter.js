import uuid from 'uuid';
import PRODUCTS from './B007TIE0GQ';

class ProductAdapter {
  static requestSimulator(result, delay = 1000, body = 'json') {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve({ [body]: () => result });
      }, delay);
    });
  }

  static getProducts() {
    return this.requestSimulator(this.products, 2000);
  }
}

ProductAdapter.products = PRODUCTS;

export default ProductAdapter;
