import React from 'react';
import styles from './Tags.module.css';

function Tags(props) {
  // Tags should have no duplicates and thus be unique,
  // but never trust backend data.
  return (
    <div className={styles.container}>
      {props.tags.map((tag) => (
        <span key={tag} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;
