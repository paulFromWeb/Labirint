import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const letters = ['A', 'B', 'C'];
  const numbers = [1, 2, 3];

  const [letter, setLetter] = useState();
  const [number, setNumber] = useState();

  useEffect(() => {
    const updateData = async () => {
      await setLetter(letters[Math.floor(Math.random() * (3 - 0) + 0)]);
      await setNumber(numbers[Math.floor(Math.random() * (3 - 0) + 0)]);
    };
    updateData();
  }, []);
  console.log(letter);
  console.log(number);
  useEffect(() => {
    setActiveLetter(letter);
    setActiveNumber(number);
  }, [letter, number]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="square">
          <div id="A">
            <div
              className={
                letter === 'A' && number === 1
                  ? 'square__div active'
                  : 'square__div'
              }
            >
              1
            </div>
            <div
              className={
                letter === 'A' && number === 2
                  ? 'square__div active'
                  : 'square__div'
              }
            >
              2
            </div>
            <div
              className={
                letter === 'A' && number === 3
                  ? 'square__div active'
                  : 'square__div'
              }
            >
              3
            </div>
          </div>
          <div id="B">
            <div
              className={
                letter === 'B' && number === 1
                  ? 'square__div active'
                  : 'square__div'
              }
            >
              4
            </div>
            <div
              className={
                letter === 'B' && number === 2
                  ? 'square__div active'
                  : 'square__div'
              }
            >
              5
            </div>
            <div
              className={
                letter === 'B' && number === 3
                  ? 'square__div active'
                  : 'square__div'
              }
            >
              6
            </div>
          </div>
          <div id="C">
            <div
              className={
                letter === 'C' && number === 1
                  ? 'square__div active'
                  : 'square__div'
              }
            >
              7
            </div>
            <div
              className={
                letter === 'C' && number === 2
                  ? 'square__div active'
                  : 'square__div'
              }
            >
              8
            </div>
            <div
              className={
                letter === 'C' && number === 3
                  ? 'square__div active'
                  : 'square__div'
              }
            >
              9
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
