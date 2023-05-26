import { useState } from "react";
import classes from "./NewPost.module.css";

const NewPost = ({ onAddPost }) => {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredBody, setBody] = useState("");

  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onAddPost({
      id: Math.random().toString(),
      author: enteredAuthor,
      body: enteredBody,
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label htmlFor="enteredAuthor">Your Name</label>
        <textarea
          type="text"
          name="enteredAuthor"
          id="enteredAuthor"
          value={enteredAuthor}
          onChange={authorChangeHandler}
          required
        />
      </div>

      <div>
        <label htmlFor="enteredBody">Text</label>
        <textarea
          type="text"
          name="enteredBody"
          id="enteredBody"
          value={enteredBody}
          onChange={bodyChangeHandler}
          rows={3}
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
