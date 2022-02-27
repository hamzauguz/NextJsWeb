import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <h3>blog page</h3>

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
