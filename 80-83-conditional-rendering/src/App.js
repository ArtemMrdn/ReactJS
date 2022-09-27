import "./App.css";
import PetInfo from "./components/PetInfo";

function App() {
  return (
    <div className="App">
      {/* В случае если значение для какого-то свойства это true можно написать просто название переменной */}
      <PetInfo animal="dog" age={7} hasPet />
      <PetInfo animal="cat" age="14" hasPet={false} />
    </div>
  );
}

export default App;
