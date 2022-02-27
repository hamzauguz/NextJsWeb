import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <Head>
        <title>About Post</title>
      </Head>
      <h3>post form</h3>
      <Link href="/">Geri dön</Link>
    </div>
  )
}
