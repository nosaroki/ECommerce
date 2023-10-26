import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: undefined
}

export const products = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.items = action.payload
        }
    },
        extraReducers: { // cas de reducer à executer qu'un autre cas de reducer est executé dans une autre fonctionnalités
            ["cart/createCartItem"]: (state, action) => {
                state.items.find(element => element.id === action.payload.id).picked = true
            },
            ["cart/removeFromCart"]: (state, action) => {
                state.items.find(element => element.id === action.payload).picked = false
            }
        }
})

export function getProductsList(action) { // on exporte le créateur d'action
    return function(dispatch, getState) {
        fetch("/data/inventory.json")
        .then(response => response.json())
        .then(data => dispatch(addProducts(data.products)))
    }
}

export const {addProducts} = products.actions
export default products.reducer