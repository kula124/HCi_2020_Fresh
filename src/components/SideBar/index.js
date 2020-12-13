import React from 'react'
import { faHome, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

import MenuItem from '../MenuItem'

import styles from './style.module.css'

const SideBar = ({activeTab}) => (
  <nav className={styles.container}>
    <MenuItem icon={faHome} activeTab={activeTab} title='Početna' />
    <MenuItem icon={faTachometerAlt} activeTab={activeTab} title='Uređaji' />
  </nav>
  )

export default SideBar
