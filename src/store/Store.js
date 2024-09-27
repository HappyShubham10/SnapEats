import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../features/CartSlice'
import CategoryReducer from '../features/CategorySlice'
import SearchReducer from '../features/SearchSlice'

const Store = configureStore({
  reducer: {
    cart:CartReducer,
    category:CategoryReducer,
    search:SearchReducer


  }
})

export default Store