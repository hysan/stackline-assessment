import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProduct, getProductSales } from '../actions/product';

class Sales extends Component {
  componentDidMount() {
    const { getProduct, getProductSales, productId } = this.props;

    if (productId) {
      getProduct(productId);
      getProductSales(productId);
    }

    // If the productId from the path is invalid or non-existant,
    // you will likely want to fire off a different action.
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        <div>
          <div>
            <pre>{JSON.stringify(product, undefined, 4)}</pre>
          </div>
          <nav>
            <p>Some navigation</p>
          </nav>
        </div>
        <div>
          <div>
            <p>Graph</p>
          </div>
          <div>
            <p>Table</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { product, sales } = state.product;
  const { productId } = props.match.params;

  return {
    product,
    sales,
    productId,
  };
};

const mapDispatchToProps = {
  getProduct,
  getProductSales,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
