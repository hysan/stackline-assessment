import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from './App.module.css';

import Header from './components/Header';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Sales from './pages/Sales';

import { getProducts } from './actions/app';

class App extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { loadingProducts } = this.props;

    return (
      <div className={styles.app}>
        <Header />
        {/* Nothing fancy for now as there is no spec for anything but the Sales page */}
        {loadingProducts ? (
          <p>Loading...</p>
        ) : (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/product/:productId" component={Overview} />
            <Route exact path="/product/:productId/sales" component={Sales} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loadingProducts: state.app.loadingProducts,
});

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
