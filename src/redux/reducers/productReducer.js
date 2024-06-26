import { ActionTypes } from "../constants/action-types"

const intialState ={
    products:[]
}

export const productReducer =(state = intialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PROFUCTS:
            return {...state,products:payload}
        case ActionTypes.FETCH_PRODUCTS:
                return {...state,products:payload}
        default:
            return state
    }
}

export const selectedProduct = (state ={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state,...payload}
        default:
            return state
    }
}