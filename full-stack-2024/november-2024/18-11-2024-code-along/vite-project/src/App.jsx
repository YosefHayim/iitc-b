import { useState } from "react";
import Card from "./components/Wrapper/Wrapper";
import Modal from "./components/Modal/Modal";
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  const [isOpen, setOpen] = useState(true);

  return (
    <div>
      <Card>
        <h2>Title</h2>
        <p>This is some content inside the card.</p>
      </Card>
      {isOpen ? (
        <Modal isOpen={true}>
          <h2>Modal Title</h2>
          <p>This is the modal content.</p>
        </Modal>
      ) : (
        <h1>This is empty</h1>
      )}
      <Layout>
        <h1>Page Title</h1>
        <p>This is the main content of the page.</p>
      </Layout>
    </div>
  );
}

export default App;
