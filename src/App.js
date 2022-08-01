import { useEffect, useRef, useState } from 'react';
import './App.css';
import JSConfetti from 'js-confetti';
import addSvg from './utils/addSvg';

const jsConfetti = new JSConfetti();

function App() {
  const letters = ['A', 'B', 'C'],
    numbers = [1, 2, 3],
    firstLetter = useRef(0),
    firstNumber = useRef(0);
  const [letter, setLetter] = useState(null);
  const [number, setNumber] = useState(null);

  const [isShowRight, setIsShowRight] = useState(false);
  const [version, setVersion] = useState(1);

  const isSearch = useRef(false),
    counter = useRef(0),
    routesArr = useRef([]);

  useEffect(() => {
    setLetter(Math.floor(Math.random() * (3 - 0) + 0));
    setNumber(numbers[Math.floor(Math.random() * (3 - 0) + 0)]);
  }, [version]);

  if (counter.current === 0 && letter !== null && number !== null) {
    firstLetter.current = letters[letter];
    firstNumber.current = number;
  }

  if (!isSearch.current && letter !== null && number !== null) {
    const search = () => {
      counter.current++;
      const random = Math.floor(Math.random() * (2 - 0) + 0);
      if (counter.current === 10) {
        isSearch.current = true;
      }
      if (random === 0) {
        if (number === 1) {
          setNumber(number + 1);
          routesArr.current.push('Вниз');
        }
        if (number === 2) {
          const randomForNumber = Math.floor(Math.random() * (2 - 0) + 0);
          if (randomForNumber === 0) {
            setNumber(number + 1);
            routesArr.current.push('Вниз');
          } else {
            setNumber(number - 1);
            routesArr.current.push('Вверх');
          }
        }
        if (number === 3) {
          setNumber(number - 1);
          routesArr.current.push('Вверх');
        }
      } else {
        if (letters[letter] === 'A') {
          setLetter(letter + 1);
          routesArr.current.push('Вправо');
        }
        if (letters[letter] === 'B') {
          const randomForLetter = Math.floor(Math.random() * (2 - 0) + 0);
          if (randomForLetter === 0) {
            setLetter(letter + 1);
            routesArr.current.push('Вправо');
          } else {
            setLetter(letter - 1);
            routesArr.current.push('Влево');
          }
        }
        if (letters[letter] === 'C') {
          setLetter(letter - 1);
          routesArr.current.push('Влево');
        }
      }
    };
    window.setTimeout(search, 500);
  }

  const chooseAnswer = (word, numbers) => {
    if (isSearch.current === true && letters[letter] === word && numbers === number) {
      jsConfetti.addConfetti().then(() => {
        let isContinue = window.confirm('Вы прекрасно справляетесь!Продолжим?');
        if (isContinue) {
          setVersion(version + 1);
          firstLetter.current = 0;
          firstNumber.current = 0;
          setLetter(null);
          setNumber(null);
          setIsShowRight(false);
          isSearch.current = false;
          counter.current = 0;
          routesArr.current = [];
        }
      });
    } else {
      setIsShowRight(true);
    }
  };
  const addGameCell = (id) => {
    const cells = numbers.map((elem, i) => {
      return (
        <div
          key={i}
          className={isShowRight && letters[letter] == id && number === elem && counter.current === 10 ? 'square__div showAnswer' : 'square__div'}
          onClick={() => chooseAnswer(id, elem)}
        >
          {firstLetter.current == id && firstNumber.current === elem ? 'Start' : ''}
        </div>
      );
    });
    return cells;
  };
  return (
    <div className="App">
      <header>Labirint</header>
      <img className="background" src="https://phonoteka.org/uploads/posts/2021-04/1618536207_15-p-fon-labirint-19.jpg" alt="" />
      <div className="square">
        <div id="A" className="verticalBlock">
          <p className="topSymbols">A</p>
          {addGameCell('A')}
          <div className="leftBlock">
            {numbers.map((elem, i) => {
              return (
                <p key={i} className="numbers">
                  {elem}
                </p>
              );
            })}
          </div>
        </div>
        <div id="B" className="verticalBlock">
          <p className="topSymbols">B</p>
          {addGameCell('B')}
        </div>
        <div id="C" className="verticalBlock">
          <p className="topSymbols">C</p>
          {addGameCell('C')}
        </div>
      </div>
      <div className="steps">
        {routesArr.current.map((elem, i) => {
          return <div key={i}>{addSvg(elem)}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
