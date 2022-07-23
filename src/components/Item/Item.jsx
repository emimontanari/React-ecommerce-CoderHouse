import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
const CardProduct = ({producto,setCantidad}) => {

  const {title,price,image,category,cantidad} = producto

  const onAdd = cant => {
    console.log(`La cantidad agregada: ${cant}`)
    setCantidad(cant)
}
  return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <img className="card-image" src={image} />
            <p className="card-price">${price}</p>
            <p className="card-category">{category}</p>
            <ItemCount onAdd={onAdd} stock={cantidad}/>
        </div>
      
  )
}

export default CardProduct