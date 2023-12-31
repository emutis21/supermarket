import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { ProductCompleted, ProductId, ProductsState, ProductWithBarCode } from './types'

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
}

export const productSlide = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<ProductWithBarCode>) => {
      state.products.push(action.payload)
    },
    deleteProductById: (state, action: PayloadAction<ProductId>) => {
      const id = action.payload
      state.products = state.products.filter((product) => product.id !== id)
      return state
    },
    editProduct: (state, action: PayloadAction<ProductCompleted>) => {
      const product = action.payload
      const index = state.products.findIndex((product) => product.id === product.id)
      if (index !== -1) {
        state.products[index] = product
      }
    }
  },
})

export default productSlide.reducer

export const { addNewProduct, deleteProductById } = productSlide.actions
