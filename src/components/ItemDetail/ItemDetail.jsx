import "./ItemDetail.css"
const ItemDetail = ({item}) => {
    const {title, price, image, category, descripcion, cantidad} = item
    
  return (
    <div className="itemdetail">

        <div  className="itemdetail-img">
             <img src={image} alt={title}/>   
        </div>

        <div className="itemdetail-info">
            <h1>{title}</h1>
            <h2>${price}</h2>
            <p className="category"><span>Marca: </span>{category}</p>
            <p className="description">{descripcion}</p>
            
            <button className="btn detail">Comprar</button>  

        </div>
    </div>
  )
}

export default ItemDetail