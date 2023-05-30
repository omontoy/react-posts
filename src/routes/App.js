import { Outlet } from "react-router-dom";
import Posts from "../components/Posts";

function App() {
  return (
    <>
      <Outlet />
      <main>
        <Posts />
      </main>
    </>
  );
}

export default App;

export const loader = async () => {
  const response = await fetch(
    "https://react-hooks-review-b7200-default-rtdb.firebaseio.com/posts.json"
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

  return loadedPosts;
};
