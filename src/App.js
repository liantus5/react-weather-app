import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Weather form-control mt-5 p-0">
          <Weather defaultCity="Kazan" />
        </div>
      </div>
    </div>
  );
}

export default App;
