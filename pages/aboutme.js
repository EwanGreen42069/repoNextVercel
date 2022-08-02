import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function AboutMe() {
    return (
        <Layout>
        <Head>
            About Me
        </Head>
    <h1>Learn Soon</h1>
    <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      </Layout>
    );
  }