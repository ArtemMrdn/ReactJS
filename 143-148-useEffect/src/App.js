import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState(null);

  // Два аргумента, первая функция, вторая масссив зависимостей(указывает когда вызывать эту колбек функцию)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []); // Второй аргумент это массив зависимостей, который передается в вызове useEffect и если он пустой то React выполняет то что указано в этой callback ф-ции только однократно

  console.log("App rendered");
  console.log(todo);

  return <div className="App">{todo && <h1>{todo.title}</h1>}</div>;
  /* При обычной записи если мы попытаемся прочитать свойство todo.title, в тот момент когда todo = null, то мы получим ошибку,
   поэтому есть смысл добавить &&, и показывать с помощью него эту часть JSX кода{<h1>{todo.title}></h1>} только если todo не равняется null */
}

export default App;
