import { useState } from "react";
import MainHeader from "./components/MainHeader";
import Posts from "./components/Posts";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <Posts isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
