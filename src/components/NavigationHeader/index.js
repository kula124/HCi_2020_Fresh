import React from 'react'

import Logo from '../Logo'
import Navigation from '../Navigation'

import styles from './style.module.css'

const NavigationHeader = () => (
    <section className={styles.navigationHeader}>
        <Logo />
        <Navigation />
    </section>
)

export default NavigationHeader