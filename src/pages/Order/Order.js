import OrderItem from "../../components/OrderItem/OrderItem";
import {useSelector} from "react-redux";
import {orderSelector} from "../../redux/slices/orderSlice";
import styles from "./order.module.css"

const Order = () => {
    const orderDetails = useSelector(orderSelector)
    const img = localStorage.getItem("orderImage")
    const company = localStorage.getItem("orderCompany")
    const model = localStorage.getItem("orderModel")
    const price = localStorage.getItem("orderPrice")
    return (
        <>
            <div className={styles.orderDetails}>
                <div className={styles.orderImg}>
                    <img src={img} alt="ordered-item-image"/>
                </div>
                <div className={styles.orderInfo}>
                    <p>Company: {company}</p>
                    <p>Model: {model}</p>
                    <h4>Price: {price}</h4>
                </div>
            </div>
            <OrderItem orderItemId={orderDetails.id}/>
        </>
    )
}

export default Order;