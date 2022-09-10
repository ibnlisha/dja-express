import React from 'react'
import styles from '../styles/Costomer.module.css'
const CostumerWidget = () => {
  return (
    <div className={styles.container}>
        <div className={styles.widget}>Costumer Satisfaction: 99%</div>
        <div className={styles.widget}>Efficiency: 95%</div>
        <div className={styles.widget}>Service quality: 96%</div>
    </div>
  )
}

export default CostumerWidget