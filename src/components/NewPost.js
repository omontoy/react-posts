import { useState } from "react";
import classes from "./NewPost.module.css";

const NewPost = (props) => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAdd({ id: Math.random().toString(), author, body });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label htmlFor="body">Text</label>
        <textarea
          type="text"
          name="body"
          id="body"
          value={body}
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
          value={author}
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
