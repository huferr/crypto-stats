import '../styles/globals.css'
import '../typings/index.d.ts'
import '../methods/String.ts'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
