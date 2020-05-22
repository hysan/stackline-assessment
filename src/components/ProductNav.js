import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductNav.module.css';

function ProductNav(props) {
  const { productId } = props.match.params;

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to={`/product/${productId}`}
            exact
            activeClassName={styles.selected}
          >
            <FontAwesomeIcon icon={faHome} />
            OVERVIEW
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/product/${productId}/sales`}
            exact
            activeClassName={styles.selected}
          >
            <FontAwesomeIcon icon={faChartBar} />
            SALES
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default withRouter(ProductNav);
