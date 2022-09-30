import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import "./App.css";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  console.log(post);

  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
