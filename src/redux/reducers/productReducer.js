 import { ActionTypes } from "../contants/action-type"
 
 const initialState = {
     products : [{
         id: 1,
         title : "Thanh Dat",
         category : "programer"
     }]
 }
 export const productReducer = (state =initialState,{tyle , payload}) => {
        switch (tyle) {
            case ActionTypes.SET_PRODUCTS:
                    return state 
            default:
            return state ;
        }
 }