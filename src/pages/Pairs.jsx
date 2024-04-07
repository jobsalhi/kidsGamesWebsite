import { useEffect, useState } from "react";
import bear from "../images/cardGame/bear.png";
import bunny from "../images/cardGame/bunny.png";
import fox from "../images/cardGame/fox.png";
import whale from "../images/cardGame/whale.png";
import seal from "../images/cardGame/seal.png";
import penguin from "../images/cardGame/penguin.png";
import SingleCard from "../Components/SingleCard";
const cardImages = [
  { src: bear, matched: false },
  { src: bunny, matched: false },
  { src: fox, matched: false },
  { src: penguin, matched: false },
  { src: seal, matched: false },
  { src: whale, matched: false },
];

export default function Pairs() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice
  const handleChoice = (card) => {
    console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        console.log("those cards do not match");
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);
  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // start new game automagically
  useEffect(() => {
    shuffleCards();
  }, []);
  return (
    <div className="Pairs">
      <h1>Jeu des pairs</h1>
      <button onClick={shuffleCards}>Nouveau jeu</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            card={card}
            key={card.id}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Tours : {turns}</p>
    </div>
  );
}
