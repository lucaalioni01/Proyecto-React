import ItemCount from "../ItemCount/ItemCount";
import './Item.css'

function Item({ producto, stock }) {

    const onAdd = (cont) => {
        console.log(cont)
    }

    return (


        <div className="fichaProdcuto">
            <h2>{producto} </h2>
            <label >Imagen</label>
            <ItemCount initial="1" stock="10" producto={producto} onAdd={onAdd} />

        </div>

    );
}
export default Item








