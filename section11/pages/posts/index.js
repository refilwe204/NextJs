import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";

function AllPostPage(props) {
    return <AllPosts posts={props.posts}/>   
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