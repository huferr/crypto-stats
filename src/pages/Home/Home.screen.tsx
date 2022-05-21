import { Card } from 'components'
import type { NextPage } from 'next'
import { ChangeEvent, useEffect, useState } from 'react'
import { api } from 'services'
import { GetCoinsTypes } from 'typings/api'
import styles from './Home.module.css'

const Home: NextPage = () => {
  const [coinsList, setCoinsList] = useState<GetCoinsTypes.Response>();
  const [currency, setCurrency] = useState('BRL');
  const [search, setSearch] = useState('');

  const _coinsList = coinsList?.coins.filter(c => c.name.formatToSearch(search))

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

      <div className={styles.topbar}>
        <p className={styles.label}>Search:
          <input className={styles.input} type='text' placeholder='Choose a Crypto' value={search} onChange={(e) => setSearch(e.target.value)} />
        </p>
        <p className={styles.label}>Base currency:
          <select className={styles.select} onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrency(e.target.value)}>
            <option value='BRL'>BRL</option>
            <option value='USD'>USD</option>
            <option value='EUR'>EUR</option>
          </select>
        </p>
      </div>

      <div className={styles.list}>
        {_coinsList?.map((c, index) => (
          <Card 
            key={index} 
            icon={c.icon} 
            price={c.price} 
            name={c.name} 
            currency={currency} 
            symbol={c.symbol}
            url={c.websiteUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
