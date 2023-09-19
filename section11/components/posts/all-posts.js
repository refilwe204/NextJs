import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

function AllPosts(props) { // Change 'prop' to 'props'
    return (
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostsGrid posts={props.posts}/> {/* Use 'props.posts' instead of 'prop.posts' */}
        </section>
    );
}

export default AllPosts;
