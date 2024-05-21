import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'
import productReducer from '../components/Products';

const Store = configureStore( {
    reducer:{
        // cart:cartReducer,
       //  product: productReducer
    }
})

export default Store;