import type { NextPage } from 'next'
import { useEffect } from 'react'
import { api } from 'services/api'

const Home: NextPage = () => {


  useEffect(() => {
    (async () => {
      const res = await api.getSpecificCoin({ name: 'bitcoin', currency: 'BRL'})
      console.log(res)
    })()
  }, [])
  return (
    <div>
      a
    </div>
  )
}

export default Home
