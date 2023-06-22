import React from 'react'
import Facebook from './facebook.svg'
import Instagram from './instagram.svg'
import Twitter from './twitter.svg'
import styles from './rodape.scss'

export default function Rodape() {
  return (
    <div className={styles.rodape}>
        <img src={Facebook} alt="facebook" />
        <img src={Instagram} alt="instagram" />
        <img src={Twitter} alt="twiiter" />
    </div>
  )
}
