import { useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem"
import { useSelector,useDispatch } from "react-redux";
import { getNotebooks } from "../../redux/thunks/notebookThunk";
import { notebooksSelector } from "../../redux/slices/notebooksSlice";

const NotebooksList = () => {

    const dispatch = useDispatch();
    const notebooks = useSelector(notebooksSelector);
    console.log('notebooks', notebooks)

    useEffect(() => {
        dispatch(getNotebooks())
    }, [dispatch]);
    return (
      <div className = "product-list">
       { notebooks.map( elm =>
           <ProductItem 
           key =  {elm.id} 
           {...elm}
           />)
       }
     </div>   
     )
}
 export default NotebooksList
     

