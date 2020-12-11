import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import styles from './style.module.css'

const Header = () => (
  <header className={styles.container}>
    <section className={styles.logo}>
      <img src="https://github.com/kula124/PublicFilesRepo/blob/master/logo-no-text.png?raw=true"
      alt="Logo" />
      <span>Aqitify</span>
    </section>
    <section className={styles.profileIcons}>
      <FontAwesomeIcon icon={faUserCircle} />
      <FontAwesomeIcon icon={faSignOutAlt} />
    </section>
  </header>
  )

export default Header