import React from 'react'

import styles from './style.module.css'

const navTabs = ['Home', 'Accommodation', 'Photo Gallery', 'Contact']

const NavigationBar = () => (
    <nav className={styles.navigationBar}>
        {navTabs.map(tab => <li className={tab === 'Home' ? styles.active : ''}>
            {tab}</li>
        )}
    </nav>
)

export default NavigationBar
