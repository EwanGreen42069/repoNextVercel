import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home className={utilStyles.homeBackground}>
      <Head className={utilStyles.homeBackground}>
        <title> {siteTitle} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <video layout="fill" autoPlay muted loop object-center object-cover className={Layout.video}>         
    <source src="/videos/background.mp4" type="video/mp4"/>       
</video>
      <div className={` ${utilStyles.headingMd} ${utilStyles.homeBackground}`}>
        <p>My name is</p>
        <h1>Greenisher</h1>
        <p>(But call me Ewan)</p>
        <p>and then buttons go here</p>
      
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
      </div>
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
