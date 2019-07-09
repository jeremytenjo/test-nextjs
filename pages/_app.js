import App, { Container } from 'next/app'
import Head from '../constants/head'
import Core from '../templates/core'
import '../theme/theme.css'

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
        <Head />
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
