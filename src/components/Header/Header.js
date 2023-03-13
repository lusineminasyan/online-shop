import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {productTypesSelector} from "../../redux/slices/productTypesSlice";
import {getProductTypes} from "../../redux/thunks/productTypesThunk";

const Header = () => {
    const dispatch = useDispatch();
    const products = useSelector(productTypesSelector);
    console.log('products', products)

    useEffect(() => {
        dispatch(getProductTypes())
    }, [dispatch]);
    return (
        <header>
            <div className="productTypesDiv">
                {
                    products.map(item =>
                        <Link className="productTypeItem" to={`/${item}`}>
                            <img className="productTypesImg" src={`images/${item}.png`} alt=""/>
                            <span>{item}</span>
                        </Link>
                    )
                }
            </div>
        </header>
    )
}

export default Header;