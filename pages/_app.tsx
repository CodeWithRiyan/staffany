import '../styles/index.css'
import '../styles/modal.css'
import '../styles/chart.css'
import '../styles/button.css'
import '../styles/form.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
  }