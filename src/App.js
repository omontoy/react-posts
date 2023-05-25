import { useState } from "react";
import Modal from "./components/Modal";
import NewPost from "./components/NewPost";
import Posts from "./components/Posts";

const initialPosts = [
  { id: 1, author: "Ana María", body: "Descripción 1" },
  { id: 2, author: "Maria Camila", body: "Descripción 2" },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [modalIsVisible, setModalIsVisible] = useState(true);

  const addPostHandler = (newPost) => {
    setPosts((prevState) => [...prevState, newPost]);
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <main>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost onAddPost={addPostHandler} />
        </Modal>
      )}

      <Posts posts={posts} />
    </main>
  );
}

export default App;
