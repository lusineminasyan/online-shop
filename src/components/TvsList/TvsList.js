import { useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem"
import { useSelector,useDispatch } from "react-redux";
import { getTvs } from "../../redux/thunks/tvThunk";
import { tvsSelector } from "../../redux/slices/tvsSlice";
import '../TvsList/TvsList.css'

const TvsList = () => {
    const dispatch = useDispatch();
    const tvs = useSelector(tvsSelector);
    useEffect(() => {
        dispatch(getTvs())
    }, [dispatch]);
    return (
        <div className='productList'>
       { tvs.map( elm =>
           <ProductItem 
           key =  {elm.id} 
           {...elm}
           />)
       }
     </div>   
     )
}
 export default TvsList
     

