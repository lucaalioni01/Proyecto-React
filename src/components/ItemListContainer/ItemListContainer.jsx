import Item from "../Item/Item";



function ItemListContainer ({greeting}) {
    console.log ()
    return (
      <div>
          <h1>Hola este es mi sitio de {greeting}</h1>
          <Item/>
      </div>
      
    );
}
  
export default ItemListContainer;
