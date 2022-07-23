import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import axios from "axios"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    const getItem= async () =>{
        try {
            const url = "http://localhost:3001/productos"
            const {data} = await axios(url)
            setItem(data[28])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getItem()
    }, [])
  return (
    <>
        <ItemDetail item={item}/>
    </>
  )
}

export default ItemDetailContainer