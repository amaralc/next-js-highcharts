import React from 'react'
import Head from 'next/head'
// import Logo from '../assets/logoCircle100.svg'
import { Container } from '../styles/pages/Home'
import TimeSeries from '../components/time-series'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Time Series</title>
      </Head>

      <main>
        <h1>Stock Prices</h1>
        <TimeSeries />
      </main>
    </Container>
  )
}

export default Home
