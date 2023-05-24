import { useState } from "react";
import NewPost from "./components/NewPost";
import Posts from "./components/Posts";

const initialPosts = [
  { id: 1, author: "Ana María", body: "Descripción 1" },
  { id: 2, author: "Maria Camila", body: "Descripción 2" },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const addPostHandler = (newPost) => {
    setPosts((prevState) => [...prevState, newPost]);
  };

  return (
    <main>
      <NewPost onAdd={addPostHandler} />
      <Posts posts={posts} />
    </main>
  );
}

export default App;
