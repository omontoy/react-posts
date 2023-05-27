import { useEffect, useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./Posts.module.css";

const Posts = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const addPostHandler = (newPost) => {
    fetch(
      "https://react-hooks-review-b7200-default-rtdb.firebaseio.com/posts.json",
      {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setPosts((prevState) => [...prevState, newPost]);
  };

  useEffect(() => {
    const getPosts = async () => {
      setIsFetching(true);
      const response = await fetch(
        "https://react-hooks-review-b7200-default-rtdb.firebaseio.com/posts.json",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      let loadedPosts = [];
      for (const key in data) {
        const post = data[key];
        loadedPosts.push({
          id: key,
          author: post.author,
          body: post.body,
        });
      }

      setPosts(loadedPosts);
      setIsFetching(false);
    };

    getPosts();
  }, []);

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onAddPost={addPostHandler} onCancel={onStopPosting} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center" }}>
          <h2>Loading Posts ...</h2>
        </div>
      )}
    </>
  );
};

export default Posts;
