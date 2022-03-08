import React from 'react';
import { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {

    const [cont, setCont] = useState(1);

    const sumar = () => {
        if (cont < stock) {
            setCont(cont + 1);
        }
    };

    const restar = () => {
        if (cont > initial) {
            setCont(cont - 1);
        }
    };

   const agregarCarrito =()=>{
       onAdd(cont)
    }


    return (

        <div>
            <label >El stock disponible es {stock}</label>
            <br />
            <span>{cont}</span>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={agregarCarrito}>Agregar al carrito</button>
        </div>


    );
}
export default ItemCount   