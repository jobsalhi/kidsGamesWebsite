import ice1 from "../images/ours/iceberg1.png";
import ice2 from "../images/ours/iceberg2.png";
import ice3 from "../images/ours/iceberg3.svg";
import ice4 from "../images/ours/iceberg4.png";
import ice5 from "../images/ours/iceberg5.png";
import sea from "../images/ours/Sea.png";
import sky from "../images/ours/sky.png";
import bear from "../images/ours/bear.png";
import bearA from "../images/ours/bear(alive).png";
import bearD from "../images/ours/bear(dead).png";
import { useState } from "react";

export default function Ours() {
  const [tries, setTries] = useState(0);
  const [found, setFound] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [bearPos, setBearPos] = useState(Math.floor(Math.random() * 5) + 1);
  console.log(bearPos);

  const handleGuess = (guess) => {
    if (!found && !gameOver) {
      setTries(tries + 1);
      if (guess === bearPos) {
        setFound(true);
      } else {
        if (tries >= 2) {
          setGameOver(true);
        }
      }
    }
  };

  const resetGame = async () => {
    setTries(0);
    setFound(false);
    setGameOver(false);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
    setBearPos(Math.floor(Math.random() * 5) + 1);
  };
  

  const renderIcebergClass = () => {
    if (!found &&tries === 0) return "iceberg100";
    if (!found &&tries === 1) return "iceberg80";
    if (!found && tries === 2) return "iceberg75";
    if (tries >= 3 || found) return "iceberg20";
    return "";
  };

  return (
    <div className="Ours">
      <h1>Trouvez l'ours</h1>
      <div className="sky">
        <img src={sky} alt="" />
      </div>
      <div className="sea">
        <img
          src={!found && !gameOver ? bear : found ? bearA : bearD}
          alt=""
          className={`bear bear${bearPos}`}
        />
        <img src={sea} alt="" className="seaPic" />
        <img
          src={ice1}
          alt=""
          className={`iceberg1 iceberg ${renderIcebergClass()}`}
          onClick={() => handleGuess(1)}
        />
        <img
          src={ice2}
          alt=""
          className={`iceberg2 iceberg ${renderIcebergClass()}`}
          onClick={() => handleGuess(2)}
        />
        <img
          src={ice3}
          alt=""
          className={`iceberg3 iceberg ${renderIcebergClass()}`}
          onClick={() => handleGuess(3)}
        />
        <img
          src={ice4}
          alt=""
          className={`iceberg4 iceberg ${renderIcebergClass()}`}
          onClick={() => handleGuess(4)}
        />
        <img
          src={ice5}
          alt=""
          className={`iceberg5 iceberg ${renderIcebergClass()}`}
          onClick={() => handleGuess(5)}
        />
      </div>

      {found && <p>Bravo! Vous avez trouvé l'ours en {tries} essais.</p>}
      {!found && !gameOver && tries != 0 && <p>Essayer à nouveau</p>}
      {gameOver && <p>Désolé, l'ours est parti. Essayez à nouveau!</p>}
      <p>Tours : {tries}</p>
      <button onClick={resetGame}>Nouveau jeu</button>
    </div>
  );
}



