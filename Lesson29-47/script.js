const App = () => {
  //Функциональный компонент
  const [buttonText, setButtonText] = React.useState("Click me"); //Метод возвращает массив из двух элементов, первый это значение для определенной переменной,
  const [classesList, setClassesList] =
    React.useState(
      ""
    ); /*причем начальное значение мы передаем в вызове метода useState, а второе это функция, 
    которая вызвана тогда когда мы хотим поменять значение соответствующей переменной*/

  const onButtonClick = () => {
    setButtonText("Hello from React");
    setClassesList("green-btn");
  };

  return (
    // причина по которой мы используем className а не просто Class, потому что мы работаем с JS, а не DOM API, как это делается в Vanilla JS.
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const helloWorldHEading = <h1>Hello from React</h1>;
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
