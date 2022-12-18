import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@state/store'
import { NextPage } from 'next'
import { FC, ReactNode } from 'react'
import { Roboto } from '@next/font/google'

type NextPageWithLayout = NextPage & {
  layout?: FC
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-roboto'
})
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  let Layout =
    Component.layout ||
    (({ children }: { children: ReactNode }) => <>{children}</>)
  return (
  <Provider store={store}>
    <main className={`${roboto.variable} font-sans`}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
  </Provider>
  )
}
