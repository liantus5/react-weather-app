import "./App.css";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Weather form-control mt-5 p-4 shadow">
          <Weather defaultCity="Kazan" />
          <div class="d-flex justify-content-evenly">
            <WeatherForecast />
            <WeatherForecast />
            <WeatherForecast />
            <WeatherForecast />
            <WeatherForecast />
          </div>
        </div>
      </div>
      <footer class="text-center">
        This project was coded by{" "}
        <a href="https://lianaginiat.com/">Liana Giniatullina</a> and is{" "}
        <a href="https://github.com/liantus5/react-weather-app">
          open-sourced on GitHub
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
