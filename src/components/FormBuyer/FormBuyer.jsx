import { useState, useContext } from 'react'
import { getFirestore, collection, writeBatch, addDoc, Timestamp, doc} from 'firebase/firestore'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';

const FormBuyer = () => {

    const [orderId, setOrderId] = useState('')
    const [creatingOrder, setCreatingOrder] = useState(false)
    const [formData, setFormData] = useState({
        name:"", email:"", emailConfirm:"", phone:""
    })
    const[alerta, setAlerta] = useState('')

    const { cartList, totalBuy, emptyCart } = useContext(CartContext)


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value   
        })
    }


    const createOrder = (e) => {
        e.preventDefault()

        //validar formulario
        if(formData.email !== formData.emailConfirm || formData.name === '' || formData.email === '' || formData.phone === ''){
            setAlerta('Todos los campos son obligatorios')
            return
        }

        setCreatingOrder(true)

        delete formData.emailConfirm
        let order = {}
        order.date = Timestamp.fromDate(new Date())
        order.buyer = formData
        order.total = totalBuy()
        
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.name
            const price = cartItem.price
            const quantity = cartItem.quantity
            const totalPrice = cartItem.price * cartItem.quantity
            return {id, name, price, quantity, totalPrice}
        })


        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then(resp => setOrderId(resp.id))
        .catch(err => console.log(err))
        .finally(() => { 
            setCreatingOrder(false)
            updateStock()
            emptyCart()
            setFormData({
                name:"", email:"", emailConfirm:"", phone:""
            })
        })

        function updateStock() {
            const batch = writeBatch(db)

            order.items.map(el => {
                let updateDoc = doc(db, 'items', el.id)
                let currentStock = cartList.find(item => item.id === el.id).stock

                batch.update( updateDoc, {
                    stock: currentStock - el.quantity
                })
            })

            batch.commit()
        }
    }

    return (
        <> 
            {creatingOrder
            ?
                <>      
                    <h4 className="mt-5 text-center">Procesando su orden, espere un momento...</h4>
                  
                </>
            :
            orderId
            ? 
                <Alert key={'success'} variant={'success'} className="container mt-5">
                    <div className="py-5 text-center mt-5">
                        <h2 className="mt-5">¡Gracias por elegir Sneakers Ecommerce</h2>
                        <h4 className="my-5">La compra se ha realizado exitosamente.</h4>
                        <strong>El ID de tu compra es {orderId}</strong><br />
                        <Link className="btn btn-danger bg-gradient mt-5" to={`/`}>
                            <strong>Volver al inicio</strong>
                        </Link>
                    </div>
                </Alert>
            :
                <div className="container mt-5 form__container d-flex">
                    <div className="container align-self-center position-relative">
                        <div className="row">
                            <div className="col-12">
                            {alerta && <Alert variant='danger' className='text-center mt-1 mb-5'>{alerta}</Alert>}
                                <form className="d-flex flex-column"
                                    onSubmit={createOrder}
                                    onChange={handleChange}
                                >
                                    <div className="mb-3 d-flex flex-column align-items-center">
                                        <label className="form-label">Nombre</label>
                                        <input type="name" className="form-control form-control--color" name="name" placeholder="NOMBRE COMPLETO" defaultValue={formData.name}/>
                                    </div>
                                    <div className="mb-3 d-flex flex-column align-items-center">
                                        <label className="form-label">Teléfono</label>
                                        <input type="number" className="form-control form-control--color" name="phone" placeholder="NUMERO DE TELEFONO" defaultValue={formData.phone} />
                                    </div>
                                    <div className="mb-3 d-flex flex-column align-items-center">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control form-control--color" name="email" placeholder="CORREO ELECTRONICO" defaultValue={formData.email}/>
                                    </div>
                                    <div className="mb-3 d-flex flex-column align-items-center">
                                        <label className="form-label">Confirmar Email</label>
                                        <input type="email" className="form-control form-control--color" name="emailConfirm" placeholder="REPETIR CORREO ELECTRONICO" defaultValue={formData.emailConfirm}/>
                                    </div>
                                    <button className="btn btn-success bg-gradient d-flex justify-content-center w-50 align-self-center">
                                        Comprar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default FormBuyer
