import { useState } from "react";
import classes from "./NewPost.module.css";

const NewPost = ({ onAddPost, onCancel }) => {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  const newPostData = {
    id: Math.random().toString(),
    author: enteredAuthor,
    body: enteredBody,
  };

  const submitHandler = (e) => {
    e.preventDefault();

    onAddPost(newPostData);
    onCancel();
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

      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default NewPost;
