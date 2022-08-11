import {Link} from "react-router-dom";
import './Item.css'
import {formatearDinero} from '../../helpers/index.js'
function Item({prod}) {

	return (
	<div className='col-md-4'>
        <div className="card">
            <h3 className="card-title">{prod.name}</h3>
            <img className="card-image" src={prod.image} />
            <p className="card-price">{formatearDinero(prod.price)}</p>
            <Link to={`/detalle/${prod.id}`}>
            <button className="boton">Ver Más</button>
            </Link>
        </div>
	</div>
	);
}

export default Item;
