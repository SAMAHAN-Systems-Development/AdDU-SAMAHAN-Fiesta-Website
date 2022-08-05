import Head from 'next/head'
import TicketsPage from '../src/components/TicketsPage/TicketsPage.jsx'
import React from 'react'

const TicketsLandingPage = () => {
  return (
    <div>
    <Head>
      <title>Get Tickets</title>
      <meta name="description" content="Tickets Page"/>
      <link rel="icon" href="/assets/favicon.ico" />
    </Head>

    <TicketsPage />
  </div>
  )
}

export default TicketsLandingPage