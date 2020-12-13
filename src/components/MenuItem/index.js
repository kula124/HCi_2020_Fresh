import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './style.module.css'

const MenuItem = ({icon, title, activeTab}) => (
  <li className={activeTab == title ?
    `${styles.container} ${styles.active}` : styles.container}
  >
      <FontAwesomeIcon icon={icon} />
      <span>{title}</span>
  </li>
  )

export default MenuItem