import PRODUCTS from './B007TIE0GQ';

class ProductAdapter {
  // This "mocks" what you'd expect from fetch, axios, etc.
  // One thing you can do with this adapter is extend it from a base class
  // that handles at least two types of base request:
  // - un-authed
  // - auth required
  // such that you do not have to worry about that implementation detail
  // whenever you want to hit a known API.
  static requestSimulator(result, delay = 1000, body = 'json') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          [body]: () => result,
          ok: true,
          status: 200,
        });
      }, delay);
    });
  }

  // Endpoint for getting product listing.
  static getProducts() {
    return this.requestSimulator(
      this.products.map(({ id, title }) => ({
        id,
        title,
      })),
      100,
    );
  }

  // Endpoint for getting a single product's data.
  static getProduct(productId) {
    const { id, brand, image, retailer, subtitle, title } = this.products.find(
      (product) => product.id === productId,
    );
    return this.requestSimulator(
      {
        id,
        brand,
        image,
        retailer,
        subtitle,
        title,
      },
      100,
    );
  }

  static getSales(productId) {
    return this.requestSimulator(
      this.products.find((product) => product.id === productId).sales,
      100,
    );
  }

  static getTags(productId) {
    this.requestSimulator(
      this.products.find((product) => product.id === productId).tags,
      100,
    );
  }

  static getDetails(productId) {
    return this.requestSimulator(
      this.products.find((product) => product.id === productId).details,
      100,
    );
  }

  static getReviews(productId) {
    return this.requestSimulator(
      this.products.find((product) => product.id === productId).reviews,
      100,
    );
  }
}

ProductAdapter.products = PRODUCTS;

export default ProductAdapter;
