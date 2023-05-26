import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./Posts.module.css";

const initialPosts = [
  { id: 1, author: "Ana María", body: "Descripción 1" },
  { id: 2, author: "Maria Camila", body: "Descripción 2" },
];

const Posts = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState(initialPosts);

  const addPostHandler = (newPost) => {
    setPosts((prevState) => [...prevState, newPost]);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onAddPost={addPostHandler} onCancel={onStopPosting} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default Posts;
