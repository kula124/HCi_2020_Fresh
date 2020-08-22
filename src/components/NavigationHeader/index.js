import React from 'react'

import Logo from '../Logo'
import Navigation from '../Navigation'

import styles from './style.module.css'

const NavigationHeader = ({activeTab}) => (
    <section className={styles.navigationHeader}>
        <Logo />
        <Navigation activeTab={activeTab} />
    </section>
)

export default NavigationHeader