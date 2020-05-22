import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProducts } from '../actions/app';

class Home extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products, loadingProducts } = this.props;

    return (
      <div>
        <h2>Product Listing</h2>
        {/* Nothing fancy for now as there is no spec for anything but the Sales page */}
        {loadingProducts ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {products.map(({ id, title }) => (
              <li key={id}>
                {title}
                {' | '}
                <Link to={`/product/${id}`}>Overview</Link>
                {' | '}
                <Link to={`/product/${id}/sales`}>Sales</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.app.products,
  loadingProducts: state.app.loadingProducts,
});

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
