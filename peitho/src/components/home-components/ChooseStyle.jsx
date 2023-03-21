// import SanValentin from "/ProductImages/Vestido-SanValentin.jpeg"

import { useEffect } from "react";

export default function ChooseYourStyle({extraFlag, setExtraFlag}) {

    const redirect = (e) => {
        if(extraFlag !== "" || extraFlag !== null){
        setExtraFlag(e)
        setTimeout(() => {
          window.location.href = "/catalogo"
        }, 400)
      }}
    
    
      useEffect(() => {
        try{
         if(localStorage.getItem("extraFlag") !== ""){
           setExtraFlag(JSON.parse(localStorage.getItem("extraFlag")));
          } 
        } catch(err) {
          console.log(err);
        }
      }, [])
    
      useEffect(() => {
        localStorage.setItem("extraFlag", JSON.stringify({name: extraFlag}))
      }, [extraFlag])

      
    return (
        <div className="style-container">
            <div className="section-title">
                <h1>Elegí tu estilo!</h1>
            </div>
            <div className="peitho-style">
                <div className="peitho-cute">
                    <button onClick={() => redirect("peithoCute")}>
                    <img src="/ProductImages/Vestido-SanValentin.jpeg" alt="" />
                    <h2>Peitho cute</h2>
                    </button>
                </div>
                <div className="peitho-alternativo">
                    <button onClick={() => redirect("peitho")}>
                    <img src="/ProductImages/test.jpg" alt="" />
                    <h2>Peitho alternativo</h2>
                    </button>
                </div>
            </div>
        </div>
    )
}