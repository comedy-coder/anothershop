import React from 'react'
import {useEffect,useCallback} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProducts} from '../redux/actions/productActions'
const ProductListing = () => {
    const products =useSelector(state => state);
    const dispatch = useDispatch();
    const fectProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{console.log("Err",err)});
      dispatch(setProducts(response.data)) ;                                                                          
    }


    const fetchData = useCallback(
      () => {
        fectProducts();
      },[fectProducts]
    )
    
    
    useEffect(()=> {
      fetchData();
    },[fetchData])
  return (

    <div className="ui grid container" style={{marginTop:40   }}>
       
                               < ProductComponent />
      
    </div>
  )
}

export default ProductListing