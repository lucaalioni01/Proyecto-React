import React from 'react';
import ItemCount from "../ItemCount/ItemCount";

function Item (){

    const onAdd =(cont)=> {
        console.log(cont)
    }
    
    return(

        <ItemCount initial="1" stock="10" onAdd={onAdd} />

    );
}
export default Item