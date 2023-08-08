import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <div className="App">
      <Column state="To Do" />
      <Column state="In Progress" />
      <Column state="Done" />
    </div>
  );
}

export default App;
