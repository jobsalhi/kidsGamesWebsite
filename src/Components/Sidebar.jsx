import {  useState } from "react";
import pair from "../images/pair.png";
import ours from "../images/polar.png";
import story from "../images/story.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);


  return (
    <div className={isOpen? "sidebar" : "sidebar active"}>
      <div className="trigger">
      {isOpen? <FaArrowLeftLong onClick={()=>{setIsOpen(!isOpen)}}/> : <FaArrowRightLong onClick={()=>{setIsOpen(!isOpen)}}/>}
      
      
      
      </div>

      <div className={isOpen? "options" : "options active"}>
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
