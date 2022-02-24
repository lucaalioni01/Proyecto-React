import React from "react";
import CarritoFoto from "../../assets/CarritoFoto.png"
import "./CartWidget.css"

function CartWidget () {
    return (
      <>
        <img className="cartImg" src={CarritoFoto} alt="foto"/>
      </>
    );
}
  
export default CartWidget;
