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
  const jsonplaceholderResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users/"
  );

  const jsonplaceholderData = await jsonplaceholderResponse.json();

  let jsonplaceholderPosts = [];
  for (const key in jsonplaceholderData) {
    const post = jsonplaceholderData[key];
    jsonplaceholderPosts.push({
      id: key,
      author: post.name,
      body: post.address.street,
    });
  }

  const firebaseResponse = await fetch(
    "https://react-hooks-review-b7200-default-rtdb.firebaseio.com/posts.json"
  );

  const firebaseData = await firebaseResponse.json();

  let firebasePosts = [];
  for (const key in firebaseData) {
    const post = firebaseData[key];
    firebasePosts.push({
      id: key,
      author: post.author,
      body: post.body,
    });
  }

  const allPosts = [...jsonplaceholderPosts, ...firebasePosts];

  return allPosts;
};
