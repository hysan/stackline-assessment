import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from './App.module.css';

import Header from './components/Header';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Sales from './pages/Sales';

function App() {
  return (
    <div className={styles.app}>
      <Header />
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
    </div>
  );
}

export default App;
