import React from 'react'

import styles from './style.module.css'

const Card = ({children}) => (
  <div className={styles.cardContainer}>
    {children}
  </div>
)

export default Card