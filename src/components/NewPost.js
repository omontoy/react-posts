import { useState } from "react";
import classes from "./NewPost.module.css";

const NewPost = (props) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddPost({
      id: Math.random().toString(),
      enteredAuthor,
      enteredBody,
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label htmlFor="body">Text</label>
        <textarea
          type="text"
          name="body"
          id="body"
          value={enteredBody}
          onChange={bodyChangeHandler}
          rows={3}
          required
        />
      </div>

      <div>
        <label htmlFor="author">Your Name</label>
        <input
          type="text"
          name="author"
          id="author"
          value={enteredAuthor}
          onChange={authorChangeHandler}
          required
        />
      </div>

      <div>
        <button className={classes.actions}>New Post</button>
      </div>
    </form>
  );
};

export default NewPost;
