import { Fragment } from 'react';

import FeaturedPosts from '../components/home-page/featured-post';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/post-util';

function HomePage(props) {
  return (
    <Fragment>
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