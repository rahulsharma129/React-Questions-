import React, { useState } from 'react';
import "./styles.css";

function EvenOrOddChecker() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkEvenOdd = () => {
    setResult(null);
    setLoading(true);
    setTimeout(() => {
      const parsed = parseInt(number, 10);
      if (isNaN(parsed)) {
        setResult("Please enter a valid number");
      } else {
        setResult(`The number ${parsed} is ${parsed % 2 == 0 ? "even" : "odd"}.`);
      }
      setLoading(false);
    }, 1000)
  };
  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        className="number-input"
        type="text"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button className="check-button"
      onClick={checkEvenOdd} 
        >Check</button>

      <div className="result-area">
        {loading ? (
        <div className="loading" > Checking..</div>
        ) : result !== null ? (
          <div className="result">{result}</div>
        ): null}
        </div>
    </div>
  );
}

export default EvenOrOddChecker;
