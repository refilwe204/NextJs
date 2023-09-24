import Head from 'next/head';
import { Fragment } from 'react';

import FeaturedPosts from '../components/home-page/featured-post';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/post-util';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Refilwe's blog</title>
        <meta
        name='description'
        content='I blog about programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const FeaturedPosts = getFeaturedPosts();

  return{
    props: {
      posts: FeaturedPosts
    }
  }

}
export default HomePage;