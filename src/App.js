import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Rome" />
        <footer>
          This project is coded by Kati Zech, open-sourced on GitHub and hosted
          on Netlify.
        </footer>
      </div>
    </div>
  );
}

export default App;
