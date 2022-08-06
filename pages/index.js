import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <div class="video-container">
      <video autoPlay muted loop className={Layout.video}>         
    <source src="/videos/background.mp4" type="video/mp4"/>       
</video>
</div>
      <Head>
        <title> {siteTitle} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <section className={utilStyles.headingMd}>
      
        <p>My name is</p>
        <h1>Greenisher</h1>
        <p>(But call me Ewan)</p>
        <p>and then buttons go here</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.homeBackground}`}>
        <h2 className={utilStyles.headingLg}>My Work</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
               <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
