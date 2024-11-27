import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import Counter from "./components/Counter.jsx";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
