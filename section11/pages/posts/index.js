import Head from 'next/head';
import { Fragment } from 'react';

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";

function AllPostPage(props) {
    return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" 
        content=" A list of all programming tutorials and posts" 
        />
      </Head>
      <AllPosts posts={props.posts}/> 
      </Fragment> 
    );
}

export function getStaticProps() {
  const AllPosts = getAllPosts();

  return {
    props: {
      posts: AllPosts
    }
  };
}

export default AllPostPage;