import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Home from "./components/Home/Home";
import { added, remove } from "./redux/actions/counter";

function App() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state);
  console.log(counter.count);
  return (
    <div>
      <button onClick={() => dispatch(remove(1))}>-</button>
      <span>{counter.count}</span>
      <button onClick={() => dispatch(added(1))}>+</button>
      <Home />
    </div>
  );
}

export default App;
