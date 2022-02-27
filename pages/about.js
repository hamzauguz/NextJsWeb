import Link from 'next/link'
import Head from 'next/head'

import Image from 'next/image'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Post</title>

        <link rel="icon" href="/image/car.jpg" />
      </Head>
      <h3>About Page</h3>

      <Link href="/">Geri dön</Link>
      <style jsx>{`
        h3 {
          font-weight: 500;
          font-size: 20px;
          color: orange;
        }
      `}</style>
    </Layout>
  )
}
