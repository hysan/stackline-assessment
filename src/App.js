import React from 'react';
import logo from './assets/svg/logo.svg';
import styles from './App.module.css';
import ProductAdapter from './stubs/ProductAdapter';

function App() {
  ProductAdapter.getProducts()
    .then((res) => res.json())
    .then(console.log);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
