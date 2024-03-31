import pair from "../images/pair.png";
import ours from "../images/polar.png";
import story from "../images/story.png";
import { FaArrowRight } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="trigger">
      <FaArrowRight />
      </div>

      <div className="options">
        <div className="ours">
          <a href="/">
            <img src={ours} alt="" />
            <div className="title">
              <h2>Trouver l'ours</h2>
              <p>Trouveras-tu l’ours avant que la banquise fond?</p>
            </div>
          </a>
        </div>
        <div className="pairs">
          <a href="/Pairs">
            <img src={pair} alt="" />
            <div className="title">
              <h2>Jeu des paires</h2>
              <p>Essaye de trouver les animaux de la même espèce!</p>
            </div>
          </a>
        </div>
        <div className="story">
          <a href="/Story">
            <img src={story} alt="" />
            <div className="title">
              <h2>Histoire de Jimmy</h2>
              <p>Explorer l'aventure de Jimmy et de ses amis au pôle Nord</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
