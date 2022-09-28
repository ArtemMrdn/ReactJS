import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      {/* В любой свой компонент можно передать другие блоки JSX кода, как сделано ниже, тогда React эти блоки JSX кода будет передавать в компонент автоматически, 
      используя специальное свойство children, и в компонентне Wrapper можем в любом месте JSX кода, которое вовзращает этот компонент, вернуть значение свойтсва 
      children(пример в компонентне Wrapper)  */}
      <Wrapper color="lightblue">
        <h2>Text inside on the Wrapper</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Another text</h2>
        <p>Some description</p>
        <input type="text" placeholder="Enter Value" />
      </Wrapper>
    </div>
  );
}

export default App;
