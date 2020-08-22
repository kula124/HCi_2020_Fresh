import React from 'react'

import styles from './style.module.css'

const NavigationBar = () => (
    <nav className={styles.navigationBar}>
        <li className={styles.active}>Home</li>
        <li>Accommodation</li>
        <li>Photo gallery</li>
        <li>Contact</li>
    </nav>
)

export default NavigationBar
