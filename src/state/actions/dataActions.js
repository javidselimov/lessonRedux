import axios from "axios"
import { ERROR, LOAD, SUCCESS } from "../action-types"



export const getData = () => {
    return async (dispatch) => {

        try {

            dispatch({
                type: LOAD
            })

            let { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')


            dispatch({
                type: SUCCESS,
                payload: data
            })




        } catch (error) {
            dispatch({
                type:ERROR,
                payload:"Xeta bash verdi "
            })
        }

    }
}