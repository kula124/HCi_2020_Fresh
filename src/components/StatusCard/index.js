import React from 'react'

import styles from './style.module.css'
import Card from '../Card'

const StatusCard = () => (
  <Card>
    <div className={styles.content}>
      <figure className={styles.topFigure}>
        <img src="https://github.com/kula124/PublicFilesRepo/blob/master/001-clouds.png?raw=true" alt="clouds" />
        <figcaption>
          18°C
        </figcaption>
      </figure>
      <div className={styles.line} />
      <section className={styles.predictionContainer}>
        <figure className={styles.predictionFigure}>
          <figcaption>
            Sutra
          </figcaption>
          <img src="https://github.com/kula124/PublicFilesRepo/blob/master/rain.png?raw=true" alt="rain"/>
          <figcaption>
            21°C
          </figcaption>
        </figure>
        <figure className={styles.predictionFigure}>
          <figcaption>
            Prekosutra
          </figcaption>
          <img src="https://github.com/kula124/PublicFilesRepo/blob/master/002-sun.png?raw=true" alt="sun" />
          <figcaption>
            25°C
          </figcaption>
        </figure>
      </section>
    </div>
  </Card>
)

export default StatusCard