// @ts-nocheck
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import settings from "./config";

function App() {
  console.log("WHICH_ENV:!!!! ", settings.WHICH_ENV);
  console.log("API_BASE:!!!! ", settings.BASE_API_URL);

  const [todos, setTodos] = useState([]);
  const [version, setVersion] = useState("");

  useEffect(() => {
    const getTodos = async () => {
      const response = await axios.get(settings.BASE_API_URL);
      setTodos(response.data.tasks);
      setVersion(response.data.version);
    };

    getTodos();
  }, []);

  return (
    <div>
      <p>Todos</p>
      <p>Api Version: {version} </p>
      {todos.map((t) => (
        <li key={t._id}>{t.task}</li>
      ))}
    </div>
  );
}

export default App;
