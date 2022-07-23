import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState(1)
    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const handleResta = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleAddToCart = () => {
        onAdd(count)
    }

    
  return (
    <div>
        <div className="count">
            <button onClick={handleResta} className="btn"> - </button>

        <div className="input-cantidad">
            <h3>{count}</h3>
        </div>

        <button onClick={handleAdd} className="btn">+</button>

        </div>
        <button onClick={handleAddToCart}  type="submit" className="btn submit">Agregar al Carrito</button>
        <button type="submit" className="btn submit">Ver producto</button>
    </div>
  )
}

export default ItemCount
