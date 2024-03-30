import pair from "../images/pair.png"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="ours"><a href="/"> <img src={""} alt="" /> <h2>Trouver l'ours</h2> <p>Trouveras-tu l’ours avant que la banquise fond?</p></a></div>
      <div className="pairs"><a href="/"> <img src={""} alt="" /> <h2>Jeu des paires</h2> <p>Essaye de trouver les animaux de la même espèce!</p></a></div>
      <div className="story"><a href="/"> <img src={""} alt="" /> <h2>Histoire de Jimmy</h2> <p>explorer l'aventure de Jimmy et de ses amis au pôle Nord</p></a></div>
    </div>
  );
}

export default Sidebar;
