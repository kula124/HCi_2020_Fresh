import React from 'react'
import styles from './style.module.css'

const ImageParagraph = ({image, title, text, reversed }) => (
  <section className={reversed ? `${styles.imageParagraph} ${styles.reverse}` : styles.imageParagraph}>
    <div className={styles.imageHalf}>{image}</div>
    <div className={styles.articleHalf}>
        <article >
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
    </div>
  </section>
  )

export default ImageParagraph