import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { Link, Form, redirect } from "react-router-dom";

const NewPost = () => {
  return (
    <Modal>
      <Form method="POST" className={classes.form}>
        <div>
          <label htmlFor="enteredAuthor">Your Name</label>
          <textarea type="text" name="author" id="enteredAuthor" required />
        </div>

        <div>
          <label htmlFor="enteredBody">Text</label>
          <textarea
            type="text"
            name="body"
            id="enteredBody"
            rows={3}
            required
          />
        </div>

        <div className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </div>
      </Form>
    </Modal>
  );
};

export default NewPost;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // { body: '...', author: '...'}
  await fetch(
    "https://react-hooks-review-b7200-default-rtdb.firebaseio.com/posts.json",
    {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return redirect("/");
};
