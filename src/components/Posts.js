import Post from "./Post";
import classes from "./Posts.module.css";

const Posts = (props) => {
  return (
    <ul className={classes.posts}>
      {props.posts.map((post) => (
        <div key={post.id}>
          <Post author={post.author} body={post.body} />
        </div>
      ))}
    </ul>
  );
};

export default Posts;
