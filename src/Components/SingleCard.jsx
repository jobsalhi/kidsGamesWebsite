import logo from "../images/cardGame/Logo.png";

export default function SingleCard({ card , handleChoice ,flipped, disabled }) {
    const handleClick = ()=>{
        if (!disabled) {
            handleChoice(card)
          }
    }
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src={logo}
          alt="card front"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
