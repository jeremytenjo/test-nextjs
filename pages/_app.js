import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Theme from '../theme/Head/theme.head'
import Core from '../templates/core'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps)
      pageProps = await Component.getInitialProps(ctx)
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <Theme />
        <Container>
          <Core>
            <Component {...pageProps} />
          </Core>
        </Container>
      </>
    )
  }
}

export default MyApp
