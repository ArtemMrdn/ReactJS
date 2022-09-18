import "./App.css";
import MyComponent from "./components/MyComponent"; //Размещать более одного компонента в одном файле крайне не рекомендуется
import OtherComponent from "./components/OtherComponent";

function App() {
  return (
    <div className="App">
      <MyComponent />
      <OtherComponent />
      <MyComponent />
    </div>
  );
}

export default App;
