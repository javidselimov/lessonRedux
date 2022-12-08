import { ADD_TO_CART } from "../action-types"

const InitialState = 0

export const sebetReducer = (state=InitialState,action)=>{
    switch(action.type){

        case ADD_TO_CART:return state+1
        default: return state
    }
}