import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import List from "./Components/List";
import SearchForm from "./Components/Search";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = tasks.filter((task) =>
        task.toLowerCase().startsWith(searchTerm.toLowerCase())
      );

      if (filtered.length > 0) {
        setResults(filtered);
      } else {
        setResults(["No results found"]);
      }
    } else {
      setResults(tasks);
    }
  }, [searchTerm, tasks]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Form tasks={tasks} setTasks={setTasks} />
      <List tasks={results} />
    </div>
  );
}

export default App;
