import Head from 'next/head'
import SysDevPage from '../src/components/SysDevPage/SysDevPage.jsx'
import React from 'react'

const SystemsDevelopmentPage = () => {
  return (
    <div>
      <Head>
        <title>SAMAHAN Systems Development</title>
        <meta name="description" content="SysDev Page"/>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

        <SysDevPage />
    </div>
  )
}

export default SystemsDevelopmentPage