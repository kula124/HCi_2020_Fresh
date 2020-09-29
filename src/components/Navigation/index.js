import React from 'react'

import NavigationBar from '../NavigationBar'
import Combobox from '../Combobox'
import styles from './style.module.css'

const Navigation = ({ activeTab }) => (
    <section className={styles.navigation}>
        <NavigationBar activeTab={activeTab} />
        <Combobox />
    </section>
)

export default Navigation