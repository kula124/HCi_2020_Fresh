import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import { languages } from "../../constants/const"
import ComboboxItem from "./ComboboxItem"
import styles from "./style.module.css"

const Combobox = () => {
  const [selectedItem, setSelectedItem] = useState(
    languages.find(el => el.name === "eng")
  )
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.combobox} onClick={() => setOpen(!open)}>
      {
        <ul style={{ display: open ? "flex" : "none" }}>
          {languages.map(el => (
            <ComboboxItem
              {...el}
              setSelected={setSelectedItem}
              selected={el.name === selectedItem.name}
            />
          ))}
        </ul>
      }
      <FontAwesomeIcon
        icon={faChevronDown}
        size="0.2x"
        style={{ paddingRight: "12px" }}
      />
      {selectedItem.language}
    </div>
  )
}

export default Combobox
