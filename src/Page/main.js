import './main.css';

function Main() {


  return (
    <div className="container">

      <div className="calculator">
        <div className="form">
          <div className="display">
            <input type="text" />
          </div>
          <div>
            <button value='C'>C</button>
            <button >%</button>
            <button>Del</button>
            <button >/</button>
          </div>
          <div>

            <button value={7}>7</button>
            <button value={8}>8</button>
            <button value={9}>9</button>
            <button value='x'>x</button>
          </div>
          <div>
            <button value={4}>4</button>
            <button value={5}>5</button>
            <button value={6}>6</button>
            <button value='-'>-</button>
          </div>
          <div>
            <button value={1}>1</button>
            <button value={2}>2</button>
            <button value={3}>3</button>
            <button value='+'>+</button>
          </div>
          <div>
            <button value='Pi'>Pi</button>
            <button value={0}>0</button>
            <button value='.'>.</button>
            <button value='='>=</button>
          </div>
        </div>
      </div >

    </div >
  );
}

export default Main;
