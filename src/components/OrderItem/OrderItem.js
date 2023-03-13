import "./OrderItem.css"
import {useState} from "react";
import instance from "../../api/axios";

const OrderItem = ({ orderItemId }) => {
    const [order, setOrder] = useState(false)

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [comment, setComment] = useState('');

    const orderData = {
        orderItemId,
        fullName,
        email,
        address,
        comment
    }

    const handleSubmit = event => {
        event.preventDefault();
        instance.post('/orders', orderData)
            .then(res => console.log(res))
            .catch(err => console.log('error:', err));
        setOrder(!order);
        localStorage.clear();
    };

    return (
        <>
            {
                !order ? (
                    <form className='order-form' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className='order-input'
                            name="fullName"
                            placeholder='Name Surname'
                            onChange={event => setFullName(event.target.value)}
                            required
                        />
                        <input
                            type="text"
                            className='order-input'
                            name="email"
                            placeholder='email'
                            onChange={event => setEmail(event.target.value)}
                            required
                        />
                        <input
                            type="text"
                            className='order-input'
                            name="address"
                            placeholder='address'
                            onChange={event => setAddress(event.target.value)}
                            required
                        />
                        <input
                            type="text"
                            className='order-input'
                            name="comment"
                            placeholder='comment'
                            onChange={event => setComment(event.target.value)}
                            required
                        />
                        <input
                            type="submit"
                            className='order-button'
                            value="order"
                        />
                    </form>
                ) : (
                    <div className="after-order">
                        <h1>Congratulations!</h1>
                        <p> Your order is on its way and will reach you within 3 days </p>
                    </div>
                )
            }

        </>
    );
}

export default OrderItem;