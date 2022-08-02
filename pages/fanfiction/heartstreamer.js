import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout';

export default function HeartStreamer() {
    return (
        <Layout>
        <Head>
            Heart Streamer
        </Head>
    <h1>Heartstreamer Soon</h1>
    <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      </Layout>
    );
  }