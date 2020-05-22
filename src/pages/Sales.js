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
  }

  render() {
    return <div></div>;
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
