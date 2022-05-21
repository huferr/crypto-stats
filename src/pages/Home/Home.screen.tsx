import { Card } from 'components'
import type { NextPage } from 'next'
import { ChangeEvent, useEffect, useState } from 'react'
import { api } from 'services/api'
import { GetCoinsTypes } from 'typings/api'
import styles from './Home.module.css'

const Home: NextPage = () => {
  const [coinsList, setCoinsList] = useState<GetCoinsTypes.Response>();
  const [currency, setCurrency] = useState('BRL');

  useEffect(() => {
    (async () => {
      const _data = await api.getCoins({ currency: currency })
      setCoinsList(_data)
    })()
  }, [currency])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> &#128184; Crypto Stats &#128200;</h1>
      <p className={styles.subtitle}>Get good infos about your cryptocurrencies here!</p>

      <p className={styles.subtitle} style={{ display: 'flex', alignItems: 'center'}}>Base currency:
      <select className={styles.select} onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrency(e.target.value)}>
        <option value='BRL'>BRL</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
      </select>
      </p>

      <div className={styles.list}>
        {coinsList?.coins?.map((c, index) => (
          <Card key={index} icon={c.icon} price={c.price} name={c.name} currency={currency} symbol={c.symbol}/>
        ))}
      </div>
    </div>
  )
}

export default Home
