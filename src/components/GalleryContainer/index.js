import React from 'react'

import ImagePool from '../ImagePool'

import styles from './style.module.css'

const GalleryContainer = ({title}) => (
    <section className={styles.galleryContainer}>
        <h1>{title}</h1>
        <ImagePool />
    </section>
)

export default GalleryContainer