import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@state/store'
import { NextPage } from 'next'
import { FC, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  layout?: FC
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  let Layout =
    Component.layout ||
    (({ children }: { children: ReactNode }) => <>{children}</>)
  return (
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
  )
}
