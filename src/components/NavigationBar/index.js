import React from 'react'

import styles from './style.module.css'

const navTabs = ['Home', 'Accommodation', 'Photo Gallery', 'Contact']

const NavigationBar = ({ activeTab }) => (
    <nav className={styles.navigationBar}>
        {navTabs.map(tab => <li className={tab=== activeTab ? styles.active : ''}>
            {tab}</li>
        )}
    </nav>
)

export default NavigationBar
