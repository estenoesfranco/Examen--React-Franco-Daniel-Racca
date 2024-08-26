import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (number) => {
    setInputValue(prev => prev + number);
  };

  const handleOperationClick = (op) => {
    if (inputValue !== '') {
      setResult(parseFloat(inputValue));
      setOperation(op);
      setInputValue('');
    }
  };

  const handleCalculate = () => {
    const currentValue = parseFloat(inputValue);
    if (result !== null && operation && !isNaN(currentValue)) {
      let newResult;
      switch (operation) {
        case '+':
          newResult = result + currentValue;
          break;
        case '-':
          newResult = result - currentValue;
          break;
        case '*':
          newResult = result * currentValue;
          break;
        default:
          newResult = currentValue;
      }
      setResult(newResult);
      setInputValue(newResult.toString());
      setOperation(null);
    }
  };

  const handleClear = () => {
    setInputValue('');
    setResult(null);
    setOperation(null);
  };

  return (
    <div>
      <h1>Calculadora épica</h1>
      <div class="container">
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => handleOperationClick('+')}>+</button>
        <button onClick={() => handleOperationClick('-')}>-</button>
        <button onClick={() => handleOperationClick('*')}>*</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>C</button>
      </div>
      <div>
        <div>
          {[1, 2, 3].map(number => (
            <button key={number} onClick={() => handleNumberClick(number.toString())}>
              {number}
            </button>
          ))}
        </div>
        <div>
          {[4, 5, 6].map(number => (
            <button key={number} onClick={() => handleNumberClick(number.toString())}>
              {number}
            </button>
          ))}
        </div>
        <div>
          {[7, 8, 9].map(number => (
            <button key={number} onClick={() => handleNumberClick(number.toString())}>
              {number}
            </button>
          ))}
        </div>
      </div>
      </div>
      
      {result !== null && <div>Resultado: {result}</div>}
    </div>
  );
}

export default Calculator;
