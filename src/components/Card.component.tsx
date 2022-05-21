/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from './Card.module.css'

interface CardProps {
  icon: string,
  name: string,
  price: number,
  currency: string,
  symbol: string,
  url: string
}

export const Card = (props: CardProps) => {
  return (
    <a className={styles.container} href={props.url || ''} target='_blank' rel="noreferrer">
      <div className={styles.content}>
      <p className={styles.text}><strong>Currency:</strong> {props.name}</p>
      <p className={styles.text}><strong>Price:</strong> {(props.price).toFixed(3)} {props.currency}</p>
      <p className={styles.text}><strong>Symbol:</strong> {props.symbol}</p>
      <p className={styles.link}>Click to visit the offical website</p>
      </div>
      <img className={styles.icon} src={props.icon || ''} alt='currency icon' />
    </a>
  )
}