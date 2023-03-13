import {memo} from "react"
import {Link, useLocation, useNavigate} from "react-router-dom"

import  './ProductDetails.css'
import {useDispatch} from "react-redux";
import {setOrder} from "../../redux/slices/orderSlice";


const ProductDetails = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {
        img,
        company,
        model,
        price,
        year,
        color,
        frontCamera,
        mainCamerar,
        operationSystem,
        gps,
        bluetooth,
        wiFi,
        nfc,
        simCard,
        weight
    } = location.state;

    const dispatch = useDispatch();
    const setOrderItem = () => {
        dispatch(setOrder(location.state));
    }
    localStorage.setItem("orderImage", location.state.img)
    localStorage.setItem("orderCompany", location.state.company)
    localStorage.setItem("orderModel", location.state.model)
    localStorage.setItem("orderPrice", location.state.price)
    return (
        <div className="product">
            <div className="left-box">
              <button onClick={() => navigate(-1)} className="goBackButton"> {`<--`} Go back</button>
              <img src={img} alt="images" className="img"/>
            </div>
            <div className="description">
                <h3> Company {company}</h3>
                <h2>Model {model}</h2>
                <p>Price {price}</p>
                <p>{year}</p>
                <p>{color}</p>
                <p>{frontCamera}</p>
                <p>{mainCamerar}</p>
                <p>{operationSystem}</p>
                <p>{gps}</p>
                <p>{bluetooth}</p>
                <p>{wiFi}</p>
                <p>{nfc}</p>
                <p>{simCard}</p>
                <p>Weight {weight}</p>
                <Link to="/order">
                    <button className="order-button" onClick={() => setOrderItem()}>Order</button>
                </Link>
            </div>
        </div>
    )
}
export default memo(ProductDetails)