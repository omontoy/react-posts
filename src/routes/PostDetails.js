import { useLoaderData, Link } from "react-router-dom";

import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export const loader = async ({ params }) => {
  let jsonplaceholderPost;
  let firebasePost;
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + params.id
    );

    const data = await response.json();

    const loadedPost = {
      id: data.id,
      author: data.name,
      body: data.address.street,
    };

    jsonplaceholderPost = loadedPost;
  } catch (error) {}

  try {
    const response = await fetch(
      `https://react-hooks-review-b7200-default-rtdb.firebaseio.com/posts/${params?.id}.json`
    );
    const data = await response?.json();

    const loadedPost = {
      id: data?.id,
      author: data?.author,
      body: data?.body,
    };

    firebasePost = loadedPost;
  } catch (error) {}

  return jsonplaceholderPost ? jsonplaceholderPost : firebasePost;
};
