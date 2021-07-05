import "./styles.css";
import Board from "react-trello";
import data from "./data.json";

export default function App() {
  return (
    <div className="App">
      <h1>Foundry Pipeline</h1>

      <Board data={data} />
    </div>
  );
}
