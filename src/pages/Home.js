import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Home({ products }) {
  return (
    <div>
      <h2>Product Listing</h2>
      <ul>
        {products.map(({ id, title }) => (
          <li key={id}>
            {title} | <Link to={`/product/${id}`}>Overview</Link> |{' '}
            <Link to={`/product/${id}/sales`}>Sales</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.app.products,
});

export default connect(mapStateToProps)(Home);
