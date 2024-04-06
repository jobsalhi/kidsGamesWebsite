import { useState } from 'react'
import bear  from "../images/cardGame/bear.png";
import bunny  from "../images/cardGame/bunny.png";
import fox  from "../images/cardGame/fox.png";
import whale  from "../images/cardGame/whale.png";
import seal  from "../images/cardGame/seal.png";
import penguin  from "../images/cardGame/penguin.png";
import logo from '../images/cardGame/Logo.png'
const cardImages = [
  {"src" : bear },
  {"src" : bunny },
  {"src" : fox },
  {"src" :penguin },
  {"src" : seal },
  {"src" : whale },
]


export default function Pairs() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))
      
    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)

  return <div className="Pairs">
   <h1>Jeu des pairs</h1>
   <button onClick={shuffleCards}>Nouveau jeu</button>
   <div className="card-grid">
    {cards.map(card=>(
      <div key={card.id} className='card'>
        <div className='twoPics'>
          <img className='front' src={card.src} alt="card front" />
          {/* <img className='back' src={logo} alt="card front" /> */}
        </div>
      </div>
    ))}
   </div>
  </div>;
}
