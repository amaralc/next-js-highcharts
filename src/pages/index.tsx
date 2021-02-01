import React from 'react'
import Head from 'next/head'
import Logo from '../assets/logoCircle100.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <Logo />
        <h1>ReactJS Structure</h1>
        <p>A ReactJS + Next.js structure</p>
      </main>

      <footer>
        <a
          href="https://github.com/amaralc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by ...
        </a>
      </footer>
    </Container>
  )
}

export default Home
