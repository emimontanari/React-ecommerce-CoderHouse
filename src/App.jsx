import './App.css'
import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
function App() {

  const [cantidad, setCantidad] = useState(0)

  return (
    <>
    <div className="App">
      <NavBar cantidad={cantidad} />
      < Banner />
      <ItemListContainer titulo="Ultimos productos!" setCantidad={setCantidad}/>
      <ItemDetailContainer />
    </div>
    <Footer />
    </>
  )
}

export default App

//TODO: Crear json con 20 articulos de la tiendo y llamarlos por fetch o axios con promise
//TODO: Agregar detalle de producto, crear interface de detalle producto
//TODO: CREAR PAGINADO DE NOSOTROS, PRODUCTO, CONTACTO
