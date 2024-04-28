import fakeStore from "../../apis/fakeStore";
import { ActionTypes } from "../constants/action-types"
import axios from 'axios';

export  const setProduct=(products)=>{
    return{
        type:ActionTypes.SET_PROFUCTS,
        payload:products
    }
}

// export  const selectedProduct=(products)=>{
//     return{
//         type:ActionTypes.SELECTED_PRODUCTS,
//         payload:products
//     }
// }
export const fetchProducts=()=>{
    return async function (dispatch,getState) {
        const response=await fakeStore.get('/products')
        dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
    }
}
export  const selectedProduct=(id)=>{
    return async function (dispatch,getState) {
        const response=await fakeStore.get(`/products/${id}`)
        dispatch({type:ActionTypes.SELECTED_PRODUCTS,payload:response.data})
    }
}
  