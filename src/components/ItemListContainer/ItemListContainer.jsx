// import Item from "../Item/Item";
import ItemList from "../ItemList/ItemList";


function ItemListContainer ({greeting}) {
    console.log ()
    return (
      <div>
          <h1>Hola este es mi sitio de {greeting}</h1>
          
          <ItemList />
      </div>
      
    );
}
  
export default ItemListContainer;
