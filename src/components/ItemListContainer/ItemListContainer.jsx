import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer ({greeting}) {
    console.log ()
    return (
      <div>
          <h1>Hola este es mi sitio de {greeting}</h1>
        <ItemCount stock="10" />
      </div>
      
    );
}
  
export default ItemListContainer;
