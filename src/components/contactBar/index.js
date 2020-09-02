import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import styles from './style.module.css'

const ContactBar = () => (
    <main className={styles.container}>
        <span>example@email.com</span>
        <FontAwesomeIcon icon={faEnvelope} color="white" />
        <span>+0385911122334</span>
        <FontAwesomeIcon icon={faPhone} color="white"/>
    </main>
)

export default ContactBar