import { useState, useEffect } from 'react';
import {getFetch} from '../../hepers/getFetch';
import Item from '../Item/Item';


function ItemListContainer() {

  const [productos, setProductos] = useState([])

  useEffect(()=>{ 
    getFetch
      .then((respuesta)=>{
        setProductos(respuesta) 

    })
  },[])


  return(
    <div>
      {productos.map((prod)=><Item key={prod.id} producto={prod.producto} stock={prod.stock}/>)}
    </div>
  )
}
export default ItemListContainer;
