import React from 'react'

import styles from './style.module.css'

const SeparatorBar = ({text}) => (
    <section className={styles.separator}>
        <div className={styles.horizontalLine} />
        <h2>{text}</h2>
        <div className={styles.horizontalLine} />
    </section>
)

export default SeparatorBar