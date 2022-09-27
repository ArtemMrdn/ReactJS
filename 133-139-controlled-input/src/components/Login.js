import { useState } from "react";

function Login() {
  const [data, setData] = useState({ username: "", password: "" }); //Вызываем useState только один раз и все данные пользователи сохраняем в одном обьекте

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
  }

  function handleInputChange(text, name) {
    setData({ ...data, [name]: text.target.value }); // [name] - Динамическое создание названия свойтсва в обьекте
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e, "username")}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
