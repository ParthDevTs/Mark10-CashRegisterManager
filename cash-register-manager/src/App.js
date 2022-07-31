import "./App.css";
import logo from "./logo.svg";
import { useState } from "react";

function App() {
  var [cashPaid, setCashPaid] = useState(0);
  var [billAmount, setBillAmount] = useState(0);
  var [outputStatement, setOutputStatement] = useState("");

  function checkChange() {
    var cashremaining = cashPaid - billAmount;
    if (cashremaining < 0) {
      setOutputStatement("You can wash Dishes to pay the rest");
    }
  }

  function billamount(event) {
    var value = event.target.value;
    setBillAmount(value);
  }
  function cashGiven(event) {
    var value = event.target.value;
    setCashPaid(value);
  }

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
          <input type="number" className="bill-amt" onChange={billamount} />
          <p>Cash Given: </p>
          <input type="number" className="cash-given" onChange={cashGiven} />
          <br />
          <br />
          <button onClick={checkChange}>Check</button>
          <p className="output-statement">{outputStatement}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
