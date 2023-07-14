import Head from 'next/head'
import React from 'react'

const MetaData = ({title}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta property='og:title' content='Todo App content' key='title'/>
        </Head>
    </>
  )
}

export default MetaData