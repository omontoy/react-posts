import Post from "./Post";
import classes from "./Posts.module.css";

const Posts = ({ posts }) => {
  return (
    <ul className={classes.posts}>
      {posts.map((post) => (
        <div key={post.id}>
          <Post author={post.author} body={post.body} />
        </div>
      ))}
    </ul>
  );
};

export default Posts;
