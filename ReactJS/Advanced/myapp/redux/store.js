import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/Cart'
import authReducer from '../features/auth'
import paymentReducer from '../features/Ejemplo'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        payment: paymentReducer,
        auth: authReducer
    }
})

export default store