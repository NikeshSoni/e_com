import {createSlice} from '@reduxjs/toolkit'

// const intialState = [];

const cartSlice = createSlice({
    name:'cart',
    intialState: [],

    reducers:{
        add(state , action) {
            state.push(action.payload)
        },

        remove(state , action) {
            state = state.filter(items => items.id !== action.payload)
        },  
    }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
