import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ProductComoponent from './ProductComoponent'
import { fetchProducts, setProduct } from '../redux/action/productAction'

export default function ProductListning() {
    const data=useSelector((state)=>state.allProducts)
     const dispatch =useDispatch()
    // const   loadProduct = async()=>{
    //   const response =await axios.get('https://fakestoreapi.com/products')
    //  dispatch(setProduct(response.data))
    // }
    useEffect(()=>{
      dispatch(fetchProducts())
    },[])   
    // console.log(data)
  return (
    <div className="ui grid container">
      
        <ProductComoponent/>
    </div>
  )
}
