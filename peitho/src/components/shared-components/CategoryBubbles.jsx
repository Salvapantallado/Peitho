import "../../styles/category-bubbles.css";

import Top from "../../images/Home/Bubbles/circle-one.jpg";
import Falda from "../../images/Home/Bubbles/circle-two.jpg";
import Vestido from "../../images/Home/Bubbles/circle-three.jpg";
import Pantalon from "../../images/Home/Bubbles/circle-four.jpg";
import Abrigo from "../../images/Home/Bubbles/circle-five.jpg";
import Camisa from "../../images/Home/Bubbles/circle-six.jpg";
import { useEffect } from "react";

export default function CategoryBubble({flag, setFlag }) {

  const redir = (e) => {
    if(flag !== "" || flag !== null){
    setFlag(e)
    setTimeout(() => {
      window.location.href = "/catalogo"
    }, 400)
  }}


  useEffect(() => {
    try{
     if(localStorage.getItem("flag") !== ""){
       setFlag(JSON.parse(localStorage.getItem("flag")));
      } 
    } catch(err) {
      console.log(err);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("flag", JSON.stringify({name: flag}))
  }, [flag])


  return (
    <div className="category-bubbles">
      <div>
        <button className="category-container" onClick={() => redir("tops")}>
          <img src={Top} alt="Tops" />
          <span>Tops</span>
        </button>

        <button className="category-container" onClick={() => redir("faldas")}>
          <img src={Falda} alt="Faldas" />
          <span>Faldas</span>
        </button>

        <button className="category-container" onClick={() => redir("vestidos")}>
          <img src={Vestido} alt="Vestidos" />
          <span>Vestidos</span>
        </button>
      </div>

      {/* <div>
        <button className="category-container" onClick={() => redir("pantalones")}>
          <img src={Pantalon} alt="Pantalones" />
          <span>Pantalones</span>
        </button>
      </div> */}

      <div>
        <button className="category-container" onClick={() => redir("abrigos")}>
          <img src={Abrigo} alt="Abrigos" />
          <span>Abrigos</span>
        </button>

        <button className="category-container" onClick={() => redir("camisas")}>
          <img src={Camisa} alt="Camisas" />
          <span>Camisas</span>
        </button>
      </div>
    </div>
  );
}

// - Top
// - Polleras
// - Vestidos
// - Pantalones
// - Abrigos
// - Camisas
