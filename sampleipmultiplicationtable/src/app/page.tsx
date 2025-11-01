'use client';
import React from 'react';
import styles from './page.module.css';
import './boundary.css';
import Model from '../model';
import { TableComponent } from './boundary';

export default function Home() {
  const [model, setModel] = React.useState(new Model([1, 2, 4, 8]));
  const [redraw, forceRedraw] = React.useState(0);
  
  React.useEffect(() => {
    // What to do when there is a change
  }, [model, redraw]);

  function updateDisplay() {
    forceRedraw(redraw + 1);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Table Of Values</h1>
        <TableComponent model={model} updateDisplay={updateDisplay}/>
      </main>
    </div>
  );
}