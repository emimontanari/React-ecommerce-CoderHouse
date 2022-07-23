import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import Item from "../Item/Item"
import Spinner from '../Spinner/Spinner'
import axios from 'axios'


const ItemListContainer = ({setCantidad, titulo}) => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(false)
    
  
    const getProducts = async ()=> {
      const url = "http://localhost:3001/productos"
      const {data} = await axios(url)
      setProductos(data)
    }
    useEffect(() => {
      setCargando(true)
      setTimeout(() => {
        getProducts()
        setCargando(false)
      }, 2000);
    }, [])
   
  return (
      <>
        <h2>{cargando ? '' : titulo}</h2>
        {cargando && <Spinner/>}
        <div className="product-container">
          {productos.map( producto =>(
            <Item producto={producto} key={producto.id} setCantidad={setCantidad}/>
            ))}
        </div>
      </>
  )
}

export default ItemListContainer