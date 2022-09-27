import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";

const texts = ["Click me", "Click me please", "hit me", "press me"];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return <Button onClick={incrementCount} text={text} key={index} />;
      })}
      {/* Функция будет вызвана столько раз сколько элементов в массиве text */}
    </div>
  );
}

export default App;
