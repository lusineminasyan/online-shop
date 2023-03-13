import { Link } from "react-router-dom"

const ProductItem = ({id, img, company, model, memory, price, year, color, frontCamera, mainCamera, operationSystem, gps, bluetooth, wiFi, nfc, simCard, weight}) => {

    return (
      <div className="product-item">
          <div className="img">
            <img src={ img } alt="images"/>
          </div>
       <div>
          <h3>{company}</h3>
          <p>{model}</p>
          <p>{memory}</p>
          <p>{price}</p>
          <Link to={`${id}`} state={{id, img, company, model, price, year, color, frontCamera, mainCamera, operationSystem, gps, bluetooth, wiFi, nfc, simCard, weight}}> See Details </Link>
      
       </div>
      </div>
    )
}
export default ProductItem