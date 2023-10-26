import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

export const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        createCartItem: (state, action) => { // push l'item sélectionné dans le panier
            console.log(action)
            state.cartItems.push(action.payload)
        },
        updateItemFromSelect: (state, action) => {
            state.cartItems.find(element => element.id === action.payload.id).quantity = Number(action.payload.value)
        },
        removeFromCart: (state, action) => {
            const indexOfItemToRemove =  state.cartItems.findIndex(element => element.id === action.payload)
        state.cartItems.splice(indexOfItemToRemove, 1) }
    }
})

export function addOneToCart(action) {
    return function (dispatch, getState) {
        const storeState = getState()

        const isAlreadyPresent = storeState.cart.cartItems.find(element => element.id === action)

        if(!isAlreadyPresent) {
            const itemToAdd = storeState.products.items.find(element => element.id === action)
     
            const newCartItem = {
                ...itemToAdd,
                quantity: 1
            }
            dispatch(createCartItem(newCartItem))
        }
    }
}

export const {createCartItem, updateItemFromSelect, removeFromCart} = cart.actions
export default cart.reducer