import React from 'react'

import styles from './style.module.css'

const GalleryContainer = ({title}) => (
    <section className={styles.galleryContainer}>
        <h1>{title}</h1>
        <div>IMAGES</div>
    </section>
)

export default GalleryContainer