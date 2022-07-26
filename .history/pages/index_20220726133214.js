import Head from 'next/head'
import { LandingPage } from '../src/components/ComponentIndex'
import Navbar from './Navbar.jsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>SAMAHAN Fiesta</title>
        <meta name="description" content="SAMAHAN Fiesta Website" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <Navbar />
      <main>
        <LandingPage />
      </main>
    </>
  )
}
