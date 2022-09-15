import "./App.css";
// import logo from "./logo.svg";
import { useState } from "react";
const availableNotes = ["2000", "500", "100", "20", "10", "1"];

function App() {
  var notes = {
    2000: 0,
    500: 0,
    100: 0,
    20: 0,
    10: 0,
    1: 0,
  };

  var [cashPaid, setCashPaid] = useState(0);
  var [billAmount, setBillAmount] = useState(0);
  var [outputStatement, setOutputStatement] = useState("");
  var [numberOfNotes, setNumberOfNotes] = useState(notes);
  const [varDisplay, setvarDisplay] = useState("none");

  function checkChange() {
    if (billAmount <= 0) {
      setOutputStatement("Invalid Bill Amount");
      setNumberOfNotes(notes);
    } else {
      var cashremaining = cashPaid - billAmount;
      if (cashremaining < 0) {
        setOutputStatement("You can wash Dishes to pay the rest");
      } else {
        setOutputStatement("");
        calculateReturn(cashremaining);
        setvarDisplay("unset");
      }
    }
  }

  function calculateReturn(cash) {
    var note__initial = {
      2000: 0,
      500: 0,
      100: 0,
      20: 0,
      10: 0,
      1: 0,
    };
    for (let i = 0; i < availableNotes.length; i++) {
      const numberOfNote = Math.trunc(cash / availableNotes[i]);
      cash %= availableNotes[i];
      note__initial[availableNotes[i]] = numberOfNote;
    }
    setNumberOfNotes(note__initial);
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
          {/* <img className="App-logo" src={logo} alt="" /> */}
          <img className="App-logo" src="/newLogo.svg" alt="" />
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
          <button className="check__button" onClick={checkChange}>
            Check
          </button>
          <p className="output-statement">{outputStatement}</p>
        </div>
        <div className="output__div" style={{ display: varDisplay }}>
          <h3 className="return__heading">Return Change</h3>
          <div className="notes">
            <table className="return__table">
              <thead>
                <tr>
                  <th
                    className="table__header
                  "
                  >
                    2000
                  </th>
                  <th
                    className="table__header
                  "
                  >
                    500
                  </th>
                  <th
                    className="table__header
                  "
                  >
                    100
                  </th>
                  <th
                    className="table__header
                  "
                  >
                    20
                  </th>
                  <th
                    className="table__header
                  "
                  >
                    10
                  </th>
                  <th
                    className="table__header
                  "
                  >
                    1
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table__value">{numberOfNotes[2000]}</td>
                  <td className="table__value">{numberOfNotes[500]}</td>
                  <td className="table__value">{numberOfNotes[100]}</td>
                  <td className="table__value">{numberOfNotes[20]}</td>
                  <td className="table__value">{numberOfNotes[10]}</td>
                  <td className="table__value">{numberOfNotes[1]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
