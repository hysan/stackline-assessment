import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import styles from './Sales.module.css';

import ProductCard from '../components/ProductCard';
import Tags from '../components/Tags';
import ProductNav from '../components/ProductNav';
import SalesGraph from '../containers/SalesGraph';
import SalesTable from '../containers/SalesTable';

import {
  getProduct,
  getProductSales,
  getProductTags,
} from '../actions/product';

class Sales extends Component {
  componentDidMount() {
    const {
      getProduct,
      getProductSales,
      getProductTags,
      productId,
    } = this.props;

    if (productId) {
      getProduct(productId);
      getProductSales(productId);
      getProductTags(productId);
    }

    // If the productId from the path is invalid or non-existant,
    // you will likely want to fire off a different action.
  }

  render() {
    const { product, tags } = this.props;

    return (
      <div className={styles.container}>
        <div className={classnames(styles.leftPane, styles.widgetContainer)}>
          <ProductCard product={product} />
          <hr className={styles.divider} />
          <Tags tags={tags} />
          <hr className={styles.divider} />
          <ProductNav />
        </div>
        <div className={styles.rightPane}>
          <div className={styles.widgetContainer}>
            <SalesGraph />
          </div>
          <div
            className={classnames(styles.widgetContainer, styles.topSpacing)}
          >
            <SalesTable />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { product, sales, tags } = state.product;
  const { productId } = props.match.params;

  return {
    product,
    sales,
    tags,
    productId,
  };
};

const mapDispatchToProps = {
  getProduct,
  getProductSales,
  getProductTags,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
