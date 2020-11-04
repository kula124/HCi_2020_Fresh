import React from "react"

import styles from "./style.module.css"

const ComboboxItem = ({ language, name, flag }) => (
  <div key={name} className={styles.comboboxItem}>
    <span>{language}</span>
    <img src={flag} alt={name} />
  </div>
)

export default ComboboxItem
