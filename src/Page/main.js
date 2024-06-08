import {useState} from 'react';
import './main.css';

function Main() {

  const [value, setValue] = useState(0)
  const [previousNum, setPreiousNum] = useState(0)
  const [operator, setOperator] = useState('')

  function inputNum(e) {
    const input = e.target.value;
    if (value === 0) {
      setValue(input)
    }
    else {
      setValue(value + input)
    }
  }

  function deleteLast() {
    const newValue = value.toString()

    setValue(newValue.slice(0, newValue.length - 1))
  }

  function operatorHandler(e) {
    const operatorInput = e.target.value;
    setOperator(operatorInput);
    setPreiousNum(value);
    setValue(0);
  }

  function percentage() {
    setValue(value / 100);
  }

  function calculate() {
    if (operator === "/") {
      setValue(parseFloat(previousNum) / parseFloat(value));
    } else if (operator === "x") {
      setValue(parseFloat(previousNum) * parseFloat(value));
    } else if (operator === "-") {
      setValue(parseFloat(previousNum) - parseFloat(value));
    } else if (operator === "+") {
      setValue(parseFloat(previousNum) + parseFloat(value));
    }
  }
  return (
    <div className="container">

      <div className="calculator">
        <div className="display">
          <input type="text" value={value} />
        </div>
        <div>
          <button onClick={e => setValue('')} value='C'>C</button>
          <button onClick={percentage}>%</button>
          <button onClick={deleteLast}>Del</button>
          <button onClick={operatorHandler} value='/'>/</button>
        </div>
        <div>

          <button onClick={inputNum} value={7}>7</button>
          <button onClick={inputNum} value={8}>8</button>
          <button onClick={inputNum} value={9}>9</button>
          <button onClick={operatorHandler} value='x'>x</button>
        </div>
        <div>
          <button onClick={inputNum} value={4}>4</button>
          <button onClick={inputNum} value={5}>5</button>
          <button onClick={inputNum} value={6}>6</button>
          <button onClick={operatorHandler} value='-'>-</button>
        </div>
        <div>
          <button onClick={inputNum} value={1}>1</button>
          <button onClick={inputNum} value={2}>2</button>
          <button onClick={inputNum} value={3}>3</button>
          <button onClick={operatorHandler} value='+'>+</button>
        </div>
        <div>
          <button onClick={e => setValue(3.14159265358979)} value='Pi'>Pi</button>
          <button onClick={inputNum} value={0}>0</button>
          <button onClick={inputNum} value='.'>.</button>
          <button onClick={calculate} value='='>=</button>
        </div>
      </div>

    </div >
  );
}

export default Main;
