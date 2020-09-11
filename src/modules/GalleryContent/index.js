import React from 'react'

import styles from './style.module.css'
import GalleryContainer from '../../components/GalleryContainer'

const GalleryContinent = () => (
    <main className={styles.galleryContent}>
        <GalleryContainer title="Amazing exterior" />
        <GalleryContainer title="Relaxing sauna" />
        <GalleryContainer title="Modern interior" />
    </main>
)

export default GalleryContinent