import React from 'react'
import { faHome, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

import MenuItem from '../MenuItem'

import styles from './style.module.css'

const SideBar = () => (
  <nav className={styles.container}>
    <MenuItem icon={faHome} title='Početna' />
    <MenuItem icon={faTachometerAlt} title='Uređaji' />
  </nav>
  )

export default SideBar
