import React from 'react'
import { navs as navTabs } from '../../constants/const'
import styles from './style.module.css'
import { Link } from 'gatsby'

import { myLocalStorage } from '../../helper'

const loggedIn = () => !!myLocalStorage.getItem('loggedIn')

const NavigationBar = ({ activeTab, useThisStyle }) => (
    <nav className={styles[useThisStyle || 'navigationBar']}>
        {navTabs.map(({tab, to}) => (
          <Link to={to} >
              <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
          </Link>)
        )}
        <Link to={'/login'}>
            <li onClick={loggedIn() ? () => myLocalStorage.removeItem('loggedIn') : () => {}}>
                {loggedIn() ? 'Logout' : 'Login'}
            </li>
        </Link>
        {loggedIn() && <Link to={'/profile'}>
            <li>
                Profile
            </li>
        </Link>}
    </nav>
)

export default NavigationBar
