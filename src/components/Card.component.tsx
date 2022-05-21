/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from './Card.module.css'

interface CardProps {
  icon: string,
  name: string,
  price: number,
  currency: string,
  symbol: string
}

export const Card = (props: CardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <p className={styles.text}><strong>Currency:</strong> {props.name}</p>
      <p className={styles.text}><strong>Price:</strong> {Math.floor(props.price)} {props.currency}</p>
      <p className={styles.text}><strong>Symbol:</strong> {props.symbol}</p>

      </div>
      <img className={styles.icon} src={props.icon || ''} alt='currency icon' />
    </div>
  )
}