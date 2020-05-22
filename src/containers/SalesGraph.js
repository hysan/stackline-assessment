import React from 'react';
import { connect } from 'react-redux';
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line } from 'recharts';

import styles from './SalesGraph.module.css';

/**
 * Using something like moment would be a bit heavy
 * for what is currently a one off thing.
 *
 * Takes date in YYYY-MM-DD format and returns the integer month value
 * offset to start at a 0 index.
 * e.g., January == 0, February == 1, ..., December == 11
 * @param {string} dateString
 * @returns {number}
 */
function parseMonth(dateString) {
  const month = dateString.split('-')[1];
  return Number.parseInt(month, 10) - 1;
}

const ABBREVIATED_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// The mock tables this as "Retail Sales" which is one property of
// the given sales data, but there are two lines in the wireframe.
// I'm unsure what it is, but it's likely wholesaleSales or retailerMargin.
function SalesGraph(props) {
  /* eslint-disable no-param-reassign */
  const data = props.sales
    .reduce(
      (monthlySales, sale) => {
        const {
          weekEnding,
          retailSales,
          retailerMargin,
          wholesaleSales,
          unitsSold,
        } = sale;
        const month = parseMonth(weekEnding);

        monthlySales[month].retailSales += retailSales;
        monthlySales[month].retailerMargin += retailerMargin;
        monthlySales[month].wholesaleSales += wholesaleSales;
        monthlySales[month].unitsSold += unitsSold;

        return monthlySales;
      },
      new Array(12).fill().map(() => ({
        retailSales: 0,
        retailerMargin: 0,
        wholesaleSales: 0,
        unitsSold: 0,
      })),
    )
    .map((monthSummary, i) => ({
      month: ABBREVIATED_MONTHS[i].substring(0, 3).toUpperCase(),
      ...monthSummary,
    }));
  /* eslint-enable no-param-reassign */

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Retail Sales</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis
            dataKey="month"
            interval="preserveStartEnd"
            padding={{ left: 30, right: 30 }}
            tickLine={false}
            tickMargin={10}
            stroke="#9eabbc"
          />
          <YAxis hide />
          <Line
            type="monotone"
            dataKey="retailSales"
            stroke="#9acffa"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="retailerMargin"
            stroke="#98a4bd"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="wholesaleSales"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  sales: state.product.sales,
  loadingSales: state.product.loadingSales,
});

export default connect(mapStateToProps)(SalesGraph);
