import { DECREMENT, INCREMENT } from "../actionType/actionType"

export const added = (number) => {
    return {
        type: INCREMENT,
        payload : number
    } 
}
export const remove = (number) => {
    return {
        type: DECREMENT,
        payload : number
    } 
}