import "./App.css";
import logo from "./logo.svg";

function App() {
  function checkChange() {}

  return (
    <div className="App">
      <header className="App-header">
        <div className="head__div">
          <h1>Cash Register Manager</h1>
          <img className="App-logo" src={logo} alt="" />
        </div>
        <p>
          Enter the bill amount and cash given by the customer and know minimum
          number of notes to return.
        </p>
      </header>
      <main className="main">
        <div className="main__div">
          <p>Bill Amount: </p>
          <input />
          <p>Cash Given: </p>
          <input />
          <br />
          <br />
          <button>Check</button>
        </div>
      </main>
    </div>
  );
}

export default App;
