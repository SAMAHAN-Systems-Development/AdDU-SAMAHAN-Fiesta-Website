import Head from 'next/head'
import { LandingPage } from '../src/components/ComponentIndex'
import { Navbar } from '../src/components/ComponentIndex'

export default function Home() {
  return (
    <>
      <Head>
        <title>SADYA 2022: The 74th AdDU Fiesta</title>
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
