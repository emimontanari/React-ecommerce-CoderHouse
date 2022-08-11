import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner'

function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    useEffect(() => {
        const db = getFirestore();
        if (idCategory) {
            const queryCollectionCategory = query(collection(db, 'items'), where('category', '==', idCategory) )
            getDocs(queryCollectionCategory)
            .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            .finally(() =>  setLoading(false))
        } else {
            const queryCollection = collection(db, 'items')
            getDocs(queryCollection)
            .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            .finally(() => setLoading(false))
        }  
    }, [idCategory])

    useEffect(() => {
        setLoading(true)
    }, [idCategory])
    

    return (
        <div>
            <h2 className="text-center display-2 text-uppercase mt-5 "> {idCategory} </h2>
            <div className="container">
                <div className="row">
                {loading ? <Spinner /> : <ItemList products={products}/>}  
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer
