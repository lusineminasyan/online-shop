import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getPhones } from "../../redux/thunks/phoneThunk";
import { phonesSelector } from "../../redux/slices/phonesSlice";
import ProductItem from "../ProductItem/ProductItem"

const PhonesList = () => {

    const dispatch = useDispatch();
    const phones = useSelector(phonesSelector);
    console.log('phones', phones)

    useEffect(() => {
            dispatch(getPhones())
    }, []);

    return (
      <div className = "product-list">
       { phones.map( elm =>
           <ProductItem 
           key =  {elm.id} 
           {...elm}
           />)
       }
     </div>   
     )
}
 export default PhonesList
     

