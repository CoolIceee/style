import { configureStore } from '@reduxjs/toolkit'

import authSlice from './features/authSlice'
import basketSlice from './features/basketAndLikeSlice'
import categorySlice from './features/categorySlice'
import productCategorySlice from './features/productCategorySlice'
import productSlice from './features/productSlice'
import subcategoriesSlice from './features/subcategoriesSlice'
import userSlice from './features/userSlice'
export const store = configureStore({
  reducer: {
    category: categorySlice,
    subcategory: subcategoriesSlice,
    product: productSlice,
    auth: authSlice,
    user: userSlice,
    pCategory: productCategorySlice,
    basket: basketSlice
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
