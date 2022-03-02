import React from 'react';
import { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {

    const [cont, setCont] = useState(1);
    initial = cont
    const sumar = () => {
        setCont(initial + 1);

    };

    const restar = () => {
        setCont(initial - 1);

    };


    if (cont > 10) {
        console.log("no hay más de 10")
    } else if (cont < 1) {

        console.log(`el minimo es 1`)
    }

return (
    <div>
        <label >El stock disponible es {stock}</label>
        <br />
        <span>{initial}</span>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      
    </div>
);
   }
export default ItemCount   