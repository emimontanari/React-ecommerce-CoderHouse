import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'

function ItemDetailContainer() {

    const {idProduct} = useParams()
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, 'items', idProduct )
        getDoc(queryDb)
        .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
        .finally(() => setLoading(false))
    }, [idProduct])

    return (
        <div>
            {loading ? <Spinner /> : <ItemDetail product={product}/>}
                
        </div>
    )
}

export default ItemDetailContainer
