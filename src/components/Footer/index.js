import React from 'react'
import styles from './style.module.css'

import NavigationBar from '../NavigationBar'

const Footer = () => (
  <footer className={styles.footer}>
      <ul className={styles.address}>
          <li className={styles.title}>
              VILA OLIVA VERDE
          </li>
          <li>Štrped 24</li>
          <li>521000 Vinkuran</li>
          <li className={styles.phone}>
              +385 99 11223344
          </li>
          <li>example@email.com</li>
      </ul>
      <NavigationBar useThisStyle='footer'/>
  </footer>
)

export default Footer