import ItemCount from "../ItemCount/ItemCount";
import Item from "../Item/Item";

function ItemListContainer ({greeting}) {
    console.log ()
    return (
      <div>
          <h1>Hola este es mi sitio de {greeting}</h1>
        <ItemCount stock="10" />
        <Item/>
      </div>
      
    );
}
  
export default ItemListContainer;
