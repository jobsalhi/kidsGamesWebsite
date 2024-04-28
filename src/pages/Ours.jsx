import ice1 from "../images/ours/iceberg1.png";
import ice2 from "../images/ours/iceberg2.png";
import ice3 from "../images/ours/iceberg3.svg";
import ice4 from "../images/ours/iceberg4.png";
import ice5 from "../images/ours/iceberg5.png";
import sea from "../images/ours/Sea.png";
import sky from "../images/ours/sky.png";
import bear from "../images/ours/bear.png";
export default function Ours() {
  return (
    <div className="Ours">
      <h1>Trouvez l'ours</h1>
      <div className="sky">
        <img src={sky} alt="" />
      </div>
      <div className="sea">
        <img src={bear} alt="" className="bear bear1" />
        <img src={sea} alt="" className="seaPic" />
        <img src={ice1} alt="" className="iceberg1 iceberg" />
        <img src={ice2} alt="" className="iceberg2 iceberg" />
        <img src={ice3} alt="" className="iceberg3 iceberg" />
        <img src={ice4} alt="" className="iceberg4 iceberg" />
        <img src={ice5} alt="" className="iceberg5 iceberg" />
        {/* <div className="image-container"><img src={ice5} alt="" /></div> */}
      </div>

      <p>Essayer à nouveau</p>
      <p>tours : 1</p>
      <button>Nouveau jeu</button>
    </div>
  );
}
