import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import styles from './SalesTable.module.css';

/**
 * Using something like moment would be a bit heavy
 * for what is currently a one off thing.
 * It would be nice if you could ask the backend
 * to format it for you.
 *
 * Takes date in YYYY-MM-DD format and returns it in MM-DD-YY format.
 * @param {string} dateString
 * @returns {string}
 */
function formatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  return `${month}-${day}-${year.substring(year.length - 2, year.length)}`;
}

/**
 * https://stackoverflow.com/a/17663871
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
 *
 * Converts the number to currency format.
 * Currently does it for en-US / USD, however, you can change this
 * to have a hashmap of supported locale/currency combinations
 * and take another parameter.
 * @param {number} amount
 * @returns {string}
 */
function formatCurrency(amount) {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

// This is in the containers folder as this will end up being
// stateful as sorting only matters within this component.
// No point in keeping that state in redux unless sorting must be
// persisted when navigating away and back to the page.
function SalesTable(props) {
  const { sales, loadingSales } = props;

  // When rendering tables with potentially large amounts of data,
  // it would be better to use something like react-virtualized
  // combined with possibly streaming the data such that you can
  // load the start of the table very quickly.
  // Given that this table also has sorting though, you will likely
  // need some form of sorting support in your API to do this easily.
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            {'WEEK ENDING '}
            <FontAwesomeIcon icon={faAngleDown} />
          </th>
          <th>
            {'RETAIL SALES '}
            <FontAwesomeIcon icon={faAngleDown} />
          </th>
          <th>
            {'WHOLESALE SALES '}
            <FontAwesomeIcon icon={faAngleDown} />
          </th>
          <th>
            {'UNITS SOLD '}
            <FontAwesomeIcon icon={faAngleDown} />
          </th>
          <th>
            {'RETAILER MARGIN '}
            <FontAwesomeIcon icon={faAngleDown} />
          </th>
        </tr>
      </thead>
      <tbody>
        {loadingSales ? (
          <tr>
            <td colSpan={5}>Loading...</td>
          </tr>
        ) : (
          sales.map(
            ({
              weekEnding,
              retailSales,
              wholesaleSales,
              unitsSold,
              retailerMargin,
            }) => (
              <tr key={weekEnding}>
                <td>{formatDate(weekEnding)}</td>
                <td>{formatCurrency(retailSales)}</td>
                <td>{formatCurrency(wholesaleSales)}</td>
                <td>{unitsSold}</td>
                <td>{formatCurrency(retailerMargin)}</td>
              </tr>
            ),
          )
        )}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  sales: state.product.sales,
  loadingSales: state.product.loadingSales,
});

export default connect(mapStateToProps)(SalesTable);
